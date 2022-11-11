import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from "sequelize";
import Evento from "./evento.model.js";
import Orden from '../laboratorios_ordenes/laboratorio_ordenes.model.js';

export default sequelize.define('EventoOrdenModel', {
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
    orden_id: {
        type: DataTypes.BIGINT,
        references: {
            model: Orden,
            key: 'id'
        }
    }

}, { tableName: 'eventos_orden_detalle' })