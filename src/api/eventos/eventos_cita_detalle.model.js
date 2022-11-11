import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from "sequelize";
import PacienteModel from "../pacientes/paciente.model.js";
import EventoModel from "./evento.model.js";

export default sequelize.define('Evento_cita_detalleModel', {

    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    evento_id: {
        type: DataTypes.BIGINT,
        references: {
            model: EventoModel,
            key: 'id'
        }
    },
    paciente_id: {
        type: DataTypes.BIGINT,
        references: {
            model: PacienteModel,
            key: 'id'
        }
    },
    presupuesto_id: {
        type: DataTypes.BIGINT
    }


}, { tableName: 'eventos_cita_detalle' })