// Importa express
import express from "express";
import morgan from "morgan";
import cors from 'cors';

import apiRoutes from './src/api/index.js';
// Importar sequelize
import { sequelize } from "./src/db/sequelize.js";
import './src/db/importaciones.js'; // no lleva un nombre solo importas el archivo
import { llave } from './src/configToken/config.js'
import { rellenarDB } from './src/db/importar_datos.js';
import cookieParser from 'cookie-parser';

const app = express();
const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};
// middlewares
// app.use(morgan('dev')) // Muestra las peticiones que se hacen al servidor
app.use(cors(corsOptions)) // Controla quien accede al servidor y puede hacer las peticiones
app.use(cookieParser());
app.use(express.json()) // Parse los datos que se envían en la peticion de post put patch y otros req.body
app.set('llave', llave);
app.use(morgan('dev'))



app.use('/api', express.json(), apiRoutes)

// Routes


// Listo servidor corriendo
app.listen(3000, function() {
    console.log('Servidor corriendo en http://localhost:3000')
})


// IMPORTAR DATOS

//await sequelize.dropAllSchemas();
// revisa async await top level
await sequelize.sync({ force: true, alter: true }); // Eliminará campos y registros
await rellenarDB()

export default app;