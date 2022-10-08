import { sequelize } from './../../db/sequelize';
import { DataTypes } from 'sequelize';
import { UsuariosModel } from '../usuarios/usuario.model.js'
import DireccionModel from '../direccion/direccion_model.js';

export default sequelize.define('usuarios_direccionModel', {
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
            key: id
        }
    },
    direccion_id: {
        type: DataTypes.BIGINT,
        references: {
            model: DireccionModel,
            key: id
        }
    },
    calle: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    numero: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    numero_interior: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    codigo_postal: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    localidad: {
        type: DataTypes.STRING(30),
        allowNull: false
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
}, { tableName: 'usuarios_direccionModel' })
