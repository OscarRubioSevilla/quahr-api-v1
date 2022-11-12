import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from "sequelize";
import UsuariosModel from '../usuarios/usuario.model.js'

export default sequelize.define('EventosModel', {

    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: UsuariosModel,
            key: 'id'
        }
    },
    google_evento_id: {
        type: DataTypes.STRING(255),
    },
    tipo: {
        type: DataTypes.ENUM('Cita', 'Evento', 'Orden'),
        defaultValue: 'Evento'
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
    hora_inicio: {
        type: DataTypes.TIME
    },
    hora_fin: {
        type: DataTypes.TIME
    },
    comentarios: {
        type: DataTypes.TEXT
    }


}, { tableName: 'eventos' })