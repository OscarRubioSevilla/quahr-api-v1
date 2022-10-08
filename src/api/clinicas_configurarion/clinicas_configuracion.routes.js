import express from 'express';
import { getAll } from './clinicas_configurarion.controller';

const apiRotes = express.Router();


apiRotes.get('/', getAll)