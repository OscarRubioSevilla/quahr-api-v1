import clinicaModel from "../api/clinicas/clinica.model.js";
import pacienteModel from "../api/pacientes/paciente.model.js";
import usuarioModel from "../api/usuarios/usuario.model.js";
import LaboratorioModel from '../api/laboratorios/laboratorios.model.js'

export const rellenarDB = async() => {
    await clinicaModel.create({
        nombre: "Clinica Astro",
        telefono_fijo: 123456789,
        telefono_celular: 112345678,
        direccion_calle: "Carranza",
        direccion_numero: "12",
        direccion_numero_interior: "1",
        direccion_cp: "45760",
        direccion_localidad: "Barranca de Otates",
        direccion_municipio_id: "Zacoalco de Torres",
        direccion_estado_id: 1,
        direccion_pais_id: 1,
        consentimiento_informado: "No seleccionado",
        mensaje_mail: "Creo que se puso grave",
        firma_mail: "Firma de ALguien",
        ruta: "Ruta de algun lugar"
    })

    await usuarioModel.create({
        clinica_id: 1,
        tipo_usuario: "Dentista",
        email: "ka@gmail.com",
        password: "123",
        verificacion_2pasos: 2,
        codigo_verificacion: 12345,
        fechacodigo_verificacion: "2000-11-02",
        intentos_login: 2,
        recperar_password_hash: "2agddasasafsfsd",
        fecha_registro: "2000-02-21",
        ultimo_inicio: "2000-12-12",
        email_secundario: "otiwg5sFxf@gmail.com",
        nombre: "Juas",
        apellido_paterno: "Rubio",
        apellido_materno: "sevilla",
        prefijo: "Dr.",
        especialidad: "Sin nada",
        nombre_comunidad: "nosos",
        comunidad_fecha: "2000-02-15",
        ingreso_comunidad: 1,
        genero: "Masculino",
        cedula_profesional: "cedula",
        visita_comunidad: "2000-05-15",
        ruta: "ALguna ruta",
        ruta_comunidad: "Otra ruta",
        meses_visitas_panel: 1
    })

    await usuarioModel.create({
        clinica_id: 1,
        tipo_usuario: "Asistente",
        email: "kala@gmail.com",
        password: "123",
        verificacion_2pasos: 2,
        codigo_verificacion: 12345,
        fechacodigo_verificacion: "2000-11-02",
        intentos_login: 2,
        recperar_password_hash: "2agddasasafsfsd",
        fecha_registro: "2000-02-21",
        ultimo_inicio: "2000-12-12",
        email_secundario: "otiwg5sFxf@gmail.com",
        nombre: "Olivers",
        apellido_paterno: "Rubio",
        apellido_materno: "sevilla",
        prefijo: "Dr.",
        especialidad: "Sin nada",
        nombre_comunidad: "nosos",
        comunidad_fecha: "2000-02-15",
        ingreso_comunidad: 1,
        genero: "Masculino",
        cedula_profesional: "cedula",
        visita_comunidad: "2000-05-15",
        ruta: "ALguna ruta",
        ruta_comunidad: "Otra ruta",
        meses_visitas_panel: 1
    })


    await pacienteModel.create({
            usuario_id: 1,
            paciente_codigo: 'PA1',
            nombre: "Pedro",
            apellido_paterno: "Jussa",
            apellido_materno: "kasse",
            fecha_nacimiento: "2000-10-14",
            genero: "Masculino",
            ocupacion: "No hce nda",
            email: "qas1@gmail.com",
            contacto_emergencia: 1233215,
            contacto_emergencia_parentezco: 12358,
            contacto_emergencia_telefono: 1441541,
            notas: "Aun nada"
        }),
        await pacienteModel.create({
            usuario_id: 2,
            paciente_codigo: 'PA2',
            nombre: "Vicente",
            apellido_paterno: "Peguas",
            apellido_materno: "kasio",
            fecha_nacimiento: "2000-10-14",
            genero: "Masculino",
            ocupacion: "No hce nda",
            email: "qas1@gmail.com",
            contacto_emergencia: 1233215,
            contacto_emergencia_parentezco: 12358,
            contacto_emergencia_telefono: 1441541,
            notas: "Aun nada"
        }),
        await LaboratorioModel.create({

            usuario_id: 1,
            laboratorio_codigo: 'LAB1',
            nombre: "No tiene nombre",
            contacto: "desconocido",
            telefono_fijo: 1234560,
            telefono_celular: 1230321,
            correo_electronico: "asds@gamil.com",
            web: "algo de web",
            notas: "tiene una nota",
            fecha_ultima_consulta: "2000-11-11"
        }),
        await LaboratorioModel.create({

            usuario_id: 2,
            laboratorio_codigo: 'LAB2',
            nombre: "Sin nombre",
            contacto: "desconocido",
            telefono_fijo: 1234560,
            telefono_celular: 1230321,
            correo_electronico: "Sinombre@gamil.com",
            web: "algo de web",
            notas: "tiene una nota",
            fecha_ultima_consulta: "2000-11-11"
        })
}