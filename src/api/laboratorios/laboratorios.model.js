import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from "sequelize";
import UsuarioModel from "../usuarios/usuario.model.js";

export default sequelize.define('laboratoriosModel', {

    id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false
    },
    // allow null: true -> nulo
    // alow null: false -> no nulo - required
    usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: UsuarioModel,
            key: 'id'
        }
    },
    laboratorio_codigo: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    contacto: {
        type: DataTypes.STRING(50)
    },
    telefono_fijo: {
        type: DataTypes.INTEGER(15)
    },
    telefono_celular: {
        type: DataTypes.INTEGER(15)
    },
    correo_electronico: {
        type: DataTypes.STRING(50),
        unique: true,
        validate: {
            isEmail: true
        }
    },
    web: {
        type: DataTypes.STRING(150)
    },
    notas: {
        type: DataTypes.STRING(250)
    },
    fecha_ultima_consulta: {
        type: DataTypes.DATE
    }


}, { tableName: 'laboratorios' })