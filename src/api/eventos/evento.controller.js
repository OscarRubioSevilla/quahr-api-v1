import PacienteModel from "../pacientes/paciente.model.js";
import eventoModel from "./evento.model.js"
import EventoCitaDetalleModel from "./eventos_cita_detalle.model.js";
import EventoOrdenDetalleModel from "./eventos_orden_detalle.model.js";
import usuarioModel from "../usuarios/usuario.model.js";
export const getAll = async(req, res) => {
    try {
        const citas = await eventoModel.findAll({ 
            include: {
                model: EventoCitaDetalleModel,
                as: 'cita_detalle',
                include: {
                    model: PacienteModel,
                    as: 'paciente'
                }
            },
            where: {tipo: 'Cita', 'usuario_id': 1 } 
        });

        const ordenes = await eventoModel.findAll({ 
            include: {
                model: EventoOrdenDetalleModel,
                as: 'orden_detalle'
            },
            where: {tipo: 'Orden'} 
        });

        const eventos = await eventoModel.findAll({ 
            where: {tipo: 'Evento'} 
        });

        const usuario_eventos = [...citas, ...ordenes, ...eventos];

        res.json({
            succes: true,
            massage: 'Eventos Obtenidos',
            data: usuario_eventos
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'Eventos no obtenidos',
            error
        })

    }

}
export const getOne = async(req, res) => {
    try {
        const evento = await eventoModel.findOne({ where: { id: req.params.id } })
        res.json({
            succes: true,
            massage: 'Evento obtenido',
            data: evento
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'Evento no obtenido',
            error
        })

    }
}
export const create = async(req, res) => {
    try {
        const {
            usuario_id,
            tipo,
            orden_id,
            paciente_id,
            descripcion,
            comentarios
        } = req.body;

        const evento = await eventoModel.create({
            usuario_id,
            tipo,
            descripcion,
            comentarios
        });

        const evento_id = evento?.id || 0;

        if (tipo == 'Orden') {
 
            await evento.createOrden_detalle({
                evento_id,
                orden_id
            })
            console.log('Orden_Detalle creado')

        } else if (tipo == 'Cita') {
            await evento.createCita_detalle({
                evento_id,
                paciente_id
            })
            console.log('Evento_Detalle creado')
        }

        // Validar los tipos orden y cita

        // cita
        // Guardar en eventos_cita_detalle
        // Orden
        // Guardar en eventos_orden_detalle


        res.json({
            succes: true,
            massage: 'Evento creado',
            data: evento
        })
    } catch (error) {
        console.log(error)
        res.json({
            succes: true,
            massage: 'Evento no creado',
            error
        })
    }
}
export const update = async(req, res) => {
    try {
        const {
            status,
            descripcion,
            comentarios
        } = req.body;

        await eventoModel.update({
            status,
            descripcion,
            comentarios
        }, { where: { id: req.params.id } })

        res.json({
            succes: true,
            massage: 'Evento  actualizado'
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'Evento no actualizado',
            error
        })

    }
}
export const deleteOne = async(req, res) => {
    try {
        await eventoModel.destroy({ where: { id: req.params.id } })
        res.json({
            succes: true,
            massage: 'Evento eliminado'
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'Evento no eliminado',
            error
        })
    }
}