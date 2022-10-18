//IMPORTACIONES
import ClinicaModel from "../../src/api/clinicas/clinica.model.js";
import UsuarioModel from "../../src/api/usuarios/usuario.model.js";
import PacienteModel from "../../src/api/pacientes/paciente.model.js";
import ClinicaConfiguracionModel from '../../src/api/clinicas_configuracion/clinicas_configuracion.model.js';
import ClinicasDireccion from '../../src/api/clinicas_direccion//clinicas_direccion.model.js'
import PacientesDireccionModel from "../../src/api/pacientes_direccion/paciente_direccion.model.js";
import UsuariosDireccion from '../../src/api/usuarios_direccion/usuarios_direccion.model.js';
import LaboratorioModel from '../..//src/api/laboratorios/laboratorios.model.js'
import OrdenesLaboratorioModel from "../api/laboratorios_ordenes/laboratorio_ordenes.model.js";
import LaboratorioDireccion from '../api/laboratorios_direccion/laboratorios_direccion.model.js'


// Ok ahora se debe de relacionar
// has many - tiene muchos
ClinicaModel.hasMany(UsuarioModel, {
    foreignKey: 'clinica_id', // hace referencia a la llave foranea en usuarios
    as: 'usuarios'
});

ClinicaModel.hasOne(ClinicaConfiguracionModel, { foreignKey: 'clinica_id', as: 'configuracion' });
ClinicaConfiguracionModel.belongsTo(ClinicaModel, { foreignKey: 'clinica_id', as: 'clinica' });

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

ClinicaModel.hasOne(ClinicasDireccion, { foreignKey: 'clinica_id', as: 'direccion' });
ClinicasDireccion.belongsTo(ClinicaModel, { foreignKey: 'clinica_id', as: 'cilinica' });

UsuarioModel.hasOne(UsuariosDireccion, { foreignKey: 'usuario_id', as: 'direccion' });
UsuariosDireccion.belongsTo(UsuarioModel, { foreignKey: 'usuario_id', as: 'usuario' });

PacienteModel.hasOne(PacientesDireccionModel, { foreignKey: 'paciente_id', as: 'direccion' });
PacientesDireccionModel.belongsTo(PacienteModel, { foreignKey: 'paciente_id', as: 'paciente' });

UsuarioModel.hasMany(LaboratorioModel, { foreignKey: 'usuario_id', as: 'laboratorios' });
LaboratorioModel.belongsTo(UsuarioModel, { foreignKey: 'usuario_id', as: 'usuario' });

UsuarioModel.hasMany(OrdenesLaboratorioModel, { foreignKey: 'usuario_id', as: 'ordenes' })
OrdenesLaboratorioModel.belongsTo(UsuarioModel, { foreignKey: 'usuario_id', as: 'usuario' })

LaboratorioModel.hasMany(OrdenesLaboratorioModel, { foreignKey: 'laboratorio_id', as: 'ordenes' })
OrdenesLaboratorioModel.belongsTo(LaboratorioModel, { foreignKey: 'laboratorio_id', as: 'laboratorio' })

PacienteModel.hasMany(OrdenesLaboratorioModel, { foreignKey: 'paciente_id', as: 'ordenes' });
OrdenesLaboratorioModel.belongsTo(PacienteModel, { foreignKey: 'paciente_id', as: 'paciente' })


LaboratorioModel.hasOne(LaboratorioDireccion, { foreignKey: 'laboratorio_id', as: 'direccion' });
LaboratorioDireccion.belongsTo(LaboratorioModel, { foreignKey: 'laboratorio_id', as: 'laboratorio' });



// aquii puedes aprender todos los tipos de relaciones que tienen los modelos
// Cuando te des tiempo dles una revisada
// https://sequelize.org/docs/v6/core-concepts/assocs/