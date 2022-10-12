import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from 'sequelize';
import DireccionModel from "../direccion/direccion_model.js";
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
    direccion_id: {
        type: DataTypes.BIGINT,
        references: { key: 'id', model: DireccionModel }
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
    cp: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    localidad: {
        type: DataTypes.STRING(30),

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

}, { tableName: 'laboratorios_direccion' })