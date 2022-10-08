import { sequelize } from '../../db/sequelize.js';
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
            key: id
        }
    },
    paquete: {
        type: DataTypes.INTEGER(11),
        defaultValue: 3
    },
    status: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0
    },
    verificar_email_hash: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    tipo_cuenta: {
        type: DataTypes.ENUM('prueba', 'normal'),
        defaultValue: 'prueba'
    },
    suscripcion: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0
    },
    fecha_fin_cuenta: {
        type: DataTypes.DATE
    },
    cuenta_verificada: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0
    },
    recordatorios_pacientes: {
        type: DataTypes.TINYINT(1),
        defaultValue: 1
    },
    hoja_membretada: {
        type: DataTypes.TINYINT(1)
    },
    margen_superior: {
        type: DataTypes.INTEGER(11)
    },
    margen_inferior: {
        type: DataTypes.INTEGER(11)
    },
    informacion_clinica: {
        type: DataTypes.TINYINT(1)
    },
    pie_pagina: {
        type: DataTypes.TINYINT(1)
    },
    link_google_perfil_negocio: {
        type: DataTypes.STRING(200)
    },
    link_google_review: {
        type: DataTypes.STRING(200)
    },
    id_google_business: {
        type: DataTypes.INTEGER
    }
})