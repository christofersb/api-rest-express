const debug = require("debug")("app:inicio");

const express = require("express");
const config = require("config");
const morgan = require("morgan");

const usuarios = require("./routes/usuarios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/usuarios", usuarios);

//Uso de middleware de terceros - Morgan
if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    debug("Morgan esta habilitado.");
}

//Trabajos con la base de datos
debug("Conectado con la bd...");

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Escuchando en el puerto ", port);
});