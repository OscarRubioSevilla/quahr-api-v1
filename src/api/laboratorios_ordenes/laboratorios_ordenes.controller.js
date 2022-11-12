import OrdenModel from "./laboratorio_ordenes.model.js";
import EventoModel from "../eventos/evento.model.js";
import { createCode } from "../../utils/utils.js";

export const getAll = async(req, res) => {
    try {
        const laboratorio_ordenes = await OrdenModel.findAll();

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
        const laboratorio_ordenes = OrdenModel.findOne({ where: { id: req.params.id } })
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


        const ordenes = await OrdenModel.findAll({
            where: { usuario_id },
            order: [
                ['fecha_creacion', 'desc']
            ]
        })

        const orden_codigo = createCode({
            data: ordenes,
            code_field: 'orden_codigo',
            prefix: 'OT'
        });

        const OrdenCreada = await OrdenModel.create({
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

        const orden_id = OrdenCreada?.id || 0;
        // Crear evento tipo órden
        const EventoCreado = await EventoModel.create({
            usuario_id,
            tipo: 'Orden'
        });
        const evento_id = EventoCreado?.id || 0;
        // 
        await EventoCreado.createOrden_detalle({
            evento_id,
            orden_id
        })

        res.json({
            succes: true,
            message: 'Órden creada',
            data: OrdenCreada
        });
    } catch (error) {
        console.log(error)
        res.json({
            succes: false,
            message: 'Órden no creada',
            error
        });
    }
}
export const deleteOne = async(req, res) => {
    try {
        await OrdenModel.destroy({ where: { id: req.params.id } })
        res.json({
            succes: true,
            massage: 'órden eliminada',

        });

    } catch (error) {
        res.json({
            succes: true,
            massage: 'Órden no eliminada',
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
        const laboratorio_ordenes = await OrdenModel.update({
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
        
    } catch (error) {
        res.json({
            succes: false,
            message: 'Laboratorio no creado',
            error
        })
    }
}