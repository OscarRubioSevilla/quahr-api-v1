import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from 'sequelize';
import laboratoriosModel from "../laboratorios/laboratorios.model.js";

export default sequelize.define('laboratorios_direccionModel', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    laboratorio_id: {
        type: DataTypes.BIGINT,
        references: { key: 'id', model: laboratoriosModel }
    },

    municipio_id: {
        type: DataTypes.INTEGER,

    },
    estado_id: {
        type: DataTypes.INTEGER,

    },
    pais_id: {
        type: DataTypes.INTEGER,

    },
    calle: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    numero: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    numero_interior: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    cp: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    localidad: {
        type: DataTypes.STRING(30),

    }

}, { tableName: 'laboratorios_direccion' })