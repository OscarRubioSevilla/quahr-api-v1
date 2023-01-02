import { comparar } from '../../utils/crypt.js';
import UsuarioModel from '../usuarios/usuario.model.js'
import { crearToken } from '../../utils/jwt.js';


export const login = async(req, res) => {

    try {

        if (!req.body.password && !req.body.email) {
            return res.json({
                success: false,
                message: "Correo o contraseña incorrectos"
            }).status(401);
        }

        const usuario = await UsuarioModel.findOne({ where: { email: req.body.email } });
        if (!usuario) {
            return res.json({
                success: false,
                message: "Correo o contraseña incorrectos"
            }).status(401);
        }
        const validado = await comparar(req.body.password, usuario.password);
        if (validado) {
            const token = crearToken(usuario);

            res.cookie("refreshToken", token, {
                httpOnly: true,
                secure: false, // ssl
                expires: new Date(Date.now() + ((60*20) * 1000))
            });

            res.json({
                success: true,
                message: 'Sesión iniciada'
            }).status(200);
        } else {
            res.json({
                success: false,
                message: "Correo o contraseña incorrectos"
            }).status(401);
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}