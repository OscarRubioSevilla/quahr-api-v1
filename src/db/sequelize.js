import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('api-v1', 'root', '', {
    dialect: 'mysql', // tipo db
    logging: false, // Evitar mensajs en consola
    define: { // Aqui puedes definir lo que va a afectar a todos los modelos
        createdAt: 'fecha_creacion', // se cambia el campo por defecto 'createdAt' por fecha_creacion
        updatedAt: 'fecha_modificacion' // se cambia el campo por defecto 'updatedAt' por fecha_modificacion,
    }
})




// puedes trabajar sin problema con el web phpmyadmin es mucho mejor que workbench - si te causa problemas pue
// instalar otro cliente de mysql, heidiSQL
// Con eso ya tendrías conexión solo cambia los datos de arriba
// el host por defecto es localhost o 127.0.0.1 y el puerto usa por defecto 3306 puerto de mysql
// la base de datos esta ne xampp o deberia estar en workbench
// parece ser que
// con eso