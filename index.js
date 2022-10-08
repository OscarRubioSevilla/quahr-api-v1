// Importa express
import express from "express";
import morgan from "morgan";
import cors from 'cors';

import apiRoutes from './src/api/index.js';
// Importar sequelize
import { sequelize } from "./src/db/sequelize.js";
import './src/db/importaciones.js'; // no lleva un nombre solo importas el archivo


// Declaraciones orden 2
// Crear el app de expres
const app = express();


// Voy a llevar a Patsy a la parada del camnion
// Llena el postman con los demas rutas
// y crea el api de usuarios va? Ahorita regresosii



// middlewares
// app.use(morgan('dev')) // Muestra las peticiones que se hacen al servidor
app.use(cors()) // Controla quien accede al servidor y puede hacer las peticiones
app.use(express.json()) // Parse los datos que se envían en la peticion de post put patch y otros req.body
app.use(morgan('dev'))


app.use('/api', express.json(), apiRoutes)

// Routes


// crear el servidor de express
app.listen(3000, function() {
    console.log('Servidor corriendo en http://localhost:3000')
})


// Listo servidor corriendo


// sincronizar con db

// Revisa con calma porque no autocompleta los modulos
await sequelize.dropAllSchemas();
// ok era eso
// revisa async await top level
await sequelize.sync({ alter: true, alter: true }); // Eliminará campos y registros


console.log('Db connected') // api/clinicas/clinica.model.js