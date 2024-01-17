const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql2");
let connection;
try {
    console.log("Te conectaste a la base de datos");
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
module.exports = { connection };
