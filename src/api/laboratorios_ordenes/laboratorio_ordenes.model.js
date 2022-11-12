import { sequelize } from "../../db/sequelize.js";
import { DataTypes, DATE } from "sequelize";
import usuarioModel from "../usuarios/usuario.model.js";
import laboratoriosModel from "../laboratorios/laboratorios.model.js";
import pacienteModel from '../pacientes/paciente.model.js'

export default sequelize.define('laboratorio_ordenesModel', {

    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: usuarioModel,
            key: 'id'
        }
    },
    laboratorio_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: laboratoriosModel,
            key: 'id'
        }
    },
    paciente_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: pacienteModel,
            key: 'id'
        }
    },
    presupuesto_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    orden_codigo: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    fecha_solicitud: {
        type: DataTypes.DATE
    },
    fecha_entrega: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.ENUM('En Proceso', 'Finalizado', 'Cancelado')
    },
    trabajo_id: {
        type: DataTypes.INTEGER(11)
    },
    tipo_trabajo: {
        type: DataTypes.INTEGER(11)
    },
    colorimetro_id: {
        type: DataTypes.INTEGER(11)
    },
    color: {
        type: DataTypes.STRING(50)
    },
    area_pieza: {
        type: DataTypes.STRING(50)
    },
    material_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    sustrato_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    costo: {
        type: DataTypes.DECIMAL(15, 2),
        allowNull: false
    }

}, { tableName: 'laboratorio_ordenes' })