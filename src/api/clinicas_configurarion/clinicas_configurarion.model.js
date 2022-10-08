import { sequelize } from './../../db/sequelize.js';
import { DataTypes } from 'sequelize';
import ClinicaModel from '../clinicas/clinica.model.js'


export default sequelize.define('Clinicas_configuracionModel', {

    id: {
        primaryKey: true,
        type: DataTypes.BIGINT,
        allowNull: false
    },
    clinica_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: ClinicaModel,
            key: 'id'
        }
    },
    paquete: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    status: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    verificar_email_hash: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    tipo_cuenta: {
        type: DataTypes.ENUM('prueba', 'normal'),
        allowNull: false
    },
    suscripcion: {
        type: DataTypes.TINYINT(1),
        allowNull: true
    },
    fecha_fin_cuenta: {
        type: DataTypes.DATE,
        allowNull: false
    },
    cuenta_verificada: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    recordatorios_pacientes: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    hoja_membretada: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    margen_superior: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    margen_inferior: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    informacion_clinica: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    logo_clinica: {
        type: DataTypes.TINYINT(1),
        allowNull: true
    },
    pie_pagina: {
        type: DataTypes.TINYINT(1),
        allowNull: false
    },
    link_google_perfil_negocio: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    link_google_review: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    id_google_business: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

})