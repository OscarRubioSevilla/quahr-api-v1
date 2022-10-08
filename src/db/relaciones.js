// Aqui debes de importar los modelos que se van a relacionar por ejemplo clinica y usuario
// Haz la importación
import ClinicaModel from "../../src/api/clinicas/clinica.model.js";
import UsuarioModel from "../../src/api/usuarios/usuario.model.js";
import PacienteModel from "../../src/api/pacientes/paciente.model.js"

// Ok ahora se debe de relacionar
// has many - tiene muchos
ClinicaModel.hasMany(UsuarioModel, {
    foreignKey: 'clinica_id', // hace referencia a la llave foranea en usuarios
    as: 'usuarios'
});
// belongs to - pertenece a
UsuarioModel.belongsTo(ClinicaModel, {
    foreignKey: 'clinica_id', // hace referencia a la llave foranea en usuarios
    as: 'clinica'
})

UsuarioModel.hasMany(PacienteModel, {
    foreignKey: 'usuario_id',
    as: 'pacientes'
})
PacienteModel.belongsTo(UsuarioModel, {
    foreignKey: 'usuario_id',
    as: 'usuario'
});

//usuario


/*
    Las relaciones mas comunes son
    1:1 uno a uno
    m:1 muchos a 1 hasMany
    m:n muchos a muchos
*/

// aquii puedes aprender todos los tipos de relaciones que tienen los modelos
// Cuando te des tiempo dles una revisada
// https://sequelize.org/docs/v6/core-concepts/assocs/