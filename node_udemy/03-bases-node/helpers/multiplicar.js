const fs = require("fs");
let colors = require("colors");

//FUNCION
/* const crearArchivo = (base = 5) => {
  console.log("===================");
  console.log("Tabla del:", base);
  console.log("===================");

  let salida = ``;
  for (let i = 0; i < 11; i++) {
    salida += `${base} x ${i} = ${base * i}\n`;
  }

  fs.writeFileSync(`tabla-${base}.txt`, salida);

  console.log(salida);
  console.log(`tabla-${base}.txt creado`);
};
module.exports = {
  crearArchivo,
}; */

//PROMESA
/* const crearArchivo = (base, callback) => {
  return new Promise((resolve, reject) => {
    console.log("===================");
    console.log("Tabla del:", base);
    console.log("===================");

    let salida = ``;
    for (let i = 0; i < 11; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    let nombreArchivo = `tabla-${base}.txt`;
    resolve(nombreArchivo);
  });
};
module.exports = {
  crearArchivo,
};
 */

//FUNCION ASINCRONA
const crearArchivo = async (base = 5, listar, hasta = 10) => {
  try {
    let salida = ``;
    let consola = ``;

    for (let i = 0; i <= hasta; i++) {
      consola += `${colors.green(base)} x ${colors.blue(
        i
      )} = ${colors.brightRed(base * i)}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    if (listar) {
      console.log("===================");
      console.log("Tabla del:", base);
      console.log("===================");
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return colors.bgGreen.black(`tabla-${base}.txt`);
  } catch (error) {
    throw err;
  }
};
module.exports = {
  crearArchivo,
};
