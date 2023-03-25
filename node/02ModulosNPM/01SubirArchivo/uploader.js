"use strict";

var http = require("http").createServer(serverUpload),
  util = require("util"),
  formidable = require("formidable"),
  fse = require("fs-extra");

function serverUpload(req, res) {
  if (req.method.toLowerCase() == "get") {
    let form = ` 
    <h1>Uploader de Archivos en Node.js</h1>
        <form action="/upload" enctype="multipart/form-data" method="post">
            <div><input type="file" name="upload" required></div>
            <div><input type="submit" value="Subir Archivo"></div>
        </form>`;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(form);
  }
  if (req.method.toLowerCase() == "post" && req.url == "/upload") {
    let form = new formidable.IncomingForm();

    form
      .parse(req, function (err, fields, files) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(
          "<h1>Archivos recibidos</h1>" + util.inspect({ files: files })
        );
        res.end();
      })
      .on("progress", function (bytesReceived, bytesExpected) {
        let percentCompleted = (bytesReceived / bytesExpected) * 100;
        console.log(percentCompleted);
      })
      .on("error", function (err) {
        console.log(err);
      })
      .on("end", function (fields, files) {
        //Ubicacion temporal del archivo que se sube
        let tempPath = this.openedFiles[0].filepath,
          //El nombre del archivo subido
          fileName = this.openedFiles[0].newFilename,
          //Nueva ubicacion
          newLocation = "./upload/" + fileName;
        console.log(fileName);

        fse.copy(tempPath, newLocation, function (err) {
          return err
            ? console.log(err)
            : console.log("El archivo se subió con exito :) ");
        });
      });

    return;
  }
}

http.listen(3000);
console.log("Servidor corriendo en http://localhost:3000/");
