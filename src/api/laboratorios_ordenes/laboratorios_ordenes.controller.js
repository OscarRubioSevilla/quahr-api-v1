import laboratorio_ordenesModel from "./laboratorio_ordenes.model.js";


export const getAll = async(req, res) => {
    try {
        const laboratorio_ordenes = await laboratorio_ordenesModel.findAll();

        res.json({
            succes: true,
            massage: 'Laboratorio_Ordenes obtenidos',
            data: laboratorio_ordenes
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'laboratorio_ordenes no obtenido',
            error
        })
    }
}
export const getOne = async(req, res) => {
    try {
        const laboratorio_ordenes = laboratorio_ordenesModel.findOne({ where: { id: req.params.id } })
        res.json({
            succes: true,
            message: 'laboratorio_ordenes obtenido',
            data: laboratorio_ordenes
        })
    } catch (error) {

    }


}
export const create = async(req, res) => {
    try {
        const {
            usuario_id,
            laboratorio_id,
            paciente_id,
            presupuesto_id,
            orden_codigo,
            fecha_solicitud,
            fecha_entrega,
            status,
            trabajo_id,
            colorimetro_id,
            color,
            area_pieza,
            material_id,
            sustrato_id,
            costo
        } = req.body;
        const laboratorio_ordenes = await laboratorio_ordenesModel.create({
            usuario_id,
            laboratorio_id,
            paciente_id,
            presupuesto_id,
            orden_codigo,
            fecha_solicitud,
            fecha_entrega,
            status,
            trabajo_id,
            colorimetro_id,
            color,
            area_pieza,
            material_id,
            sustrato_id,
            costo
        })
        res.json({
            succes: true,
            message: 'Laboratorio_ordenes creado',
            data: laboratorio_ordenes
        });
        res.json({
            succes: true,
            massage: 'Laboratorio no creado',
            error
        })

    } catch (error) {

    }
}
export const deleteOne = async(req, res) => {
    try {
        await laboratorio_ordenesModel.destroy({ where: { id: req.params.id } })
        res.json({
            succes: true,
            massage: 'Laboratorio_ordenes eliminado',

        })


    } catch (error) {
        res.json({
            succes: true,
            massage: 'Labiratorio_ordenes no eliminado',
            error
        })

    }
}

export const update = async(req, res) => {
    try {
        const {
            usuario_id,
            laboratorio_id,
            paciente_id,
            presupuesto_id,
            orden_codigo,
            fecha_solicitud,
            fecha_entrega,
            status,
            trabajo_id,
            colorimetro_id,
            color,
            area_pieza,
            material_id,
            sustrato_id,
            costo
        } = req.body;
        const laboratorio_ordenes = await laboratorio_ordenesModel.update({
            usuario_id,
            laboratorio_id,
            paciente_id,
            presupuesto_id,
            orden_codigo,
            fecha_solicitud,
            fecha_entrega,
            status,
            trabajo_id,
            colorimetro_id,
            color,
            area_pieza,
            material_id,
            sustrato_id,
            costo
        }, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            succes: true,
            message: 'Laboratorio_ordenes creado',
            data: laboratorio_ordenes
        });
        res.json({
            succes: true,
            massage: 'Laboratorio no creado',
            error
        })

    } catch (error) {

    }
}