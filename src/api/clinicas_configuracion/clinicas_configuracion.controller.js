import Clinicas_configurarionModel from "./clinicas_configuracion.model";


export const getAll = async(req, res) => {
    try {
        await Clinicas_configurarionModel.findAll()
        res.json({
            succes: true,
            massage: 'clinicas_Configuracion obtenidas'
        })

    } catch (error) {
        res.json({
            succes: true,
            massage: 'clinicas_Configuracion no Obtenidas'
        })

    }

}

export const update = async(req, res) => {}