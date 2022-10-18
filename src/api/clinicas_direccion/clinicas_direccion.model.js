import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from 'sequelize';
import ClinicaModel from '../clinicas/clinica.model.js'

export default sequelize.define('clinicas_direccionModel', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    clinica_id: {
        type: DataTypes.BIGINT,
        references: { key: 'id', model: ClinicaModel }
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

}, { tableName: 'clinicas_direccion' })