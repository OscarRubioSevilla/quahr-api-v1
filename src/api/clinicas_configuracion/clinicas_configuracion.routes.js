import express from 'express';
import { getAll } from './clinicas_configuracion.controller';

const apiRotes = express.Router();


apiRotes.get('/', getAll)