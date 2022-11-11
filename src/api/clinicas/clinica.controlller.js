// Aqui van los metodos de las rutas
// Puedes importar los modelos que requieras
// Aunque lo ideal y buena practica es que solo importes los modelos relacionados si los necesitas

import ClinicaModel from './clinica.model.js';
import UsuarioModel from '../usuarios/usuario.model.js';
import ClinicasDireccion from '../clinicas_direccion/clinicas_direccion.model.js'

// Get all retorna todos los datos
export const getAll = async(req, res) => {
        try {
            const clinicas = await ClinicaModel.findAll({
                include: {
                    model: UsuarioModel,
                    as: 'usuarios',
                    include: {
                        model: ClinicaModel,
                        as: 'clinica'
                    },
                }
            });

            res.json({
                success: true,
                message: 'Clinicas obtenidas',
                data: clinicas

            })
        } catch (error) {
            res.json({
                success: true,
                message: 'Clinicas no obtenidas',
                data: error

            })
        }
    }
    // get one
export const getOne = async(req, res) => {
        try {

            const clinica = await ClinicaModel.findByPk(req.params.id);

            res.json({
                success: true,
                message: 'Clinica obtenida',
                data: clinica
            })
        } catch (error) {
            res.json({
                success: true,
                message: 'Clinica no obtenida',
                error
            })
        }
    }
    // create
export const create = async(req, res) => {
        try {
            const {
                nombre,
                telefono_fijo,
                telefono_celular,
                direccion_calle,
                direccion_numero,
                direccion_numero_interior,
                direccion_cp,
                direccion_localidad,
                direccion_municipio_id,
                direccion_estado_id,
                direccion_pais_id,
                consentimiento_informado,
                mensaje_mail,
                firma_mail,
                ruta
            } = req.body;

            // Validar cuando sea necesario

            const clinica = await ClinicaModel.create({
                nombre,
                telefono_fijo,
                telefono_celular,
                direccion_calle,
                direccion_numero,
                direccion_numero_interior,
                direccion_cp,
                direccion_localidad,
                direccion_municipio_id,
                direccion_estado_id,
                direccion_pais_id,
                consentimiento_informado,
                mensaje_mail,
                firma_mail,
                ruta
            });

            clinica.createDireccion({
                calle: 'una calle',
                numero: 7
            })
            clinica.createConfiguracion({
                paquete: 1,
                status: 0
            })

            res.json({
                success: true,
                message: 'Clinica creada'
            })
        } catch (error) {
            res.json({
                success: true,
                message: 'Clinica no creada',
                error
            })
            console.log(error)
        }
    }
    // delete one
export const deleteOne = async(req, res) => {
        try {

            const clinica = await ClinicaModel.destroy({
                where: {
                    id: req.params.id
                }
            })

            res.json({
                success: true,
                message: 'Clinica eliminada'
            })
        } catch (error) {
            res.json({
                success: true,
                message: 'Clinica no eliminada',
                error
            })
        }
    }
    //update
export const update = async(req, res) => {
    try {

        const {
            nombre,
            telefono_fijo,
            telefono_celular,
            direccion_calle,
            direccion_numero,
            direccion_numero_interior,
            direccion_cp,
            direccion_localidad,
            direccion_municipio_id,
            direccion_estado_id,
            direccion_pais_id,
            consentimiento_informado,
            mensaje_mail,
            firma_mail,
            ruta
        } = req.body;

        // Validar cuando sea necesario

        // Solo actualizar los campos permitidos
        await ClinicaModel.update({
            nombre,
            telefono_fijo,
            telefono_celular,
            direccion_calle,
            direccion_numero,
            direccion_numero_interior,
            direccion_cp,
            direccion_localidad,
            direccion_municipio_id,
            direccion_estado_id,
            direccion_pais_id,
            consentimiento_informado,
            mensaje_mail,
            firma_mail,
            ruta
        }, {
            where: {
                id: req.params.id
            }
        });

        res.json({
            success: true,
            message: 'Clinica actualizada'
        })
    } catch (error) {
        res.json({
            success: true,
            message: 'Clinica no actualizada',
            error
        })
        console.log(error)
    }
}

// Esos son los metodos basicos
// Aqui puedes comenzar a crear los metodos que necesitees