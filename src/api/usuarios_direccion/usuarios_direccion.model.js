import { sequelize } from './../../db/sequelize.js';
import { DataTypes } from 'sequelize';
import UsuariosModel from '../usuarios/usuario.model.js'

export default sequelize.define('UsuarioDireccion', {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.BIGINT,
        references: {
            model: UsuariosModel,
            key: 'id'
        },
        allowNull: false
    },
    calle: {
        type: DataTypes.STRING(100)
    },
    numero: {
        type: DataTypes.STRING(10)
    },
    numero_interior: {
        type: DataTypes.STRING(10)
    },
    codigo_postal: {
        type: DataTypes.STRING(20)
    },
    localidad: {
        type: DataTypes.STRING(30)
    },
    municipio_id: {
        type: DataTypes.INTEGER,
    },
    estado_id: {
        type: DataTypes.INTEGER,

    },
    pais_id: {
        type: DataTypes.INTEGER,
    }
}, { tableName: 'usuarios_direccion' })