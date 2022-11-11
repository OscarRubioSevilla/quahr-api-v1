import PacienteModel from "./paciente.model.js";
import UsuarioModel from "../usuarios/usuario.model.js";
import paciente_DireccionModel from "../pacientes_direccion/paciente_direccion.model.js";
import { createCode } from "../../utils/utils.js";



export const getAll = async(req, res) => {

    try {
        const pacientes = await PacienteModel.findAll({
            include: {

                model: UsuarioModel,
                as: 'usuario'
            },
            include: {
                model: paciente_DireccionModel,
                as: 'direccion'
            }
        })
        res.json({
            success: true,
            message: 'Pacientes obtenidos',
            data: pacientes
        })
    } catch (error) {
        res.json({
            success: true,
            massage: 'Pacientes no obtenidos'
        })

    }

}
export const getOne = async(req, res) => {

    try {
        const paciente = await PacienteModel.findByPk(req.params.id)
        res.json({
            success: true,
            message: 'Paciente obtenido',
            data: paciente
        })
    } catch (error) {
        req.json({
            success: true,
            massage: 'Paciente no obtenido'
        })

    }

}
export const create = async(req, res) => {
    try {
        const {
            usuario_id,
            nombre,
            apellido_paterno,
            apellido_materno,
            fecha_nacimiento,
            genero,
            ocupacion,
            email,
            contacto_emergencia,
            contacto_emergencia_parentezco,
            contacto_emergencia_telefono,
            notas
        } = req.body;
        const paciente = await PacienteModel.findAll({
            where: { usuario_id },
            order: [
                ['fecha_creacion', 'desc']
            ]
        })
        const paciente_codigo = createCode({
            data: paciente,
            code_field: 'paciente_codigo',
            prefix: 'PAC',
        })


        const pacientes = await PacienteModel.create({
            usuario_id,
            nombre,
            paciente_codigo,
            apellido_paterno,
            apellido_materno,
            fecha_nacimiento,
            genero,
            ocupacion,
            email,
            contacto_emergencia,
            contacto_emergencia_parentezco,
            contacto_emergencia_telefono,
            notas

        })

        await pacientes.createDireccion({
            calle: 'alguna',
            numero: 2
        })


        // Aqui va function codigo


        res.json({
            success: true,
            message: 'Paciente creado',
            data: pacientes
        })
    } catch (error) {
        res.json({
            success: true,
            massage: 'Paciente no creado',
            error
        })

    }

}
export const update = async(req, res) => {
    try {
        const {
            nombre,
            apellido_paterno,
            apellido_materno,
            fecha_nacimiento,
            genero,
            ocupacion,
            email,
            contacto_emergencia,
            contacto_emergencia_parentezco,
            contacto_emergencia_telefono,
            notas
        } = req.body;
        const paciente = await PacienteModel.update({
            nombre,
            apellido_paterno,
            apellido_materno,
            fecha_nacimiento,
            genero,
            ocupacion,
            email,
            contacto_emergencia,
            contacto_emergencia_parentezco,
            contacto_emergencia_telefono,
            notas
        }, { where: { id: req.params.id } })
        res.json({
            success: true,
            massage: 'Paciente actualizado',
            paciente
        })

    } catch (error) {
        res.json({
            success: true,
            massage: 'Paciente no actualizado',
            error
        })
    }
}
export const deleteOne = async(req, res) => {

    try {
        PacienteModel.destroy({
            where: {
                id: req.params.id
            }
        })

        res.json({
            success: true,
            massage: 'Paciente eliminado',

        })
    } catch (error) {
        res.json({
            success: true,
            massage: 'Paciente no eliminado',
        })
    }

}