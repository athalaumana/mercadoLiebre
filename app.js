// Require de Express
const express = require("express");

// Ejecución de Express
const app = express();

// Require de "path"
const path = require("path");

// Inicializando PORT en render o servidor 3000 ruta localhost:3000

const port = process.env.PORT || 3000;

// Usando recursos estáticos.
app.use(express.static(path.resolve(__dirname, "./public")));   // Dejar la carpeta "public", como un recurso de archivos estáticos, para que siempre los podamos usar de manera sencilla.
// app.use(express.static("public"));

// RUTAS A LOS RECURSOS:

// Ruta raiz / --> Home
app.get("/", (req, res) => res.sendFile(path.resolve("./views/home.html")));

// Ruta 404 ¿?  -->  "*" significa que a todo lo demás que no esté ruteado envía un 404
app.get("*", (req, res) => res.status(404).send("404 not found. <br> ¡Houston, tenemos un problema!"));

// Levantando servidor en el puerto 3000
app.listen(port, () => console.log("Servidor Corriendo en el puerto " + port));