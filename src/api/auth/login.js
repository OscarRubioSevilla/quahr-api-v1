import { comparar } from '../../utils/crypt.js';
import UsuarioModel from '../usuarios/usuario.model.js'
import { crearToken } from '../../utils/jwt.js';




export const login = async(req, res) => {

    try {
        const usuario = await UsuarioModel.findOne({ where: { email: req.body.email } });
        const pass_body = req.body.password;
        const pas_usa = usuario.password;
        const ema = req.body.email;
        const us_ = usuario.email
        if (!usuario) {
            res.json({
                mensaje: "Correo o contraseña incorrecto",
                codigo: 500

            })
        }
        const validado = await comparar(req.body.password, usuario.password);
        if (validado) {
            const token = crearToken(usuario);

            res.json({
                mensaje: 'Autenticación correcta',
                token,
                codigo: 200
            });
        } else {
            res.json({
                mensaje: "Contraseña o correo incorrecto",
                codigo: 500,
                pass_body,
                pas_usa,
                ema,
                us_
            });
        }
    } catch (error) {
        res.json({
            mensaje: error.message
        });
    }
}