import { createCode } from "../../utils/utils.js";
import Laboratorios_direccionModel from "../laboratorios_direccion/laboratorios_direccion.model.js";
import laboratoriosModel from "./laboratorios.model.js";

export const getAll = async(req, res) => {
    try {

        const laboratorios = await laboratoriosModel.findAll({
            include: { model: Laboratorios_direccionModel, as: 'direccion' }
        })
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
            nombre,
            contacto,
            telefono_fijo,
            telefono_celular,
            correo_electronico,
            web,
            notas
        } = req.body;


        const laboratorios = await laboratoriosModel.findAll({
            where: { usuario_id },
            order: [
                ['fecha_creacion', 'desc']
            ]
        })

        const laboratorio_codigo = createCode({
            data: laboratorios,
            code_field: 'laboratorio_codigo',
            prefix: 'LAB'
        });

        const laboratorio = await laboratoriosModel.create({

            usuario_id,
            laboratorio_codigo,
            nombre,
            contacto,
            telefono_fijo,
            telefono_celular,
            correo_electronico,
            web,
            notas
        })

        laboratorio.createDireccion({
            calle: 'Marxo',
            numero: 77
        })
        res.json({
            succes: true,
            massage: 'Laboratorio creado',
            data: laboratorio
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'Laboratorio no creado',
            error
        })
        console.log(error)
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
            nombre,
            contacto,
            telefono_fijo,
            telefono_celular,
            correo_electronico,
            web,
            notas
        } = req.body

        await laboratoriosModel.update({
            nombre,
            contacto,
            telefono_fijo,
            telefono_celular,
            correo_electronico,
            web,
            notas,
            fecha_ultima_consulta
        }, { where: { id: req.params.id } });
        res.json({
            succes: true,
            massage: 'Laboratorio actualizado'
        })
    } catch (error) {
        res.json({
            succes: true,
            massage: 'Laboratorio no actualizado',
            error
        })

    }
}