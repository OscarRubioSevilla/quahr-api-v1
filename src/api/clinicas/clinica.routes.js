// aqui vn a ir las rutas de express
import express from "express";
import { getOne, getAll, create, deleteOne, update } from './clinica.controlller.js'
const routesApi = express.Router();

// routesApi te permite crear las rutas que necesitas
routesApi.get('/', getAll);
routesApi.get('/:id', getOne);
routesApi.post('/', create);
routesApi.delete('/:id', deleteOne);
routesApi.put('/:id', update);

// Así defines ls rutas

// solo queda exportar

export default routesApi;