//IMPORTACIONES
import ClinicaModel from "../../src/api/clinicas/clinica.model.js";
import UsuarioModel from "../../src/api/usuarios/usuario.model.js";
import PacienteModel from "../../src/api/pacientes/paciente.model.js";
import DireccionModel from "../../src/api/direccion/direccion_model.js";
import ClinicasconfiguracionModel from '../../src/api/clinicas_configuracion/clinicas_configuracion.model.js';
import Clinicasdireccion from '../../src/api/clinicas_direccion//clinicas_direccion.model.js'
import PacientesdireccionModel from "../../src/api/pacientes_direccion/paciente_direccion.model.js";
import Usuariosdireccion from '../../src/api/usuarios_direccion/usuarios_direccion.model.js';
import LaboratoriosModel from '../..//src/api/laboratorios/laboratorios.model.js'
import laboratorio_ordenesModel from "../api/laboratorios_ordenes/laboratorio_ordenes.model.js";
import laboratoriosModel from "../../src/api/laboratorios/laboratorios.model.js";
import laboratorios_direccion from '../api/laboratorios_direccion/laboratorios_direccion.model.js'
import pacienteModel from "../../src/api/pacientes/paciente.model.js";


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

ClinicaModel.belongsToMany(DireccionModel, { through: Clinicasdireccion, foreignKey: 'clinica_id' });
DireccionModel.belongsToMany(ClinicaModel, { through: Clinicasdireccion, foreignKey: 'direccion_id' });

PacienteModel.belongsToMany(DireccionModel, { through: PacientesdireccionModel, foreignKey: 'paciente_id' });
DireccionModel.belongsToMany(PacienteModel, { through: PacientesdireccionModel, foreignKey: 'direccion_id' });

UsuarioModel.belongsToMany(DireccionModel, { through: Usuariosdireccion, foreignKey: 'usuario_id' });
DireccionModel.belongsToMany(UsuarioModel, { through: Usuariosdireccion, foreignKey: 'direccion_id' });

UsuarioModel.hasMany(LaboratoriosModel, {
    foreignKey: 'usuario_id',
    as: 'usuarios'
})
LaboratoriosModel.belongsTo(UsuarioModel, {
    foreignKey: 'usuario_id',
    as: 'laboratorio'
})

UsuarioModel.hasMany(laboratorio_ordenesModel, { foreignKey: 'usuario_id', as: 'laboratorio_ordenes' })
laboratorio_ordenesModel.belongsTo(UsuarioModel, { foreignKey: 'usuario_id', as: 'usuarios' })

LaboratoriosModel.hasMany(laboratorio_ordenesModel, { foreignKey: 'laboratorio_id', as: 'laboratorios' })
laboratorio_ordenesModel.belongsTo(LaboratoriosModel, { foreignKey: 'laboratorio_id', as: 'laboratorio' })

pacienteModel.hasMany(laboratorio_ordenesModel, { foreignKey: 'paciente_id', as: 'pacientes' });
laboratorio_ordenesModel.belongsTo(pacienteModel, { foreignKey: 'paciente_id', as: 'paciente' })


LaboratoriosModel.belongsToMany(DireccionModel, { through: laboratorios_direccion, foreignKey: 'laboratorio_id' });
DireccionModel.belongsToMany(laboratoriosModel, { through: laboratorios_direccion, foreignKey: 'direccion_id' });



// aquii puedes aprender todos los tipos de relaciones que tienen los modelos
// Cuando te des tiempo dles una revisada
// https://sequelize.org/docs/v6/core-concepts/assocs/