import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from "sequelize";


export default sequelize.define('direccionModel', {
    id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false
    },

    direccion_calle: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    direccion_numero: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    direccion_numero_interior: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    direccion_cp: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    direccion_localidad: {
        type: DataTypes.STRING(30),

    },
    direccion_municipio_id: {
        type: DataTypes.INTEGER,

    },
    direccion_estado_id: {
        type: DataTypes.INTEGER,

    },
    direccion_pais_id: {
        type: DataTypes.INTEGER,

    },
}, { tableName: 'direcciones' })