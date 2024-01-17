var express = require("express");
const app = express();
const mysql = require("mysql2");
const { connection } = require("./config");

/* nos ayuda a analizar el cuerpo de la solicitud POST */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", function (req, res) {
  res.send("Hola Mundo!");
});

/* GET */
/* Mostrar todos los alumnos */
const getEstudiantes = (request, response) => {
  connection.query("SELECT * FROM estudiantes", (error, results) => {
    if (error) throw error;
    response.status(200).json(results);
  });
};

/* Mostrar los alumnos por id */
const getEstudiantesId = (request, response) => {
  const id = request.params.id;
  connection.query("SELECT * FROM estudiantes where id=?",[id], (error, results) => {
    if (error) throw error;
    response.status(200).json(results);
  });
};

/* Post */
//Insertar alumno
const insertarEstudiante = (request, response) => {
  const { nombre, apellido, fecha_nacimiento, dureccion, telefono, codigo_postal, email } = request.body;
  connection.query(
    "INSERT INTO estudiantes(nombre, apellido, fecha_nacimiento, direccion, telefono, codigo_postal, email) VALUES (?,?,?,?,?,?,?)",
    [nombre, apellido, fecha_nacimiento, dureccion, telefono, codigo_postal, email],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Item añadido correctamente": results.affectedRows });
    }
  );
};

/* Delete */
//Borrar alumno
const borrarEstudiante = (request, response) => {
  const id = request.params.id;
  connection.query("Delete from estudiantes where id = ?",
  [id],
  (error, results) => {
  if(error)
  throw error;
  response.status(201).json({"Item eliminado":results.affectedRows});
  });
  };

/* PUT */
const actualizarEstudiante = (request, response) => {
  const { nombre, apellido, fecha_nacimiento, dureccion, telefono, codigo_postal, email } = request.body;
  connection.query(
    "UPDATE estudiantes SET nombre = ?, apellido = ?, fecha_nacimiento = ?, direccion = ?, telefono = ?, codigo_postal = ?, email = ? WHERE id = ?",
    [nombre, apellido, fecha_nacimiento, dureccion, telefono, codigo_postal, email],
    (error, results) => {
      if (error) throw error;
      response
        .status(201)
        .json({ "Item añadido correctamente": results.affectedRows });
    }
  );
  };

/* ruta */
app.route("/estudiantes").get(getEstudiantes); 
app.route("/estudiante/:id").get(getEstudiantesId); 
app.route("/estudiante/:id").post(insertarEstudiante); 
app.route("/estudiante/:id").delete(borrarEstudiante); 
/* app.route("/estudiantes").delete(borrarEstudiante);  */

app.listen(3000, function () {
  console.log("Aplicación ejemplo, escuchando el puerto 3000!");
});
