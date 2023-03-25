/* 
Streams
    "Chorros" de informacion que se transmiten en  "¨Pedazos" (Chunks)
    3 tipos: Lecutra / Escritura / Duplex
    Instancias de EventEmitter
    Acceso asincrono
    Es raro crear streams directamente 
    Pero muchos recursos nos ofrecen este  interfaz
    Detras de muchos mecanismos de Node.JS
        stdin/stdout
        request de http
        Sockets
        Manipulacion de ficheros/imagenes
*/
"use strict";

let fs = require("fs"),
  readStream = fs.createReadStream("assets/nombres.txt"),
  writeStream = fs.createWriteStream("assets/nombres_copia.txt");

/* readStream.pipe(writeStream);

readStream.on("data", function (chunk) {
  console.log("He leido", chunk.length, "caracteres");
});
readStream.on("end", function () {
  console.log("Termine de leer el archivo");
}); */
readStream.pipe(writeStream);
readStream
  .on("data", function (chunk) {
    console.log("He leido", chunk.length, "caracteres");
  })
  .on("end", function () {
    console.log("Termine de leer el archivo");
  });
