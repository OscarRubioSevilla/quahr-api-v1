import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from "sequelize";
import UsuarioModel from "../usuarios/usuario.model.js";

export default sequelize.define('laboratoriosModel', {

    id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: true
    },

    usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
            model: UsuarioModel,
            key: 'id'
        }
    },
    laboratorio_codigo: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    contacto: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    telefono_fijo: {
        type: DataTypes.INTEGER(15),
        allowNull: true
    },
    telefono_celular: {
        type: DataTypes.INTEGER(15),
        allowNull: true
    },
    correo_electronico: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    web: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    notas: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    fecha_ultima_consulta: {
        type: DataTypes.DATE,
        allowNull: true
    }


}, { tableName: 'laboratorios' })