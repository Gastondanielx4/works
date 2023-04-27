"use strict";

var express = require("express"),
  app = express();

app
  .get("/", (req, res) => {
    /*  res.end("<h1>Hola Mundo desde Express</h1>"); */
    res.send("<h1>Hola Mundo desde Express</h1>");
  })
  .get("/bextlan", (req, res) => {
    /*  res.end("<h1>Hola Mundo desde Express</h1>"); */
    /*    res.send(
      "<h1>Bienvenidos a Bextlan... Lugar de bits, vectores y pixeles. </h1>"
    ); */
    res.redirect(301, "https://jonmircha.com/");
  })
  .get("/json", (req, res) => {
    res.json({
      name: "Jonathan",
      age: 31,
      twitter: "@jonmircha",
    });
  })
  .get("/render", (req, res) => {
    /*  res.end("<h1>Hola Mundo desde Express</h1>"); */
    res.render("assets/index.html");
  })
  .listen(3000);

console.log("Iniciando Express en el puerto 3000");
