const dotenv = require("dotenv");
dotenv.config({ path: 'src/.env' });

const mysql = require("mysql2");
let connection;
try {
  connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME,
    port: process.env.DBPORT,
  });
} catch (error) {
  console.log("Error al conectar con la base de datos");
}

/* try {
  connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'secret',
    database: 'node',
    port: '3309',
  });
} catch (error) {
  console.log("Error al conectar con la base de datos");
} */
module.exports = { connection };


