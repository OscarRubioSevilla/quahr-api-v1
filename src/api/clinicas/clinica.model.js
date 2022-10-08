// importa sequelize.js
import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from 'sequelize'; // define tipos
const { STRING } = DataTypes; // Asi puedes ver los campos disponibles
// Clinicas se le ponia MODElCLinica o algo asi ClinicaModel En singular el nombre
export default sequelize.define('ClinicaModel', {
    // AQui van los campos que van a ir en la db
    id: {
        type: DataTypes.BIGINT, // Todos los ids será de tipo BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // por defecto permite nulo
    },
    nombre: {
        type: STRING(200)
    },
    telefono_celular: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    telefono_fijo: {
        type: DataTypes.INTEGER
    },
    consentimiento_informado: {
        type: DataTypes.ENUM('No seleccionado', 'Predeterminado', 'Personalizado'),
        defaultValue: 'Predeterminado'
    },
    logo_clinica: {
        type: DataTypes.TINYINT(1),
        allowNull: 'clinica-default.png'
    },
    email_mensaje: {
        type: DataTypes.TEXT
    },
    email_firma: {
        type: DataTypes.STRING(255)
    },
    ruta: {
        type: DataTypes.STRING(200),
        defaultValue: 'clinica-default.png'
    },
}, {
    tableName: 'clinicas' // Así designas el nombre
})

// Squelize crea las tablas cuando usas el modelo
// Vamos a crear un archivo donde guardemos todos los modelos
// src/db/importaciones.js

// https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/#model-wide-validations