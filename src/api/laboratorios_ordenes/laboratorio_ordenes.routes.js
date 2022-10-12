import express from "express";
import { getAll, getOne, create, deleteOne, update } from './laboratorios_ordenes.controller.js'

const apiRoutes = express.Router();



apiRoutes.get('/', getAll)
apiRoutes.get('/:id', getOne)
apiRoutes.post('/', create)
apiRoutes.put('/:id', update)
apiRoutes.delete('/:id', deleteOne)

export default apiRoutes;