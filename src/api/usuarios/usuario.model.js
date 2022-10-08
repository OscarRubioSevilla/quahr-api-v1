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
        allowNull: false // STRING representa varchar
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
    verificacion_2pasos: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    codigo_verificacion: {
        type: DataTypes.INTEGER(6),
        allowNull: false
    },
    fecha_codigo_verificacion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    intentos_login: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    recuperar_password_hash: {
        type: DataTypes.STRING(32),
        allowNull: false
    },
    fecha_registro: {
        type: DataTypes.DATE,
        allowNull: false
    },

    ultimo_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email_secundario: {
        type: DataTypes.STRING(254),
        unique: true,
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
    prefijo: {
        type: DataTypes.ENUM('', 'Dra.', 'Dr.'),
        allowNull: false
    },
    especialidad: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    nombre_comunidad: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nombre_comunidad_fecha: {
        type: DataTypes.DATE,
        allowNull: true
    },
    ingreso_comunidad: {
        type: DataTypes.BOOLEAN(false),
        allowNull: true
    },
    genero: {
        type: DataTypes.ENUM('Masculino', 'Femenino', 'Otro'),
        allowNull: false
    }
    //aqui iria direccion

    ,
    cedula_profesional: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    visita_comunidad: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ruta: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    ruta_comunidad: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    meses_visitas_panel: {
        type: DataTypes.INTEGER(2),
        allowNull: false
    }

}, {

    tableName: 'usuarios' // Así designas el nombre
        //como era para que fuera el correo que?hay algun atributo o restriccion para el correo
        // No viene la restricción pero par todos los campo que encuntres email o correo ponle unique
        // algo que debes hacer es que las llaves foraneas no llevan autoincrement
        //que hacemos con la foranea primero quitar el uto
        // ok, ahora debes de importar los modelos que hagan referencia a la llave foranea
})