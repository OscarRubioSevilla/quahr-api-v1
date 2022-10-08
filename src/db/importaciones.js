// Importar modelos a crear en db
import "../../src/api/clinicas/clinica.model.js";
import "../../src/api/usuarios/usuario.model.js";


// falta algo mas
// las relaciones en el modelo funcionn para crearla en la base de datos como lo viste
// pero pr usarlas en el modelo mismo cuando consultes debes de hacer un paso mas
// crea un archivo src/db/relaciones.js

// Aqui vamos a importar las relaciones de alla para aca si
import "./relaciones.js";

// con eso ya tenemos las relaciones correctamente, y así debe de ser para todos los modelos que estén relacionados entre si

// probemos funciona

// ultima cosa
// crea dos archivos mas
// src/api/clinicas/clinica.controller.js y src/api/clinicas/clinica.routes.js