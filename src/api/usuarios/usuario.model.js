import { sequelize } from "../../db/sequelize.js";
import { DataTypes } from 'sequelize'; // define tipos
import ClinicaModel from "../../api/clinicas/clinica.model.js";
// Muy bien así si
// AHora hay algo que debes de ver
// Cuando exportas con nombre es porque probablemente exportaras mas objetos desde ese msmo archivo
// pero en estee caso de los modelos solo vamos a exportar 1
// por lo que debes de exportar por defecto para que cuando importes no tengas que usar ls llaves {}
// HAz el cambio del tipo de exportación
// Recuerda que para importar algo debes primero exportarlo ahora si, casi, estás exportando con const

export default sequelize.define('UsuarioModel', {
    // AQui van los campos que van a ir en la db
    id: {
        type: DataTypes.BIGINT, // Todos los ids será de tipo BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // por defecto permite nulo
    },

    clinica_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: { // usas este campo
            model: ClinicaModel,
            key: 'id'
        } // En esta parte eso es todo
    },
    tipo_usuario: {
        type: DataTypes.ENUM("Administrador", "Dentista", "Asistente"),
        allowNull: false,
        defaultValue: 'Administrador'
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
    email: {
        type: DataTypes.STRING(),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: {
                msg: 'Email requerido'
            },
            len: {
                args: [0, 254],
                msg: 'Email debe ser menor a 254 caracteres'
            }
        }
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    genero: {
        type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
        allowNull: false
    },
    verificacion_2pasos: {
        type: DataTypes.TINYINT
    },
    codigo_verificacion: {
        type: DataTypes.INTEGER(6)
    },
    fecha_codigo_verificacion: {
        type: DataTypes.DATE
    },
    intentos_login: {
        type: DataTypes.TINYINT
    },
    recuperar_password_hash: {
        type: DataTypes.STRING(32)
    },
    ultimo_inicio: {
        type: DataTypes.DATE
    },
    prefijo: {
        type: DataTypes.ENUM('', 'Dra.', 'Dr.')
    },
    especialidad: {
        type: DataTypes.STRING(30)
    },
    comunidad_nombre: {
        type: DataTypes.STRING(100)
    },
    comunidad_fecha: {
        type: DataTypes.DATE
    },
    comunidad_ingreso: {
        type: DataTypes.BOOLEAN(false)
    },
    cedula_profesional: {
        type: DataTypes.STRING(50)
    },
    visita_comunidad: {
        type: DataTypes.DATE
    },
    ruta: {
        type: DataTypes.STRING(200),
        defaultValue: 'usuario-default.png'
    },
    ruta_comunidad: {
        type: DataTypes.STRING(200),
        defaultValue: 'usuario-default.png'
    },
    meses_visitas_panel: {
        type: DataTypes.INTEGER(2)
    }
}, {
    tableName: 'usuarios'
});