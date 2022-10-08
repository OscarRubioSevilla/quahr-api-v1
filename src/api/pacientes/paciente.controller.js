import PacienteModel from "./paciente.model.js";


export const getAll = async(req, res) => {

    try {
        const pacientes = await PacienteModel.findAll({})
        res.json({
            success: true,
            message: 'Pacientes obtenidos',
            data: pacientes
        })
    } catch (error) {
        req.json({
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
            paciente_codigo,
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
            notas,
            fecha_registro,
            fecha_modificacion,
            fecha_ultima_consulta
        } = req.body;

        const paciente = await PacienteModel.create({
                usuario_id,
                paciente_codigo,
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
                notas,
                fecha_registro,
                fecha_modificacion,
                fecha_ultima_consulta
            }

        )
        res.json({
            success: true,
            message: 'Paciente creado',
            data: paciente
        })
    } catch (error) {
        res.json({
            success: true,
            massage: 'Paciente no creado'
        })

    }

}
export const update = async(req, res) => {
    try {
        const {
            usuario_id,
            paciente_codigo,
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
            notas,
            fecha_registro,
            fecha_modificacion,
            fecha_ultima_consulta
        } = req.body;
        const paciente = await PacienteModel.update({
            usuario_id,
            paciente_codigo,
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
            notas,
            fecha_registro,
            fecha_modificacion,
            fecha_ultima_consulta

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