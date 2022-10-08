import express from 'express';
import routesClinica from './clinicas/clinica.routes.js';
import routesUsuario from './usuarios/usuario.routes.js';
import routesPaciente from './pacientes/paciente.routes.js';


const apiRoutes = express.Router();

apiRoutes.get('/', function(req, res) {
    res.send('Api. v1').status(200);
})

apiRoutes.use('/clinica', routesClinica);
apiRoutes.use('/usuario', routesUsuario);
apiRoutes.use('/paciente', routesPaciente)



export default apiRoutes;