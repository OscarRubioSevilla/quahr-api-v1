import eventoModel from "./evento.model.js"


export const getAll = async(req, res) => {
    try {
        const eventos = await eventoModel.findAll()
        res.json({
            succes: true,
            massage: 'Eventos Obtenidos',
            data: eventos
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
            usario_id,
            google_evento_id,
            status,
            descripcion,
            comentarios
        } = req.body;
        const evento = await eventoModel.create({
            usario_id,
            google_evento_id,
            status,
            descripcion,
            comentarios

        })
        res.json({
            succes: true,
            massage: 'Evento creado',
            data: evento
        })
    } catch (error) {
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