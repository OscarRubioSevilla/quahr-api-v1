import laboratoriosModel from "./laboratorios.model.js";



export const getAll = async(req, res) => {
    try {

        const laboratorios = await laboratoriosModel.findAll()
        res.json({
            succes: true,
            massage: 'Laboratorios obtenidos',
            data: laboratorios
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'Laboratorios no obtenidos',
            error
        })

    }
}
export const getOne = async(req, res) => {
    try {
        const laboratorios = await laboratoriosModel.findOne({ where: { id: req.params.id } })
        res.json({
            succes: true,
            massage: 'Laboratorio obtenido',
            data: laboratorios
        })

    } catch (error) {
        res.json({
            succes: true,
            massage: 'Laboratorio no obtenio',
            error
        })

    }
}
export const create = async(req, res) => {
    try {
        const {
            usuario_id,
            laboratorio_codigo,
            nombre,
            contacto,
            telefono_fijo,
            telefono_celular,
            correo_electronico,
            web,
            notas,
            fecha_ultima_consulta
        } = req.body;
        const laboratorios = await laboratoriosModel.create({

            usuario_id,
            laboratorio_codigo,
            nombre,
            contacto,
            telefono_fijo,
            telefono_celular,
            correo_electronico,
            web,
            notas,
            fecha_ultima_consulta
        })
        res.json({
            succes: true,
            massage: 'Labratorio creado',
            data: laboratorios
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'Laboratorio no creado',
            error
        })

    }

}
export const deleteOne = async(req, res) => {
    try {
        await laboratoriosModel.destroy({ where: { id: req.params.id } })
        res.json({
            succes: true,
            massage: 'Laboratorio eliminado'
        })

    } catch (error) {
        res.json({
            succes: true,
            massage: 'Laboratorio no eliminado',
            error
        })

    }
}
export const update = async(req, res) => {
    try {
        const {
            usuario_id,
            laboratorio_codigo,
            nombre,
            contacto,
            telefono_fijo,
            telefono_celular,
            correo_electronico,
            web,
            notas,
            fecha_ultima_consulta
        } = req.body

        const laboratorio = await laboratoriosModel.update({
            usuario_id,
            laboratorio_codigo,
            nombre,
            contacto,
            telefono_fijo,
            telefono_celular,
            correo_electronico,
            web,
            notas,
            fecha_ultima_consulta
        }, { where: { id: req.params.id } })
        res.json({

            succes: true,
            massage: 'Laboratorio actualizado',
            data: laboratorio
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'Laboratorio no actualizado',
            error
        })

    }
}