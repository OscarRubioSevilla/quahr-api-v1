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
        allowNull: true,
    },
    usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
            model: usuarioModel,
            key: 'id'
        }
    },
    laboratorio_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
            model: laboratoriosModel,
            key: 'id'
        }
    },
    paciente_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
            model: pacienteModel,
            key: 'id'
        }
    },
    presupuesto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    orden_codigo: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    fecha_solicitud: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    fecha_entrega: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('En Proceso', 'Finalizado', 'Cancelado'),
        allowNull: true
    },
    trabajo_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    tipo_trabajo: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    colorimetro_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    color: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    area_pieza: {
        type: DataTypes.STRING(50),
        allowNull: true
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
        allowNull: true
    }

}, { tableName: 'laboratorio_ordenes' })