import { sequelize } from './../../db/sequelize';
import { DataTypes } from 'sequelize';

import PacienteModel from '../pacientes/paciente.model';
import Direccion_model from '../direccion/direccion_model.js';


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
        direccion_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: Direccion_model,
                key: 'id'
            }
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

    }, { tableName: 'pacientes_direccion' }

)