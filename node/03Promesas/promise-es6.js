"use strict";

var fs = require("fs"),
  file = "./assets/nombres.txt",
  newFile = "./assets/nombres-es6.txt",
  promise = new Promise((resolve, rejected) => {
    fs.access(file, fs.F_OK, (err) => {
      return err ? reject(new Error("El archivo no existe")) : resolve(true);
    });
  });

promise
  .then((dataPromise) => {
    console.log("El archivo existe");
    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        console.log(data);
        return err
          ? reject(new Error("El archivo no se pudo leer"))
          : resolve(data);
      });
    });
  })
  .then((dataPromise) => {
    console.log("El archivo se ha leido exitosamente");
    return new Promise((resolve, reject) => {
      fs.writeFile(newFile, dataPromise, (err) => {
        return err
          ? reject(new Error("El archivo no se pudo copiar"))
          : resolve("El archivo se ha copiado con exito");
      });
    });
  })
  .then((dataPromise) => {
    console.log(dataPromise);
  })
  .catch((err) => {
    return console.log(err.message);
  });
