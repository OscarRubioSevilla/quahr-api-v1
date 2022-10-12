import express from "express";
import { getAll, getOne, create, deleteOne, update } from "./laboratorios.controller.js";
const apiRoutes = express.Router();


apiRoutes.get('/', getAll);
apiRoutes.get('/:id', getOne);
apiRoutes.post('/', create);
apiRoutes.delete('/:id', deleteOne);
apiRoutes.put('/:id', update);

export default apiRoutes;