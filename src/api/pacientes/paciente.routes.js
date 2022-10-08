import express from "express";
import { getAll, getOne, create, update, deleteOne } from "./paciente.controller.js";
const routesApi = express.Router();

routesApi.get('/', getAll);
routesApi.get('/:id', getOne);
routesApi.post('/', create);
routesApi.put('/:id', update);
routesApi.delete('/:id', deleteOne);

export default routesApi;