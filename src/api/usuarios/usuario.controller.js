import UsuarioModel from "./usuario.model.js";
import clinicaModel from "../clinicas/clinica.model.js";
import UsuarioDireccionModel from "../usuarios_direccion/usuarios_direccion.model.js";

// Get all retorna todos los datos
export const getAll = async(req, res) => {
        try {

            const usuarios = await UsuarioModel.findAll({
                include: {
                    attributes: [
                        'id', ['nombre', 'nombre']
                    ],

                    model: clinicaModel,
                    as: 'clinica'
                },
                include: {
                    model: UsuarioDireccionModel,
                    as: 'direccion'
                }
            });
            res.json({
                success: true,
                message: 'usuarios obtenidos',
                data: usuarios
            })
        } catch (error) {

        }
    }
    // get one
export const getOne = async(req, res) => {
        try {

            const usuario = await UsuarioModel.findByPk(req.params.id);

            res.json({
                success: true,
                message: 'Usuario obtenido',
                data: usuario
            })
        } catch (error) {
            res.json({
                success: true,
                message: 'Usuario no obtenido',
                error
            })
        }
    }
    // create
export const create = async(req, res) => {
        try {
            const {
                clinica_id,
                tipo_usuario,
                email,
                password,
                verificacion_2pasos,
                codigo_verificacion,
                fecha_codigo_verificacion,
                intentos_login,
                recuperar_password_hash,
                ultimo_inicio,
                email_secundario,
                nombre,
                apellido_paterno,
                apellido_materno,
                prefijo,
                especialidad,
                nombre_comunidad,
                comunidad_fecha,
                ingreso_comunidad,
                genero,
                cedula_profesional,
                visita_comunidad,
                ruta,
                ruta_comunidad,
                meses_visitas_panel
            } = req.body;


            // Validar cuando sea necesario

            const usuario = await UsuarioModel.create({
                clinica_id,
                tipo_usuario,
                email,
                password,
                verificacion_2pasos,
                codigo_verificacion,
                fecha_codigo_verificacion,
                intentos_login,
                recuperar_password_hash,
                ultimo_inicio,
                email_secundario,
                nombre,
                apellido_paterno,
                apellido_materno,
                prefijo,
                especialidad,
                nombre_comunidad,
                comunidad_fecha,
                ingreso_comunidad,
                genero,
                cedula_profesional,
                visita_comunidad,
                ruta,
                ruta_comunidad,
                meses_visitas_panel
            });

            // Añadir usuario direccion (special methods) https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances
            usuario.createDireccion({
                calle: 'Mi calle'
            });

            res.json({
                success: true,
                message: 'Usuario creado'
            })
        } catch (error) {
            res.json({
                success: true,
                message: 'Usuario no creado',
                error
            })
            console.log(error)
        }
    }
    // delete one
export const deleteOne = async(req, res) => {
        try {
            const usuario = await UsuarioModel.destroy({
                where: {
                    id: req.params.id
                }
            })

            res.json({
                success: true,
                message: 'Usuario eliminado'
            })
        } catch (error) {
            res.json({
                success: true,
                message: 'Usuario no eliminado',
                error
            })
        }
    }
    //update
export const update = async(req, res) => {
    try {

        const {
            email_secundario,
            nombre,
            apellido_paterno,
            apellido_materno,
            prefijo,
            especialidad,
            nombre_comunidad,
            genero,
            cedula_profesional,
            visita_comunidad,
            ruta,
            ruta_comunidad,
            calle
        } = req.body;
        // Validar cuando sea necesario
        // Solo actualizar los campos permitidos

        await UsuarioModel.update({
            email_secundario,
            nombre,
            apellido_paterno,
            apellido_materno,
            prefijo,
            especialidad,
            nombre_comunidad,
            genero,
            cedula_profesional,
            visita_comunidad,
            ruta,
            ruta_comunidad

        }, {
            where: {
                id: req.params.id
            }
        });


        // Actualizar dirección
        UsuarioDireccionModel.update({
            calle
        }, {
            where: {
                usuario_id: req.params.id
            }
        })

        res.json({
            success: true,
            message: 'Usuario actualizado'
        })
    } catch (error) {
        res.json({
            success: true,
            message: 'Usuario no actualizado',
            error
        })
        console.log(error)
    }
}