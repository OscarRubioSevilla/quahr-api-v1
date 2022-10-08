import express from "express";
import { getOne, getAll, create, deleteOne, update } from "./usuario.controller.js"

// routesApi te permite crear las rutas que necesitas
const routesApi = express.Router();

routesApi.get('/', getAll);
routesApi.get('/:id', getOne);
routesApi.post('/', create);
routesApi.put('/:id', update)
routesApi.delete('/:id', deleteOne);


export default routesApi;