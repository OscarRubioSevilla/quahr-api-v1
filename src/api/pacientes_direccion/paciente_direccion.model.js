import { sequelize } from './../../db/sequelize.js';
import { DataTypes } from 'sequelize';

import PacienteModel from '../pacientes/paciente.model.js';


export default sequelize.define('Paciente_direccionModel', {

        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false
        },
        paciente_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: PacienteModel,
                key: 'id'
            }
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

    }, { tableName: 'pacientes_direccion' }

)