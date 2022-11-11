import express from 'express';
import routesClinica from './clinicas/clinica.routes.js';
import routesUsuario from './usuarios/usuario.routes.js';
import routesPaciente from './pacientes/paciente.routes.js';
import routesLaboratorio from './laboratorios/laboratorios.routes.js'
import routesLaboratorio_ordenes from './laboratorios_ordenes/laboratorio_ordenes.routes.js'
import routesEvento from './eventos/evento.routes.js'
const apiRoutes = express.Router();

apiRoutes.get('/', function(req, res) {
    res.send('Api. v1').status(200);
})

apiRoutes.use('/clinica', routesClinica);
apiRoutes.use('/usuario', routesUsuario);
apiRoutes.use('/paciente', routesPaciente);
apiRoutes.use('/laboratorios', routesLaboratorio);
apiRoutes.use('/laboratorio_ordenes', routesLaboratorio_ordenes)
apiRoutes.use('/evento', routesEvento)




export default apiRoutes;