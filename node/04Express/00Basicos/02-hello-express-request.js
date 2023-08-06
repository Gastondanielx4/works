"use strict";

var express = require("express"),
  app = express();

app
  .get("/", (req, res) => {
    res.end("<h1>Hola Mundo desde Express</h1>");
  })
  .get("/user/:id-:name-:age", (req, res) => {
    res.end(
      `<h1> ${req.params.name}, bienvenido a Express :) tu id es <b> ${req.params.id}<b> y tienes <b> ${req.params.age}<b> a&ntilde;os </h1> `
    );
  })
  .get(`/search`, (req, res) => {
    res.end(`
    <h1> Bienvenido a Express, los resultados de tu busqueda son:
        <mark>${req.query.s}</mark>
    </h1>`);
  })
  .listen(3000);

console.log("Iniciando Express en el puerto 3000");
