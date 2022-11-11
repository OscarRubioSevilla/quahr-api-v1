import express from "express";
const apiRoutes = express.Router()

import { getAll, getOne, create, update, deleteOne } from './evento.controller.js';


apiRoutes.get('/', getAll);
apiRoutes.get('/:id', getOne)
apiRoutes.post('/', create);
apiRoutes.put('/:id', update);
apiRoutes.delete('/:id', deleteOne)

export default apiRoutes;