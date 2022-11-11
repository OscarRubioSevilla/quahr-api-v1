import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from "sequelize";
import Evento from "./evento.model.js";
import Laboratorio from '../laboratorios/laboratorios.model.js'
import Orden from '../laboratorios_ordenes/laboratorio_ordenes.model.js'
import Paciente from "../pacientes/paciente.model.js";

export default sequelize.define('Eventos_LaboratorioModel', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    evento_id: {
        type: DataTypes.BIGINT,
        references: {
            model: Evento,
            key: 'id'
        }
    },
    laboratorio_id: {
        type: DataTypes.BIGINT,
        references: {
            model: Laboratorio,
            key: 'id'
        }
    },
    orden_id: {
        type: DataTypes.BIGINT,
        references: {
            model: Orden,
            key: 'id'
        }
    },
    paciente_id: {
        type: DataTypes.BIGINT,
        references: {
            model: Paciente,
            key: 'id'
        }
    },
    presupuesto_id: {
        type: DataTypes.BIGINT
    }

}, { tableName: 'eventos_laboratorio_detalle' })