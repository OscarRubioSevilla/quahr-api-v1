import { sequelize } from './../../db/sequelize.js';
import { DataTypes } from "sequelize";
import UsuarioModel from "../usuarios/usuario.model.js";

export default sequelize.define('PacienteModel', {

        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
            allowNull: false
        },
        usuario_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: UsuarioModel,
                key: 'id'
            }
        },
        paciente_codigo: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        apellido_paterno: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        apellido_materno: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        fecha_nacimiento: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        genero: {
            type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
            allowNull: false
        },
        ocupacion: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(254),
            unique: true,
            validate: {
                isEmail: true
            },
            allowNull: false
        }
        //Aqui deberia ir la direccion

        ,
        contacto_emergencia: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        contacto_emergencia_parentezco: {
            type: DataTypes.INTEGER,


        },
        contacto_emergencia_telefono: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        notas: {
            type: DataTypes.STRING(1200),
            allowNull: true
        },
        fecha_registro: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fecha_modificacion: {
            type: DataTypes.DATE,
            allowNull: false
        },
        fecha_ultima_consulta: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, { tableName: 'pacientes' }

)