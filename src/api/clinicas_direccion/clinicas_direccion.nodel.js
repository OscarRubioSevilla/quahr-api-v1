import { sequelize } from "../../db/sequelize";
import { DataTypes } from 'sequelize';
import ClinicaModel from '../clinicas/clinica.model.js'
import DireccionModel from "../direccion/direccion_model";

export default clinicas_direccion = sequelize.define('clinicas_direccion', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    clinica_id: {
        type: DataTypes.BIGINT,
        references: { key: id, model: ClinicaModel }
    },
    id: {
        type: DataTypes.BIGINT,
        references: { key: id, model: DireccionModel }
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

})