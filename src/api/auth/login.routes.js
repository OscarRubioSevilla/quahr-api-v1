import express from "express";
const routesApi = express.Router();
import { login } from './login.js';

routesApi.post('/', login)


export default routesApi;