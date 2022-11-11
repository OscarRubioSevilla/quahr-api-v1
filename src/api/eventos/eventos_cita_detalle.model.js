import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from "sequelize";
import pacienteModel from "../pacientes/paciente.model.js";

export default sequelize.define('Evento_cita_detalleModel', {

    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    paciente_id: {
        type: DataTypes.BIGINT,
        references: {
            model: pacienteModel,
            key: 'id'
        }
    },
    presupuesto_id: {
        type: DataTypes.BIGINT
    }


}, { tableName: 'eventos_cita_detalle' })