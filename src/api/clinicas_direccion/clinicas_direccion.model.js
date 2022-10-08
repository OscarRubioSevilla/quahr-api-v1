import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from 'sequelize';
import ClinicaModel from '../clinicas/clinica.model.js'
import DireccionModel from "../direccion/direccion_model.js";

export default sequelize.define('clinicas_direccionModel', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    clinica_id: {
        type: DataTypes.BIGINT,
        references: { key: 'id', model: ClinicaModel }
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

}, { tableName: 'clinicas_direccion' })