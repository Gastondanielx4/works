/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

/* function cuentaLetras (cadena){
    cadena = cadena.length;
    console.log(cadena)
};
cuentaLetras ("PINDONGA")
 */

/* function cuentaLetras (cadena = ""){
   if(!cadena){
      console.warn("No ingraste ninguna cadena")
   }
   else{
      console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
   }
};
cuentaLetras ("PINDONGA")
 */
const cuentaLetras = (cadena = "") =>
  !cadena
    ? console.warn("No ingraste ninguna cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

cuentaLetras("PINDONGA");

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.
 miFuncion("Hola Mundo", 4) devolverá "Hola". */

function impCantidadDeLetras(frase, a) {
  a;
  recortado = frase.slice(0, a);
  console.log(recortado);
}
impCantidadDeLetras("Mariel discutio con constanza", 10);

const recortarTexto = (texto = "", longitud = undefined) =>
  !texto
    ? console.warn("No ingresaste nada")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(texto.slice(0, longitud));
recortarTexto("Hola mircha gil", 9);
recortarTexto("sadas", 3);

/*  3) Programa una función que dada una String te devuelva un Array de textos separados
 por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */
/* 
let separador = "Hola, soy tu padre"
console.log(separador.split(" "));
 */
//O

function separador(fraseSeparada) {
  fraseSeparada = new Array(fraseSeparada.split(" "));
  console.log(fraseSeparada);
}

separador("benja se la come");

const cadenaAArreglo = (frasesita = "", separador = undefined) =>
  !frasesita
    ? console.warn("No ingresaste nada")
    : separador === undefined
    ? console.warn("No ingresaste el separador")
    : console.info(frasesita.split(separador));

cadenaAArreglo(
  "Estoy haciendo el ejercicio uno con jon mircha en la escuelas",
  " "
);

/*  4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 
 3) devolverá Hola Mundo Hola Mundo Hola Mundo. --> */

function replicador(fraseAReplicar, a) {
  fraseAReplicar = `${fraseAReplicar} `;
  a;
  replicada = fraseAReplicar.repeat(a);
  console.log(replicada);
}

replicador("Virginia", 9);

const repetirTextos = (textos = "", veces = undefined) => {
  if (!textos) return console.warn("No ingresaste nada pelotudo");
  if (veces === undefined)
    return console.warn("No ingresaste las veces de repetición");
  if (veces === 0) return console.error("El numeroo de veces no puede ser");
  if (Math.sign(veces) === -1)
    return console.error("El numero no puede ser negativo");
  for (let i = 1; i <= veces; i++) {
    console.info(`${textos},${i}`);
  }
};
repetirTextos("papa", 2);

/*  5) Programa una función que invierta las palabras de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */
let espejo = (revertir = "") => {
  if (!revertir) console.warn("No ingresaste nada");
  if (revertir.length <= 1) console.warn("Debes ingresar mas de un caracter");
  if ((revertido = revertir.split("").reverse().join("")))
    console.log(revertido);
  if (revertir === revertido) console.log("Es un polindromo");

  /* separado = revertir.split("");
     aRevertir = separado.reverse()
     revertido = aRevertir.join("")
     console.log(revertido); */
};

/* O

let espejo = (revertir ="") => {
   (!revertir)
   ?console.warn("No ingresaste nada")
   :(revertir.length<=1) 
    ?console.warn("Debes ingresar mas de un caracter")
    : revertido = revertir.split("").reverse().join("")
      console.log(revertido)
      
       */
espejo("caca");

/* 6) Programa una función para contar el número de veces que se repite una
 palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */
/* 
 let cuentaCoincidencias = (fraseAContar="") => {
    regExp4 = /mundo/gi;
    console.log(fraseAContar.match(regExp4).length);
 }
 cuentaCoincidencias("hola mundo adios mundo") */

let cuentaCoincidencias = (fraseAContar = "", textoABuscar = "") => {
  if (!fraseAContar) return console.warn("No ingresaste el texto largo");
  if (!textoABuscar) return console.warn("No ingresaste la palabra a evaluar");
  let i = 0,
    contador = 0;
  while (i !== -1) {
    //cuando indexOf no encuentra da la posicion -1, por eso esta condicion para que evalue esto antes
    i = fraseAContar.indexOf(textoABuscar, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${textoABuscar} se repite ${contador} veces`);
};
cuentaCoincidencias("hola mundo adios mundo", "ala");

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

/* let espejo = (revertir ="") => {
   if (!revertir) console.warn("No ingresaste nada")
   if(revertir.length<=1) console.warn("Debes ingresar mas de un caracter")
   if (revertido = revertir.split("").reverse().join("")) console.log(revertido)
   if (revertir===revertido) console.log("Es un polindromo"); 
}
espejo("neuquen")
 */

/* 
let palindromo = (palabraParaProbar = "") => {
  espejo(palabraParaProbar) = palabraAComparar;
  if (palabraAComparar===palabraParaProbar) console.log(true);
  else {console.log("No es polindromo")};
}
palindromo("nada")
  */
const palindromo = (palabre = "") => {
  if (!palabre) return console.warn("No ingresaste una palabra o frase");

  palabre = palabre.toLowerCase();
  let alReves = palabre.split("").reverse().join("");
  return palabre === alReves
    ? console.info(
        `Si es palindromo, palabra original "${palabre}", palabra al revés "${alReves}"`
      )
    : console.info(
        `No es palindromo,palabra original "${palabre}", palabra al revés "${alReves}"`
      );
};
palindromo();
palindromo("hola carola");
palindromo("NEUQUEN");

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

let expReg1 = /xyz/g;
let textoDado = "xyz1, xyz2, xyz3, xyz4 y xyz5, xyz";
console.log(textoDado.replace(expReg1, ""));

const eliminarCaracteres = (texto1 = "", patron1 = "") => {
  !texto1
    ? console.warn("No ingresaste un texto")
    : !patron1
    ? console.warn("No ingresaste un patron de caracteres")
    : console.info(texto1.replace(new RegExp(patron1, "ig"), ""));
};

eliminarCaracteres();
eliminarCaracteres("sasda");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5, xyz", "xyz");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5, xyz", "[a-z]"); //esta expresion regular significa que eliminara cual letra del alfabeto de la a hasta la z [a-z]

//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

let numeroAleatorio = (min = 501, max = 600) => {
  let numero = Math.round(Math.random() * (max - min) + min); //da como resultados la cantidad de numeros y suma los primeros numeros para arrancar desde = min
  console.log(numero);
};
numeroAleatorio();
numeroAleatorio(10, 40);

//10) Programa una función que reciba un número y evalúe si es capicúa o no (que
//se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
let numeroCapicua = (numero = 0) => {
  if (!numero) return console.warn("No ingresaste un número");
  if (typeof numero !== "number")
    return console.error(`El valor "${numero}" ingresado, NO es un numero`);

  let revertido = numero.toString().split("").reverse().join("");
  return numero === parseInt(revertido)
    ? console.log("Es capicua")
    : console.log("No es capicua");
};
numeroCapicua();

//11) Programa una función que calcule el factorial de un número (El factorial de un
//  entero positivo n, se define como el producto de todos los números enteros positivos
//  desde 1 hasta n), pe. miFuncion(5) devolverá 120.

let numeroFactorial = (numeroAFactorear = undefined) => {
  if (numeroAFactorear === undefined)
    return console.warn("No Ingresaste un numero");
  if (typeof numeroAFactorear !== "number")
    return console.error(
      `El valor "${numeroAFactorear}" ingresado, NO es un numero`
    );
  if (numeroAFactorear === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(numeroAFactorear) === -1)
    return console.error("No puede ser negativo");

  let total = 1;

  for (i = 1; i <= numeroAFactorear; i++) {
    total = total * i;
  }
  return console.log(total);
};
numeroFactorial(5);
numeroFactorial(0);
numeroFactorial(-1);
numeroFactorial("asoijd");
numeroFactorial();

/* 
12) Programa una función que determine si un número
 es primo (aquel que solo es divisible por sí mismo y 1) o no, 
 pe. miFuncion(7) devolverá true.
 */
let numeroPrimo = (numeroP) => {
  if (numeroP === undefined) return console.warn("No Ingresaste un numero");
  if (typeof numeroP !== "number")
    return console.error(`El valor "${numeroP}" ingresado, NO es un numero`);
  if (numeroP === 0) return console.error("El numero no puede ser 0");
  if (numeroP === 1) return console.error("El numero no puede ser 1");
  if (Math.sign(numeroP) === -1) return console.error("No puede ser negativo");
  let divisible = false;
  for (let i = 2; i < numeroP; i++) {
    if (numeroP % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.log(`El numero ${numeroP} no es primo`)
    : console.log(`El numero ${numeroP} es primo`);
};
numeroPrimo(1);
numeroPrimo(4);
numeroPrimo();
numeroPrimo("asdas");
numeroPrimo(11);

//13) Programa una función que determine si un número es par
//o impar, pe. miFuncion(29) devolverá Impar.
let parOImpar = (serapar) => {
  if (typeof serapar !== "number")
    return console.error(`El valor "${serapar}" ingresado, NO es un numero`);
  return serapar % 2 === 0
    ? console.info(`El numero ${serapar} es Par`)
    : console.info(`El numero ${serapar} es Impar`);
};

parOImpar(2);
parOImpar(4);
parOImpar(5);
parOImpar(-8);
parOImpar(-3);

/* 14) Programa una función para convertir grados Celsius a 
Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */
let convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.error("No ingresaste datos a convertir");

  if (typeof grados !== "number") return console.error("No ingresaste numeros");

  if (typeof unidad !== "string")
    return console.error("No ingresaste una string");

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.warn("Valor de unidad no reconocido");

  if (unidad === "C") {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
  } else if (unidad === "F") {
    return console.info(
      `${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
  } else return console.error("El tipo de grado a convertir no es valido ");
};

convertirGrados(212, "F");

//15) Programa una función para convertir números de base binaria a decimal y viceversa,
//pe. miFuncion(100,2) devolverá 4 base 10.

let convertidorBinario = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("No ingresaste el numero a Convertir");

  if (typeof numero !== `number`) return console.error("No ingresaste numeros");

  if (base === undefined)
    return console.warn("No ingresaste el numero a Convertir");

  if (typeof base !== `number`)
    return console.warn("Valor de sistema no reconocido");

  if (base === 2) {
    return console.info(
      `${numero} base ${base} = ${parseInt(numero, base)} base 10`
    );
  } else if (base === 10)
    return console.info(
      `${numero} base ${base} = ${numero.toString(2)} base 2`
    );
};
convertidorBinario(1001, 2);
convertidorBinario(100, 10);
convertidorBinario(4, 10);
convertidorBinario(1001, 2);
convertidorBinario(1001, 2);
convertidorBinario(1001, 2);

//16) Programa una función que devuelva el monto final después de aplicar un descuento a
//una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
let aplicarDescuento = (cifra, descuento) => {
  if (descuento === 0)
    console.log(`El producto se debe pagar a ${cifra} ya que es sin descuento`);
  if (typeof cifra !== "number") console.info("Debe ingresar numero");
  if (descuento > 100) console.warn("El descuento no puede ser mayor al 100");
  else {
    let aDescontar = (cifra * descuento) / 100;
    cifraDescontada = cifra - aDescontar;
    console.log(cifraDescontada);
  }
};
aplicarDescuento(20000, 10);
aplicarDescuento(20000, 0);
aplicarDescuento(20000, 10);
aplicarDescuento(20000, 10);

/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado
 hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");

  if (!(fecha instanceof Date))
    return console.error("El valor no es una fecha valida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`
      )
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`);
};

calcularAnios();
calcularAnios({});
calcularAnios(false);
calcularAnios(new Date(1984, 4, 23));
calcularAnios(new Date(2084, 4, 23));

//18) Programa una función que dada una cadena de texto cuente el número de vocales y
//consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const cuentanLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste nada");
  if (typeof cadena !== "string") return console.error("No es una cadena");

  let vocales = 0,
    consonantes = 0;

  for (let letra of cadena) {
    if (/[AEIOUÁÉÍÓÚÜaeiouáéíóúü]/.test(letra)) {
      vocales++;
    }
    if (/[BCDFGHJKLMNÑPQRSTVWXYZbcdefghjklmnñpqrstvwxyz]/.test(letra)) {
      consonantes++;
    }
  }

  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

cuentanLetras("Hoy es un dia muy pedorro. Y mañana tambien");

//19) Programa una función que valide que un texto sea un nombre válido,
// pe. miFuncion("Jonathan MirCha") devolverá verdadero.

let nombreValido = (nombre, apellido) => {
  expRegNombre =
    /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$|^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$[\s]([A-Z]{1}[a-zñáéíóú]+[\s]*)+$ /g;
  expRegApellido = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/g;
  if (expRegNombre.test(nombre) === false) {
    return console.warn("El nombre ingresado no es valido");
  }
  if (expRegApellido.test(apellido) === false) {
    return console.warn("El apellido ingresado no es valido");
  }
  return console.log(`${nombre} ${apellido}, su nombre completo es valido`);
};
nombreValido("Gaston", "Quattrocchi");

let nombreValidoPorJon = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombre");

  if (typeof nombre !== "string") return console.error("No es una cadena");

  let expReg = /^[A-Za-zñÁÉÍÓÚáéíóú\s]+$/g.test(nombre); //^ no deja poner espacios al princio y el $ no puede haber nada despues de la expresion y el mas para que evalue cada caracter [] para agrupar \s para que acepte espacios en blaco

  return expReg
    ? console.info("Es un nombre valido")
    : console.warn("No es un nombre valido");
};
nombreValidoPorJon("caca ahumana 19");
nombreValidoPorJon("caca ahumana");

//20) Programa una función que valide que un texto sea un email válido,
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
let validarCorreo = (correo = "") => {
  if (!correo) return console.warn("No ingresaste un nombre");

  if (typeof correo !== "string") return console.error("No es una cadena");

  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      correo
    );

  return expReg
    ? console.info(`"${correo}" es un correo valido`)
    : console.warn("No es un correo valido");
};
validarCorreo("gastondaniel_x4qua@gmail.com");

//21) Programa una función que dado un array numérico devuelve otro array con lo
//s números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
let arrayAlCuadrado = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");

  if (!(arr instanceof Array))
    return console.error("El valor no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    //se usa for of porque el array es un objeto iterable
    if (typeof num !== "number")
      return console.error("El valor no es un numero");
  }

  const newArr = arr.map((el) => el * el); //metodo map se usa para crear un arreglo nuevo a partir de uno

  return console.info(
    `Arreglo Original ${arr}\nArreglo elevado al cuadrado ${newArr}`
  );
};

arrayAlCuadrado([1, 4, 2, 8]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo
//de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
let arrayMinMax = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");

  if (!(arr instanceof Array))
    return console.error("El valor no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    //se usa for of porque el array es un objeto iterable
    if (typeof num !== "number")
      return console.error("El valor no es un numero");
  }

  return console.info(
    `Arreglo Original: ${arr}\nValor Mayor: ${Math.max(
      ...arr
    )} Valor menor${Math.min(...arr)}`
  );
};
arrayMinMax([2, 8, 40, 100, 231, -1]);

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 ar
reglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0],
    impares: [1,3,5,7,9]}.  */

const separarParesImpares = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");

  if (!(arr instanceof Array))
    return console.error("El valor no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    //se usa for of porque el array es un objeto iterable
    if (typeof num !== "number")
      return console.error("El valor no es un numero");
  }

  return console.info({
    pares: arr.filter((num) => num % 2 === 0),
    impares: arr.filter((num) => num % 2 === 1),
  });
};

separarParesImpares([4, 5, 7, 11, 200, 21, 201]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos
//arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de
//forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8],
// desc: [8,7,7,6,5] }.

const ordenarNumeros = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");

  if (!(arr instanceof Array))
    return console.error("El valor no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    //se usa for of porque el array es un objeto iterable
    if (typeof num !== "number")
      return console.error("El valor no es un numero");
  }

  return console.info({
    arr,
    numerosAscendentes: arr.map((el) => el).sort(),
    numerosDescendentes: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};
ordenarNumeros([1, 4, 2, 9, 10, 11, 3]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
// pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10",
//true].

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");

  if (!(arr instanceof Array))
    return console.error("El valor no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  if (arr.length === 1)
    return console.error("El arreglo necesita dos elementos");

  return console.info({
    original: arr,
    sinDuplicados: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  });
};

quitarDuplicados([2, 4, 10, 10, 2, 5, 8]);

/*   //26) Programa una función que dado un arreglo de números obtenga el promedio, pe. 
    //promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5. */

const promediaArreglos = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de numeros");

  if (!(arr instanceof Array))
    return console.error("El valor no es un arreglo");

  if (arr.length === 0) return console.error("El arreglo esta vacio");

  for (let num of arr) {
    //se usa for of porque el array es un objeto iterable
    if (typeof num !== "number")
      return console.error("El valor no es un numero");
  }

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join("+")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};
promediaArreglos([1, 2, 3, 4, 5, 10]);

/*    27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la
 película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y 
 calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros 
  aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
   decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
               - Apartir de un arreglo con la información de 3 películas genera 3 
                  instancias de la clase de forma automatizada e imprime la ficha técnica 
                  de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime,
 Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical,
  Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller,
   War, Western.

En el video 43 te daré mi solución, antes de verlo trata de resolver los ejercicios,
 y comparte tus resultados en alguna plataforma como GitHub o CodePen y comparte el
  enlace de tus soluciones en los comentarios de este video.  */

class Pelicula {
  constructor({
    id,
    titulo,
    director,
    añoEstreno,
    paisDeOrigen,
    generos,
    calificacion,
  }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.añoEstreno = añoEstreno;
    this.paisDeOrigen = paisDeOrigen;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarAñoEstreno(añoEstreno);
    this.validarPais(paisDeOrigen);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }
  static generosAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es una cadena de texto`
      );

    return true;
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado, NO es un numero`
      );

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio"`);

    if (!(valor instanceof Array))
      return console.error(`${propiedad} "${valor}" no es un arreglo`);

    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos`);

    for (let cadena of valor) {
      //se usa for of porque el array es un objeto iterable
      if (typeof cadena !== "string")
        return console.error(`El valor ${cadena} no es una cadena de texto`);
    }

    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]{7})$/.test(id)) {
        return console.error(
          `IMDB id "${id} no es valido, debe tener 9 caracteres, los 2 primero letras minusculas, los 7 restantes numeros`
        );
      }
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      this.validarLongitudCadena("Titulo", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }

  validarAñoEstreno(añoEstreno) {
    if (this.validarNumero("Año de Estreno", añoEstreno))
      if (!/^([0-9]){4}$/.test(añoEstreno))
        return console.error(
          `Año de Estreno "${añoEstreno} no es valido, debe tener 4 digitos.`
        );
  }

  validarPais(paisDeOrigen) {
    this.validarArreglo("Pais", paisDeOrigen);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Genero", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(",")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error(`La calificacion debe ser entre 9 y 10`)
        : (this.calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    console.info(
      `Ficha Técnica: \nTítulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño: "${this.añoEstreno}"\nPais: "${this.paisDeOrigen.join(
        "-"
      )}"\nCalificación:"${this.calificacion}"\nIMBD id:"${this.id}"`
    );
  }
}

/*   const peli = new Pelicula({
      id: "tt1234567",
      titulo: "Titulo de la Peli",
      director: "Director de la Peli",
      añoEstreno: 2021,
      paisDeOrigen: ["Argentina"],
      generos: ["Adult", "Comedy"],
      calificacion: 10.5
   })

   peli.fichaTecnica(); */

const misPelis = [
  {
    id: "tt1234567",
    titulo: "Batman",
    director: "No se",
    añoEstreno: 2015,
    paisDeOrigen: ["yankilandi"],
    generos: ["Action", "Fantasy"],
    calificacion: 9.55,
  },
  {
    id: "tt6547123",
    titulo: "Robin",
    director: "No se",
    añoEstreno: 2016,
    paisDeOrigen: ["EEUU"],
    generos: ["Action", "Fantasy"],
    calificacion: 9.55,
  },
  {
    id: "tt7547122",
    titulo: "Batman y Robin",
    director: "No se",
    añoEstreno: 2017,
    paisDeOrigen: ["yankilandi", "EEUU"],
    generos: ["Action", "Fantasy"],
    calificacion: 9.88,
  },
];
misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
