import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from "sequelize";
import UsuariosModel from '../usuarios/usuario.model.js'

export default sequelize.define('EventosModel', {

    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },

    id_usuario: {
        type: DataTypes.BIGINT,
        references: {
            model: UsuariosModel,
            key: 'id'
        }
    },
    google_evento_id: {
        type: DataTypes.STRING(255),
    },
    status: {
        type: DataTypes.ENUM('Cita', 'Evento', 'Orden')
    },
    descripcion: {
        type: DataTypes.STRING(200)
    },
    fecha_fin: {
        type: DataTypes.DATE
    },
    fecha_inicio: {
        type: DataTypes.DATE
    },
    fecha_inicio: {
        type: DataTypes.TIME
    },
    fecha_fin: {
        type: DataTypes.TIME
    },
    comentarios: {
        type: DataTypes.TEXT
    }


}, { tableName: 'eventos' })