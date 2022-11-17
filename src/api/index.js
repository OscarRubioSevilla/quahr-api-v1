import express from 'express';
import routesClinica from './clinicas/clinica.routes.js';
import routesUsuario from './usuarios/usuario.routes.js';
import routesPaciente from './pacientes/paciente.routes.js';
import routesLaboratorio from './laboratorios/laboratorios.routes.js'
import routesLaboratorio_ordenes from './laboratorios_ordenes/laboratorio_ordenes.routes.js'
import routesEvento from './eventos/evento.routes.js'
import routesLogin from './auth/login.routes.js';
import { usuarioValidado } from '../utils/jwt.js';


const apiRoutes = express.Router();

apiRoutes.get('/', function(req, res) {
    res.send('Api. v1').status(200);
})

apiRoutes.use('/clinica', usuarioValidado, routesClinica);
apiRoutes.use('/usuario', routesUsuario);
apiRoutes.use('/paciente', routesPaciente);
apiRoutes.use('/laboratorio', routesLaboratorio);
apiRoutes.use('/orden', routesLaboratorio_ordenes)
apiRoutes.use('/evento', routesEvento)
apiRoutes.use('/login', routesLogin)




export default apiRoutes;