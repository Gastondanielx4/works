'use strict'

/* 
DATOS PRIMITIVOS
String = palabras o letras
Number = numeros
Boolean = true - false
undefined = indefinido
null = nulo
 */


console.log('Hola Mundo')
let nombre = 'Manuel'
const dni = 37574233
console.log(dni)

let numero1 = 5
let numero2 = 10
let suma = numero1 + numero2
console.log(suma)

/* 
tipadodinamico posibilidad de cambiar variables en la consola

typeof en la consola tipado dinamico te dice el tipo
 */

/* TIPADO REFERENCIAL
Objetos
Arrays
Funciones
 */

/* 
OBJETOS
variables con varias propiedades, variables y hasta funciones pueden tener dentro
 */

let persona = {
    nombre: 'Manuel',
    apellido: 'Muñoz'
}
console.log (persona)
/* PARA LLEVAR NOMBRE Y APELLIDO A CONSOLA */

console.log (persona['nombre'])
/* PARA LLEVAR SOLO NOMBRE QUE ESTA DENTRO DE LA VARIABLE PERSONA
   Y LLAMAR SOLO A ESA PROPIEDAD, CITARLA CON COMILLAS. */

console.log (persona.nombre) 
  /*  SI NO SE TODAS LAS PROPIEDADES DEL OBJETO DE PUEDE ACCEDER
   CON DOT OPERATION, Y SE PUEDE ACCEDER A TODAS LAS PROPIEDADES A TRAVES DEL .  
    */

/* ARRAYS
PARA CREAR OBJETOS CON MAS DE UN NUMERO PARA UNA MISMA VARIABLE
AL NO SER TIPADO JS PUEDO INCORPORAR STRINGS BOOLEANOS NULL Y HASTA OBJETOS
SI QUIERO SOLO NUMEROS, HABRIA QUE INDICARLO MANUALMENTE
*/
let numero = 5
let numeros = [1,2,3,4,5,6]
console.log(numeros)

/* Para imprimir solo un numero que tengo en el array, donde hay varios*/

console.log(numeros[2])
/* asi solo deberia imprimir el numero "3" que esta dentro del ARRAYS (RECORDAR 
    QUE LA POSICION DEL LISTADO NUMERICO COMIENZA EN 0 COMO EN CASI TODO TIPO
    DE PROGRAMACION*/

/*Con funciones se pueden recorrer los arrays y mostrar todos los datos
 que tengan el "For it" o el "For"
 Como tiene prototipado tambien puedo pedir el tamaño, la cantidad de elementos 
 que tiene como por ejemplo con la propiedad "length"
*/




/* FUNCIONES
 */
let nombre = 'Manuel'
let apellido = 'Muñoz'

console.log(nombre,apellido)
/* Log es una funcion, console es una funcion, utilizando DOT operation
 con el punto para acceder a objetos, pero son las funciones propias de JS */

/* Si yo quisiera reimprimir la funcion podria copiarla y pegarla */
 console.log(nombre,apellido)

 /* o crear la propia */

/* PARA DEFINIR UNA FUNCION */
/* function le dice al motor que lo que viene luego es el nombre de la funcion,
entre parentesis son los parametros que puede recibir la funcion 
Y las llaves de donde empieza - donde termina , y lo que tiene que ejecutar*/

/* ASI SE DEFINE */
function mostrar(){
    console.log('funcion funciona!!')
}

/* PARA QUE IMPRIMA EN CONSOLA
mostrar ()   o
mostrar () dentro del codigo para que imprima directamente en consola */

/* Esto sirve para definir la funcion y devolver el resultado a partir de 
la devolucion de "suma" */
function sumadatos (dato1, dato2){
    let suma = dato1 + dato2
    return suma
}

/* Esto es para mostrar en pantalla la devolucion de la funcion (que es la suma de los dos parametros) */
let resultado = sumadatos(5,6)
console.log(resultado)

/* OPERADORES ARITMETICOS*/

console.log(numero + numero_dos) /* SUMA */
console.log(numero - numero_dos) /* RESTA */
console.log(numero * numero_dos) /* MULTIPLICACION */
console.log(numero / numero_dos) /* DIVISION */
console.log(numero % numero_dos) /* RESTO */
console.log(numero ** numero_dos) /* POTENCIA DEL NUMERO 1 AL NUMERO 2 */

/* Incremento */
let numero = 5

/* 1ER OPCION *//*  (asiganar luego incrementar y luego muestro; ASIGNA PERO INCREMENTA LUEGO) */
console.log(numero++) /* (no modifica el numero, devuelve solo el numero pero
                        le asigna el incremento) */
/* DEVUELVE 5 */

console.log(numero) /* despues de la asignacion, imprime el numero incrementado */
 /* DEVUELVE 6 */


 /* 2DA OPCION (incremento asignacion y luego muestro; INCREMENTA ANTES DE ASIGNAR)*/
console.log(++numero) /* devuelve el numero ya incrementado */
/* devuelve 6 */

console.log(numero) /* devuelve el numero incrementado */
/* devuelve 6 */

/* DECREMENTAR */
/* Igual pero com el -- */
console.log(--numero)

/* OPERADORES DE ASIGNACION */
+=
-=
/=
*=

let numero = 5}

numero += 7 
console.log(numero)
/* devuelve 12 */

/*lo mismo a esto */
numero = numero + 7

/* OPERARODES DE COMPARACION */
/* Devuelve valores booleanos */

let x = 5

console.log(x < 4) /* x es menor a 4 */
console.log(x > 4) /* x es mayor a 4 */
console.log(x <= 4) /*x es menor o igual a 4  */
console.log(x >= 4) /*x es mayor o igual a 4  */
console.log(x == 4) /*x es igual a 4?  */
console.log(x === 4) /*x es igual a 4 y del mismo tipo ? (number en este caso) 
                        compara tambien el tipo*/

/* OPERADOR TERNARIO */
let edad = 18

/* Resultado es = al operador ternario */
let resultado = edad > 18 ? 'Es mayor de edad' : 'Es menor de edad'
/* el operador ternario guarda dentro de una variable el resultado de evaluar una expresion,
la expresion en este caso es edad > 18*/
/* el signo de interrogacion indica que 'Es mayor de edad' si el resultado es True, 
de caso contrario (:) si es falso 'Es menor de edad'*/
console.log(resultado)

/* OPERADORES LOGICOS */

&&  /* AND: evalua diferentes opciones y cuando se cumple devuelve un valor u otro. 
Las evalua con valores booleanos*/
/* para que AND devuelva true todas las opciones deben dar true, si una da falso,
 entonces es falso*/

console.log (1 === 1 && 2=== 2)
            /*( true  &&   true)  esta operacion devuelve true*/

 || /* OR: funciona igual que true pero, si hay por lo menos una sola condicion que
  sea verdadera, entonces devuelve true  */

! /* NOT: invierte el valor booleano de una variable;  */

let si = true
let no = !si
console.log (no)
/* esto devolveria (false) */

/* SENTENCIAS (IF -SWITCH)*/

/* IF */
if(condicion){
    ejecucion
}else if(condicion){
    ejecucion
}else{
    ejecucion
}

/* la ejecucion es un bloque de codigo, se pone entre llaves, y se va a ejecutar
siempre y cuando se cumpla la condicion, es decir sea (True). el else final es en
caso de no cumplirse ninguna de las condiciones anteriores, ejecutar tal codigo
 */

if(hora >= 6 && hora < 12){
    console.log('Buenos dias')
}else if(hora >=12 && hora <18){
    console.log('Buenas tardes')
}else{
    console.log('Buenas noches')
}

/*SWITCH*/
/* evalua una variable y el valor de la variable */

let variable_a_evaluar = 'valor_de_la_variable'
let numero

switch (variable_a_evaluar) {
    case 'valor_de_la_variable':
        console.log('Es la variable')
        break;

    default:
        console.log('No es la variable que definiste')
        break;
}

/* si no coincide con el case, ejecuta lo del default */
/* puedo poner la cantidad de case que quiera */
/* siempre poner el break para que no siga evaluando si ya coincidio con el case */


/* SENTENCIA O BUCLE */
/* FOR */
for(sentenciaInicial, sentenciaEvaluacion, sentenciaIncremento){

for(let i =0; i < 5; i++)
    console.log('Hola mundo!!')

/* WHILE */
while(condicion){
    ejecucion
    incremento
}

let i = 0
while(i <= 5){
    console.log (i)
    i++
}
/* variable igual a 0, i es menor que 5 o =, si, ejecuta e incrementa. I ES IGUAL A 1*/
/* vuelve al principio, i=1, es menor que 5 o =, si, ejecuta e incrementa. I ES IGUAL A 2 */
/* vuelve al principio, i=2, es menor que 5 o =, si, ejecuta e incrementa. I ES IGUAL A 3 */
/* vuelve al principio, i=3, es menor que 5 o =, si, ejecuta e incrementa. I ES IGUAL A 4 */
/* vuelve al principio, i=4, es menor que 5 o =, si, ejecuta e incrementa. I ES IGUAL A 5 */
/* vuelve al principio, i=5, es menor que 5 o =, si, ejecuta e incrementa. I ES IGUAL A 6 */
/* vuelve al principio, i=4, es menor que 5 o =, no, no ejecuta ni incrementa. 
El bucle se cierra con i=6 */

/* DO WHILE */
/* ejecuta antes de hacer la evaluacion */
let i = 0
do{
    console.log('entramos al do y ejecutamos')
    console.log(i)
    i++
}while (i <= 5)

/* FOR IN */

let persona = {
    nombre : 'Manuel',
    edad: 38
}
console.log(persona.nombre)
/* O --->  console.log(persona['nombre']) */

for(let key in persona){ /* con la variable key vas a recorrer en  la variable persona */
    console.log(key, persona[key])
}


/* FOR OF se utiliza para ARRAYS  no se utiliza para objetos */
let colores = ['rojo', 'azul', 'verde']

for(let valor of colores){
    console.log(valor)
} 

/* devuelve los valores de las arrays */


/* FUNCIONES EN OBJETOS */

let persona = {
    nombre : 'Manuel',
    edad: 38,
    caminar: function(){
        console.log(this.nombre, 'estoy caminando')
    },
    saltar:function(){
        console.log('estoy saltando', this.edad)
    }
}
persona.caminar()


/* FACTORY FUNCTIONS */
/* REFACTORIZAR, REDUCIENDO EL CODIGO PARA REPLICAR UN OBJETO SIN REPETIR EL CODIGO. */

function crearPersonas(){
    let persona = {
        nombre : 'Manuel',
        edad: 38,
        caminar: function(){
            console.log(this.nombre, 'estoy caminando')
        },
        saltar:function(){
            console.log('estoy saltando', this.edad)
        }
    }
    return persona
}

/* OBJETOS DINAMICOS */
/* pese a que las constantes no se podrian cambiar en JS si se puede modificar el 
de las constantes. */

const objeto = {
    nombre: 'Manuel',

};
objeto.edad = 38;  
/* de esta forma se le agregaria a la constante la propiedad "edad" */

/* JAVASCRIPT PUEDE AGARRAR CUALQUIER TIPO DE DATOS, NO NECESARIAMENTE
 OBJETOS, Y ASIGNARLES PROPIEDADES PARA CADA TIPO, ESTO SE PUEDE VER EN CONSOLA 
 HACIENDO UN TYPEOF , VIENDO EL TIPO, Y LUEGO SE PUEDE LLAMAR A LAS FUNCIONES DESDE
 CONSOLA LLAMANDO A LA CONSTANTE Y PONIENDO UN PUNTO AL FINAL*/

 /* CLONAR OBJETOS */

 const objeto1 = {
     parametroObjeto1: 5,
     funcObjeto1: function (){
         console.log ('mostrar');
     },
 };
 const objeto2 = {}

 /* Primer metodo */

 for(let key in objeto1){
     objeto2[key] = objeto1[key];
 }

 /* Segundo metodo */

const objeto3 = Object.assign({
    parametroObj3:'valor diferente'
}, objeto1);

/* Tercer metodo */
/* los 3 puntos son el spread operation */

const objeto4 = {
    propiedadObjeto4:65,
    ...objeto1,
};


/* Para dar salto de linea en strings */
const texto = 'Hola \n me llamo manuel \n y tengo 38 años ';

/* En el caso de que Manuel fuese dinamico y tendria que representarlo una variable */

let nombre = 'Manuel';
const texto = 'Hola \n me llamo' + nombre + '\n y tengo 38 años '; 

/* Para no ensuciar el codigo con los dos metodos anteriores, nacen los TEMPLATE STRINGS */

/* TEMPLATE STRINGS */

const nombre = 'Manuel'
const edad = 38

const texto_dos = `Hola
me llamo ${nombre}
y tengo ${edad + 2} años`;


/* ANADIR - QUITAR | ELEMENTOS EN UNA ARRAYS */

const numeros = [1, 2, 3, 4];

/* ANADIR AL FINAL*/

numeros.push(5);
/* numeros.push('hola') */

/* AÑADIR EN MITAD DEL ARRAY */

numeros.splice(2, 0, 2.1);
/*el primer numero  indica a partir de que posicion se va a añadir el numero,
el segundo numero indica con 0 que no se va a reemplazar el numero de esa
dicha posicion; y el el ultimo numero es el que se va a añadir */

/* AÑADIR AL PRINCIPIO */

numeros.unshift(0)


/* BUSCAR ELEMENTOS EN UNA ARRAY */
const numeros = [1, 2, 3, 4];

console.log(numeros.indexOf [2]);
/* muestra el numero en esa posicion o el valor*/

console.log(numeros.includes [2]);
/* muestra true si ese numero existe */


/* QUITAR VALORES DEL ARRAY */

const numeros = [1, 2, 3, 4, 5]

/* AL FINAL DEL ARRAY */
const final = numeros.pop();
console.log(numeros);

/* AL PRINCIPIO */
const principio = numeros.shift();
console.log(numeros);

/* QUITAR AL MEDIO */
const medio = numeros (1,1)

/* QUITAR UNO O MAS ELEMENTOS */
const medio = numeros.splice(1,3);
console.log(numeros);

/* COMBINAR LAS ARRAYS */

const numeros = [1,2,3,4]
const numeros_2 = [5,6,7,8]

const numeros_3 = numeros.concat(numeros_2);
console.log(numeros_3);

/* combinar con spread operator0 */
const numeros_4 = [0,...numeros, 4.1, ...numeros_2, 8.1];
console.log(numero_4);

/* FILTRAR NUMEROS */
const numeros = [1,2,3,4,-5,7,-8];

const filtrados = numeros.filter(function (value) {
    return value >=0;
});
/* lo mismo refactorizado */
const filtrados = numeros.filter((value) => value >=0)
/* devuelve una nueva array con los valores dentro de numeros pero
que son mayor o igual a 0 */

console.log(filtrados);
/* esto imprimira en consola todos los numeros filtrados */


/* FUNCIONES */

/* Funciones Declarativas - Function Declarations */
function caminar(){
    console.log('caminar');
}
/* Los parentesis para los parametros, las llaves para el cuerpo .
Estas funciones si las ejecutamos, no se llama a la funcion, porque 
son solo funciones declarativas. Para llamarlas debemos hacerlo 
explicitamente, como a continuacion*/
caminar();
/* Las declarativas se almacenan no en un lugar de la memoria especifico si
 no que se almacenan literalmente en la memoria por tema de hosting */

/* Funciones Expresivas - Function Expression */
let correr = function (){
    console.log('correr');
};
/*La diferencia de estas es que se almacenan dentro de variables
 para luego ser reutilizadas cuando necesitemos*/
correr();
/* tambien es necesario llamarlas */

/* Con nombre */
let correr = function correr2(){
    console.log('correr');
};
/* Sin nombre o anonimas */
let correr = function (){
    console.log('correr');
};


/* HOISTING */
/* DECLARATIVAS */
caminar();
function caminar(){
    console.log('caminar');
}
/* la declarativa a traves del hoisting JS eleva la function arriba de todo el script */

/* EXPRESIVAS */
correr();
const correr = function (){
    console.log('correr');
};
/* la expresiva no es posible ejecutarla antes de definirla, al igual que si intento
imprimir una variable antes de declararla o definirla*/


/* REST OPERATOR */
function sumar (n1, n2, n3){
    console.log(n1 + n2 + n3);
    }
sumar (4, 1, 6);
/* con esta funcion , solo podriamos sumar 3 numeros maximo */
/* para sumar  una cantidad de nuemero indeterminados se utiliza el rest operator */
function sumar(...args) {
    return args.reduce((a ,b) => a + b);
}
console.log(sumar(1, 2, 3, 4 ,5 ,6 ,7 , 8, 9));
/* esto imprimira 45 que es la suma de toods los numeros consignados */


/* PARAMETROS POR DEFECTO  */
/* las formas de definir el valor de impuesto */

function calcularImpuestos(precio_base, impuesto){
    impuesto = impuuesto || 0.21
    let iva = precio_base * impuesto
    return precio_base + iva
}

let camisa = calcularImpuestos(80);
console.log(camisa);

/* otra forma, sacando la primer definicion de impuesto */
function calcularImpuestos(precio_base, impuesto = 0.21){
    let iva = precio_base * impuesto
    return precio_base + iva
}

let camisa = calcularImpuestos(80/* incluso despues de una "," puedo modificarla desde
aqui tambine */);
console.log(camisa);



/* GET AND SET */
/* De mucha utilidad a la hora de trabajar con objetos */
/* Da la posibilidad de llamar a nombreCompleleto como propiedad y no como funcion */
const persona = {
    nombre: 'Manuel',
    apellido: 'Mir',
};

console.log(persona.nombre);

console.log(persona.nombre + " " + persona.apellido);

/* O  */

console.log(`${persona.nombre} ${persona.apellido}`);


/* O */

const persona = {
    nombre: 'Manuel',
    apellido: 'Mir',
    nombreCompleto: function () {
        return `${persona.nombre} ${persona.apellido}`;
    }
};
console.log(persona.nombreCompleto());



/* O */
const persona = {
    nombre: 'Manuel',
    apellido: 'Mir',
    nombreCompleto() {
        return `${persona.nombre} ${persona.apellido}`;
    }
};
console.log(persona.nombreCompleto());

/* O */
const persona = {
    nombre: 'Manuel',
    apellido: 'Mir',
    get nombreCompleto() {
        return `${persona.nombre} ${persona.apellido}`;
    },
    set nombreCompleto(valor){
        let partes = valor.split('')
        this.nombre = partes [0];
        this.apellido = partes [1];
    }
};
persona.nombreCompleto = "jose perez";
console.log(persona.nombreCompleto);


/* TRY AND CATCH */
/* Para dar avisos de errores */
const persona = {
    nombre: 'Manuel',
    apellido: 'Mir',
    get nombreCompleto() {
        return "hola";
    },
    set nombreCompleto(valor){
        if(typeof valor !== "string") {
            throw new Error(`${valor}: 'esto no es una string`);
        }
        let partes = valor.split('')
        this.nombre = valor [0];
        this.apellido = valor [1];
    }
};

console.log(persona.nombreCompleto);
try {
    persona.nombreCompleto = 43;
    catch (e) {
        alert (e);
    }
}

/* CLASES */
/* estas clases tienen propiedad y tienen metodos. las clases para inicializar sus
propiedades lo podemos hacer si usamos la  funcion llamada constructor */
/* por convencion siempre se pone la letra mayuscula al definirla */
class Persona {
    constructor(valor){
        this.nombre = valor
    }
    caminar(){
        console.log("la persona camina");
    }
}

const p = new Persona("Manuel");


/* METODOS ESTATICOS */
/* Para cuando necesites instanciar un objeto para utilizar unos de sus metodos*/

class Coche {
    constructor(color) {
        this.color = color;
    }
    acelerar() {
        consola.log("el coche acelera");
    }
    tocarBocina() {
        console.log("estamos tocando bocina");
    }
}

const ford = new Coche("rojo");
 

/* con la palabra static no incluye la funcion tocarBocina dentro del objeto */
class Coche {
    constructor(color) {
        this.color = color;
    }
    acelerar() {
        consola.log("el coche acelera");
    }
    static tocarBocina() {
        console.log("estamos tocando bocina");
    }
}

const ford = new Coche("rojo");
ford.acelerar
Coche.tocarBocina()
/* si quiero acceder a la funcion debo hacerlo desde la clase */



/* 
ARROW FUNCTION
PARRA NO TENER QUE ESCRIBIR TANTO CODIGO)*/

/* LAS CALLBACKS
(FUNCIONES QUE SE EJECUTAN DENTRO DE OTRAS FUNCIONES Y
 QUE SE PASAN COMO PARAMETROS A ESTA PRIMERA */


function mostrar(nombre){
    console.log(`hola ${nombre}`);
}
mostrar("Manuel");
/* da como resultado hola Manuel */

/* ARROW FUNCTION */
const saludar = nombre => console.log(`hola ${nombre}`);
saludar("Victoria");


/* CALLBACKS */
/* Las librerias trabajan con calvacs */

const funcionUno = () => {
    console.log('hola')
}
const funcionDos = (nombre, callBack)=>{
    callBack(nombre)

}
funcionDos(funcionUno)

/* MODIFICAR OBJETOS */
/* Como añadir y eliminarle propiedades a traves de la funcionabilidad*/
/* una propiedad es un valor de una variable dentro de un objeto */
/* cuando definimos funciones dentro de un objeto, le estamos diciendo que son
metodos */
function Persona(nombre) {
    this.nombre = nombre;
    this.caminar = function (){
        console.log("esta caminando")
    };
}

const manuel = new Persona ("Manuel");

/* para añadirle la propiedad edad al objeto */
/* con dot operation */
manuel.edad = 38;

/* recorriendo tipo arrays */
manuel['altura'] = 2.0;


/* para borrar propiedad */
delete manuel.edad;

/*  */
delete manuel ["edad"];


/* RECORRER OBJETOS */

function Persona(nombre) {
    this.nombre = nombre;
    this.caminar = function (){
        console.log("esta caminando")
    };
}

const manuel = new Persona ("Manuel");

for (let key in manuel) {
    console.log(key, manuel [key]);
}
/* asi se reccorre tanto las propiedades como las funciones */

for (let key in manuel) {
    if(typeof manuel[key] !== "function") console.log(key, manuel [key]);
}
/* para recorrer solo las propiedades, por ejemplo se agrega el if*/


/* ABSTRACCION */
/* cuando generamos un objeto las propiedades y los metodos son accesibles desde
cualquier parte de nuestro codigo */
/* esto nos permite hacer privado el recorrido del objeto de algunas propiedades o metodos */
function Persona(nombre) {
    this.nombre = nombre;
     let valor = "valor"; /* (esto le da privacidad) */
    this.caminar = function (){
        console.log("esta caminando")
    };
    let saludar = function () {
        console.log("cualquier cosa")
    }
}
const manuel = new Persona ("Manuel");



/* SET Y GET EN PRIVACIDAD */
function Objeto(valor){
    this.valor = valor
    let propiedadPrivada = "texto"
    Object.defineProperty(this, "propiedadPrivada", {
        get: function () {
            return propiedadPrivada;
        },
        set: function (valor){
            if (typeof propiedadPrivada !== 'string'){
                throw new Error('el valor tiene que ser string');
            }
            propiedadPrivada = valor;
        }
    })
}

const objeto = new Objeto ("texto cualquiera")
console.log(objeto.propiedadPrivada);
objeto.propiedadPrivada = "un texto cualquiera modificado"
console.log(objeto.propiedadPrivada);
2

/* POO (Programacion orientada objetos)
4 ejes
Clases - Modelo a seguir
Objetos - Es una instancia (copia) de una clase
    Atributos - Caracteristica o Propiedad del Objeto (son variables dentro de un objeto)
    Metodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)

*/

const animal = {
    nombre:"Snoopy",
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
}
const animal2 = {
    nombre:"Snoopy",
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
}

console.log(animal)
console.log(animal2)

/* Para no copiar y pegar el codigo para generar 2 animales diferentes
se utiliza una funcion constructora, y mediante las clases se puede realizar.
 */
//Funcion constructora
/* lo ideal es que en las funciones constructoras solo esten los atributos, ya que si 
se suman las funciones, sobrecargamos de funciones en el caso de que se creen muchos animales
Para esto los metodos se le deben pegar al prototioi 
*/

function Animal (nombre, genero) {
    //atributos
this.nombre = nombre;
this.genero = genero;
    //metodos
this.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
    }    
}

const   snoopy = new Animal ("Snoopy","Macho"),
        lolaBunny = new Animal ("Lola Bunny", "Hembra")

console.log(snoopy)
console.log(lolaBunny)
//Funcion constructora donde asignamos los metopdos al Prototipo,
// no a la funcion como tal Esto es lo que va eficientar y evitar esos dupliucados
// en las instancias


function Animal (nombre, genero) {
this.nombre = nombre;
this.genero = genero;
}
Animal.prototype.sonar = function () {
    console.log('Hola me llamo $(this.nombre)');
}
const   snoopy = new Animal ("Snoopy","Macho"),
lolaBunny = new Animal ("Lola Bunny", "Hembra")

console.log(snoopy)
console.log(lolaBunny)

//Funcion constructora donde asignamos los metopdos al Prototipo,
        // no a la funcion como tal Esto es lo que va eficientar y evitar esos dupliucados
        // en las instancias

        
        function Animal (nombre, genero) {
            this.nombre = nombre;
            this.genero = genero;
            }
            Animal.prototype.sonar = function () {
                console.log('Hola me llamo $(this.nombre)');
            }
            const   snoopy = new Animal ("Snoopy","Macho"),
                    lolaBunny = new Animal ("Lola Bunny", "Hembra")
    
            console.log(snoopy)
            console.log(lolaBunny) 
    
    /* Herencia prototipica, la capacidad de los hijos de heredar elementos padre
     */
            function Perro(nombre, genero, tamanio) {
                this.super = Animal;
                this.super(nombre, genero);
                this.tamanio = tamanio;
    
            }
    
            //Perro hereda de animal
            Perro.prototype = new Animal();
            Perro.prototype.constructor= Perro;
    
    //Sobreescritura de metodos del prototipo padre en el hijo
            Perro.prototype.sonar = function () {
                console.log("Soy un perro y mi sonido es un ladrido");
                
            }
            Perro.prototype.ladrar = function () {
                console.log("Guauu Guaauuu!!!!");
            }
    
            const   snoopy = new Perro ("Snoopy","Macho", "Mediano"),
                    lolaBunny = new Animal ("Lola Bunny", "Hembra")
    
            console.log(snoopy)
            console.log(lolaBunny)
    
            snoopy.sonar();
            snoopy.saludar();
            snoopy.ladrar();
    



      /* LAS CLASES
       */      
    /* Las clases dan herencia prototipica a todo lo que se incluye en el codigo
     */
    class Animal {
        constructor(nombre, genero){
            this.nombre = nombre;
            this.genero = genero;
        }
        //Metodos

        sonar(){
            console.log("Hago sonidos porque estoy vivo");
        }
        saludar() {
            console.log(`Hola me llamo ${this.nombre}`);
        }
    }
 /*    const mimi = new Animal ("Mimi", "Hembra"),
    scooby = new Animal ("Scooby", "Macho")
     */
    //Para que la clase perro herede la de animal
    class Perro extends Animal{
        constructor(nombre, genero, tamanio){
    //con el metodo super se manda a llamar el constructor de la clase padre
        super(nombre,genero);
        this.tamanio = tamanio;
        } 

        sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
        }

        ladrar() {
                console.log("Guauu Guaauuu!!!!");
        }
    }
    const mimi = new Animal ("Mimi", "Hembra"),
    scooby = new Perro ("Scooby", "Macho","Gigante")

    console.log(mimi);
    mimi.saludar();
    mimi.sonar();
    console.log(scooby);
    scooby.saludar();
    scooby.sonar();
    scooby.ladrar();
    

    /* Agregando sonar al prototipo perro, este se sobreescribe y y no dic
    "hago sonidos porque estoy vivo" si no "soy un perro y mi sonido es un ladrido
    " */


/* GET AND SET */    
`use strict`
/* LAS CLASES
*/      
/* Las clases dan herencia prototipica a todo lo que se incluye en el codigo
*/
class Animal {
constructor(nombre, genero){
   this.nombre = nombre;
   this.genero = genero;
}
//Metodos

sonar(){
   console.log("Hago sonidos porque estoy vivo");
}
saludar() {
   console.log(`Hola me llamo ${this.nombre}`);
}
}
/*    const mimi = new Animal ("Mimi", "Hembra"),
scooby = new Animal ("Scooby", "Macho")
*/
//Para que la clase perro herede la de animal
class Perro extends Animal{
constructor(nombre, genero, tamanio){
//con el metodo super se manda a llamar el constructor de la clase padre
super(nombre,genero);
this.tamanio = tamanio;
this.raza = null;
} 

sonar(){
console.log("Soy un perro y mi sonido es un ladrido");
}

ladrar() {
       console.log("Guauu Guaauuu!!!!");
}

/* UN METODO ESTATICO ES AQUEL QUE SE PUEDE INSTANCIAR SIN NECESIDAD
DE INSTANCIAR LA CLASE */

static queEres() {
console.log("Los perros somos mamiferos que pertenecemos a la familia de los caninos.");
}

/* los setters y getters son metodos especiales que nos permiten
establecer y obtener los valores de atributos de una clase */

get getRaza(){
return this.raza;
}

set setRaza(raza){
this.raza = raza;
}
}

Perro.queEres();

const mimi = new Animal ("Mimi", "Hembra"),
scooby = new Perro ("Scooby", "Macho","Gigante")

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
/* los get se convierten en atributos, por lo que para llamarlo se debe hacer con
console log y no con una funcion o como a un metodo
*/
console.log(scooby.getRaza)
//esto devuelve null
/* Para darle la raza se define como a un atributo tambien con set */
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza)     


    //CONSOLE
    console.log(console); 
    console.error("Esto es un error");
    console.warn("Esto es un aviso");
    console.info("Esto es un mensaje informativo")
    console.log("Es un registro de lo que ha pasado en nuestra aplicacion")
 
    let nombre = "Gaston"
         apellido = "Quattrocchi"
         edad = 27;
 
     console.log(nombre)
     console.log(apellido)
     console.log(edad)
     console.log(nombre, apellido, edad)
     console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`)
     console.clear()
     console.log(window)
     console.log(document)
 
     //PARA ABRIR DEL DOCUMENTO (DOM) REPRESENTADO COMO UN OBJETO QUE PUEDA ANALIZAR PARA SABER CARACTERISTICAS
     // TODOS LOS METODOS Y ATRIBUTOS QUE TIENE JAVASCRIPT
     console.dir(window)
     console.dir(document)
     console.clear()
 
     //PARA AGRUPAR CIERTAS IMPRESIONES DE PANTALLA
 
     console.group("Los cursos de @jonmircha en YouTube");
     console.log ("Curso de Javascript")
     console.log ("Curso de Node.js")
     console.log ("Curso de PWAs")
     console.log ("Curso de FlexBox")
     console.groupEnd()
 
     console.groupCollapsed("Los cursos de @jonmircha en YouTube");
     console.log ("Curso de Javascript")
     console.log ("Curso de Node.js")
     console.log ("Curso de PWAs")
     console.log ("Curso de FlexBox")
     console.groupEnd()
 
     console.clear()
 
 
     //PARA HACER TABLAS 
 
     console.log(console);
     console.table(Object.entries(console).sort);
 
     const numeros = [1,2,3,4,5]
      vocales = ["a", "e","i", "o","u"]
 
      console.table(numeros);
      console.table(vocales)
 
      const perro = {
          nombre: "Boni",
          raza: "Boxer",
          color: "cafe"
      }
 
      console.table(perro)
      
      console.clear()
 
 
 
      //PARA SABER CUANTO TIEMPO TARDA EN EJECUTARSE MI CODIGO
      console.time("Cuanto tiempo tarda mi codigo");
      const arreglo = Array(10000000);
      
      for(let i = 0; i < arreglo.length; i++){
          arreglo[i] =i;
      }
      console.timeEnd("Cuanto tiempo tarda mi codigo")
      console.log(arreglo);
      console.clear()
 
      
      //PARA SABER CUANTAS VECES SE HA EJECUTADO UN FRAGMENTO DE CODIGO
      for(let i = 0; i <= 100; i++){
          console.count("codigo for")
          console.log(i);
      }
      
      console.clear()
 
 
      //ASSERT ES COMO UNA MINILIBRERIA PARA HACER PRUEBAS
      let x = 3,
      y = 2,
      pruebaXY = "Se espera que X sea siempre menor que Y"
 
      console.assert(x <y, {x,y,pruebaXY});
      //RESULTADO : practicajs.html:109 Assertion failed: {x: 3, y: 2, pruebaXY: 'Se espera que X sea siempre menor que Y'}
 

      //OBJETO DATE
      console.log(Date());

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); //devuelve fecha
console.log(fecha.getDay());//devuelve posicion del dia de la semana - DE DOMINGO A SABADO DE 0 A 6
console.log(fecha.getMonth());// devuelve posicion del mes desde enero = 0
console.log(fecha.getFullYear()); // devuelve el año en el que estamos
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

console.log(fecha.toString()); //Mon Oct 11 2021 15:33:35 GMT-0300 (hora estándar de Argentina)
console.log(fecha.toDateString()); //Mon Oct 11 2021
console.log(fecha.toLocaleString());// 11/10/2021 15:33:35
console.log(fecha.toLocaleDateString())// 11/10/2021


console.log(fecha.getTimezoneOffset()) //El uso horario en el que nos encontramos en minutos no e horas (-6 horas = 360 minutos)
console.log(fecha.getUTCDate()) //da la hora 0 en el meridiano

console.log(Date.now()); // Cantidad de milisegundos desde 01/01/1970 fecha time stamp

let cumpleJon = new Date(1984,4,23);
console.log(cumpleJon)

//OBJETO MATH
//Para hacer operaciones matematicas especiales
console.log(Math); //objeto estatico y para utilizarlo se debe incovar al objeto - en la consola se pueden ver todos los metodos
console.log(Math.PI); // devuelve el valor de pi
console.log(Math.abs(-7.8)); // devuelve valor absoluto 7.8
console.log(Math.ceil(7.2)); // numero entero siempre tirando al mayor = 7
console.log(Math.floor(7.8)); //numero entero siempre tirando al menor = 7
console.log(Math.round(7.5)); // redondea al mas cercano inmediato
console.log(Math.sqrt(81)); // raiz cuadrada
console.log(Math.pow(2, 5)); // potencia - primero el numero y luego el exponente = 2 elevado a la 5
console.log(Math.sign(-5)); // indica si es +=1 -=-1 o 0=0
console.log(Math.random()); // numero aleatorio entre 0 y 1 .
console.log(Math.random()*1000) // numero aleatorio entre 0 y 1000 (con decimales)
console.log(Math.round(Math.random()*1000)) //numero aleatorio entre 0 y 1000 (SIN decimales) 


//OPERADOR DE CORTOCIRCUITO
// 
//CORTOCIRCUITO OR - CUANDO ELVALOR DE LA IQUIERDA EN LA EXPRESION SIEMPRE PUEDA VALIIDAR A TRUE
// ES EL VALOR QUE SE CARGARA POR DEFECTO

//CORTOCIRCUITO AND - CUANDO EL VALOR DE LA IZQUIERDA EN LA EXPRESION SIEMPRE PUEDA VALIDAR A FALSE
// ES EL VALOR QUE SE CARGARA POR DEFECTO 

//con desconocido le estoy dando valor por defecto
function saludar (nombre = "desconocido") {
    console.log(`Hola ${nombre}`)
}


//ejemplo de cortocircuito con OR antes de que existiera la forma de definir por defecto en la misma funcion

function saludar (nombre) {
    nombre = nombre || "Desconocido"
    console.log(`Hola ${nombre}`)
}

console.log()

saludar("Jon");
saludar()

//OR -       VERDADEROS || VERDADEROS      = IMPRIME IZQUIERDA (porque es verdadero)
console.log("cadena" || "Valor de la derecha")
console.log(19 || "Valor de la derecha")
console.log( true || "Valor de la derecha")
console.log({}|| "Valor de la derecha")
console.log([] || "Valor de la derecha")
//OR -       FALSOS || VERDADEROS          = IMPRIME DERECHA (porque  izq son falsos)
console.log(false || "Valor de la derecha")
console.log(null || "Valor de la derecha")
console.log(undefined || "Valor de la derecha")
console.log("" || "Valor de la derecha")



//AND       VERDADEROS || VERDADEROS      = IMPRIME DERECHA (porque izquierda es verdadero)
console.log("cadena" && "Valor de la derecha")
console.log(19 && "Valor de la derecha")
console.log( true && "Valor de la derecha")
console.log({}&& "Valor de la derecha")
console.log([] && "Valor de la derecha")
//AND       FALSOS || VERDADEROS      = IMPRIME IZQUIERDA (porque son falsos)
console.log(false && "Valor de la derecha")
console.log(null && "Valor de la derecha")
console.log(undefined && "Valor de la derecha")
console.log("" && "Valor de la derecha")

//ALERT CONFIRM Y PROMPT

console.log(window);
window.alert("Esto es una alerta") //cartel con boton de aceptar
window.confirm("Esto es una confirmación") // //cartel con boton de aceptar yu cancelar
window.prompt ("Esto es un prompt y permite ingresar un valor") //es como si fuese un imput pero con uncartel de alerta

//son metodos que cuelgan del objeto global window, pero no es necesario ponerlo

alert("Esto es una alerta") //cartel con boton de aceptar
confirm("Esto es una confirmación") // //cartel con boton de aceptar yu cancelar
prompt ("Esto es un prompt y permite ingresar un valor") //es como si fuese un imput pero con uncartel de alerta

//los vamos a guardar en variables
let alerta = alert("Esto es una alerta")
confirmacion = confirm("Esto es una confirmación")
aviso = prompt("Esto es un prompt y permite ingresar un valor")

console.log(alerta) //si ponemos aceptar da undefined - 
console.log(confirmacion)//si ponemos aceptar da true - si le doy cancelar me dalse
console.log(aviso)//si ponemos aceptar con el prompt vacio da cadena vacia - si escribo y acepto me devuelve la cadena de texto que escribi - si escribo y cancelo me da null

//EXPRESIONES REGULARES
/* Son una secuencia de caracteres que forma un patron de busqueda, 
principalmente utilizada para la busqueda de patrones de cadenas de caracteres */

let cadena = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequaturlorem culpa inventore cupiditate praesentium rerum impedit possimus placeat aliquam reprehenderit sed architecto nobis, dolorum voluptas, alias, aspernatur quisquam quasi! Dicta, perferendis!"
let expReg = new RegExp("lorem","");// (da false si no esta lorem en minusculas)
let expReg1 = /lorem/;

console.log(expReg.test(cadena));
console.log(expReg1.exec(cadena));

let expReg2 = new RegExp("lorem","ig");// (con la bandera "i" ingora mayusculas y minusculas y con la g no se detiene en la busqueda si no que sigue buscando)
let expReg3 = /lorem/ig; // es exactamente lo mismo que expReg2 y es como mas se usa por los desarrolladores.

console.log(expReg2.test(cadena)); // devuelve un boolean

console.log(expReg2.exec(cadena)); //esto devuelve un arreglo (el index es la posicion en la que encontro la palabra)

console.clear();
console.log(expReg3.test(cadena));

console.log(expReg3.exec(cadena));

//FUNCIONES ANONIMAS AUTOEJECUTABLES - INMEDIATLY INVOQUE FUNCTION EXPRESS
//encapsula tu codigo y no solo se define si no que se ejecuta automaticamente
(function(){
    console.log("Mi primer IIFE");
})();

(function (){
    console.log("Mi segunda IIFE");
})();

(function (d,w,c){
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("Este es un console.log")
})(document, window, console); //asigno a d w c, cada objeto


//CLASICA
(function(){
    console.log("CLASICA");
})();

//VERSION CROCKFORD (JAVASCRIPT THE GOOD PARTS)
((function(){
    console.log("VERSION CROCKFORD");
})());

//UNARIA
+function(){
    console.log("VERSION UNARIA");
}();

//FACEBOOK
!function(){
    console.log("VERSION FACEBOOK");
}();

//Asíncronia en Javascript

//SETTIMEOUT
// se ejecuta solo una vez despues de cierto tiempo
console.log("inicio");
setTimeout(() => {
    console.log("Ejecutando setTimeOut, esto se ejecuta una sola vez");
},4000);

//SETINTERVAL
//se ejecuta indefinidamente cada cierto tiempo
setInterval(() => {
    console.log("Ejecutando setInterval, se ejecuta cada cierta cantidad de tiempo");
}, 2000);
 
//se puede imprimir en pantalla un reloj cada segundo
setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);


//FUNCION QUE CANCELA EL SETTIMEOUT clearTimeout

let temporizador = setTimeout(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);

clearTimeout(temporizador);
console.log("despues del clear");

//FUNCION QUE CANCELA EL SETINTERVAL  clearInterval

let temporizador1 = setInterval(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);

clearInterval(temporizador1);
console.log("despues del clear");


/* **********     Curso JavaScript: 45. Asincronía y el Event Loop - #jonmircha     ********** */

    /*  Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:
     Procesamiento Single thread y Multi thread. (los hilos son las unidades basicas de ejeecucion de cada proceso que realiza nuestra maquina - un solo hilo, o multiples hilos - para no bloquear el hilo principal)
     Operaciones de CPU y Operaciones de I / O.(operaciones de input y output)
     Operaciones Concurrentes y Paralelas.
     Operaciones Bloqueantes y No Bloqueantes.
     Operaciones Síncronas y Asíncronas.

     Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implem
     entado en un sólo hilo, (single thread) para operaciones de entrada y salida (input
     /output).
     */

    

        //Código Síncrono Bloquenate
        (() => {
            console.log("Código Síncrono");
            console.log("Inicio");
            function dos() {
              console.log("Dos");
            }
            function uno() {
              console.log("Uno");
              dos();
              console.log("Tres");
            }
            uno();
            console.log("Fin");
          })();
          console.log("********************");
          //Código Asíncrono No Bloquenate
          (() => {
            console.log("Código Asíncrono");
            console.log("Inicio");
            function dos() {
              setTimeout(function () {
                console.log("Dos");
              }, 1000);
            }
            function uno() {
              setTimeout(function () {
                console.log("Uno");
              }, 0);
              dos();
              console.log("Tres");
            }
            uno();
            console.log("Fin");
          })();

           /* **********     Curso JavaScript: 46. Callbacks - #jonmircha     ********** */

    function cuadradoCallback(value, callback) {
        setTimeout(() => {
          callback(value, value * value);
        }, 0 | Math.random() * 1000);
      }
      cuadradoCallback(0, (value, result) => {
        console.log("Inicia Callback");
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(1, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
              console.log(`Callback: ${value}, ${result}`);
              cuadradoCallback(4, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(5, (value, result) => {
                  console.log(`Callback: ${value}, ${result}`);
                  console.log("Fin Callback");
                  console.log("Callback Hell !!!!!😈🤘");
                  console.log("http://callbackhell.com/");
                });
              });
            });
          });
        });
      });


         /* **********     Curso JavaScript: 47. Promesas - #jonmircha     ********** */

         function cuadradoPromise(value) {
            if (typeof value !== "number") {
              return Promise.reject(`Error, el valor " ${value} " ingresado no es un número`);
            }
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve({
                  value,
                  result: value * value
                });
              }, 0 | Math.random() * 1000);
            });
          }
          cuadradoPromise(0)
            .then(obj => {
              //console.log(obj);
              console.log('Inicio Promise');
              console.log(`Promise: ${obj.value}, ${obj.result}`);
              return cuadradoPromise(1);
            })
            .then(obj => {
              console.log(`Promise: ${obj.value}, ${obj.result}`);
              return cuadradoPromise(2);
            })
            .then(obj => {
              console.log(`Promise: ${obj.value}, ${obj.result}`);
              return cuadradoPromise(3);
            })
            .then(obj => {
              console.log(`Promise: ${obj.value}, ${obj.result}`);
              return cuadradoPromise("4");
            })
            .then(obj => {
              console.log(`Promise: ${obj.value}, ${obj.result}`);
              return cuadradoPromise(5);
            })
            .then(obj => {
              console.log(`Promise: ${obj.value}, ${obj.result}`);
              console.log('Fin Promise');
            })
            .catch(err => console.error(err));
  
/* **********     Curso JavaScript: 48. Async - Await - #jonmircha     ********** */

function cuadradoPromise(value) {
    if (typeof value !== "number") {
      return Promise.reject(`Error, el valor " ${value} " ingresado no es un número`);
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          value,
          result: value * value
        });
      }, 0 | Math.random() * 1000);
    });
  }
  async function funcionAsincronaDeclarada() {
    try {
      console.log('Inicio Async Function');
      let obj = await cuadradoPromise(0);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise(1);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise(2);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise("3");
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise(4);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise(5);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      console.log('Fin Async Function');
    } catch (err) {
      console.error(err)
    }
  }
  funcionAsincronaDeclarada();
  const funcionAsincronaExpresada = async () => {
    try {
      console.log('Inicio Async Function');
      let obj = await cuadradoPromise(6);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise(7);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise(8);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise("9");
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      obj = await cuadradoPromise(10);
      console.log(`Async Function: ${obj.value}, ${obj.result}`);
      console.log('Fin Async Function');
    } catch (err) {
      console.error(err)
    }
  }
  funcionAsincronaExpresada();

  /* **********     Curso JavaScript: 49. Symbols - #jonmircha     ********** */
  let id = Symbol("id");
  let id2 = Symbol("id2");
  console.log(id === id2)
  console.log(id, id2);
  console.log(typeof id, typeof id2);
  const NOMBRE = Symbol("nombre");
  const SALUDAR = Symbol("saludar");
  const persona = {
    [NOMBRE]: "Jon",
    edad: 35
  };
  console.log(persona);
  persona.NOMBRE = "Jonathan MirCha"
  console.log(persona);
  console.log(persona.NOMBRE);
  console.log(persona[NOMBRE]);
  persona[SALUDAR] = function () {
    console.log(`Hola`);
  }
  console.log(persona);
  persona[SALUDAR]();
  for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
  }
  console.log(Object.getOwnPropertySymbols(persona));

  /* **********     Curso JavaScript: 50. Sets - #jonmircha     ********** */
  const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);
  console.log(set);
  console.log(set.size);
  const set2 = new Set();
  set2.add(1);
  set2.add(2);
  set2.add(2);
  set2.add(3);
  set2.add(true);
  set2.add(false);
  set2.add(true);
  set2.add({});
  console.log(set2);
  console.log(set2.size);
  console.log("Recorriendo set");
  for (item of set) {
    console.log(item);
  }
  console.log("Recorriendo set2");
  set2.forEach(item => console.log((item)));
  let arr = Array.from(set);
  console.log(arr);
  console.log(arr[0]);
  console.log(arr[9]);
  set.delete("HOla");
  console.log(set);
  console.log(set.has("hola"));
  console.log(set.has(19));
  set2.clear();
  console.log(set2);

  /* **********     Curso JavaScript: 51. Maps - #jonmircha     ********** */
    const mapa = new Map();
    mapa.set("nombre", "Jon");
    mapa.set("apellido", "MirCha");
    mapa.set("edad", 35);
    console.log(mapa);
    console.log(mapa.size);
    console.log(mapa.has("correo"));
    console.log(mapa.has("nombre"));
    console.log(mapa.get("nombre"));
    mapa.set("nombre", "Jonathan MirCha");
    console.log(mapa.get("nombre"));
    mapa.delete("apellido");
    mapa.set(19, "diecinueve");
    mapa.set(false, "falso");
    mapa.set({}, {});
    console.log(mapa);
    for (let [key, value] of mapa) {
      console.log(`Llave: ${key}, Valor:${value}`);
    }
    const mapa2 = new Map([
      ["nombre", "kEnAi"],
      ["edad", 7],
      ["animal", "perro"],
      [null, "nulo"]
    ]);
    console.log(mapa2);
    const llavesMapa2 = [...mapa2.keys()];
    const valoresMapa2 = [...mapa2.values()];
    console.log(llavesMapa2);
    console.log(valoresMapa2);
     /* **********     Curso JavaScript: 52. WeakSets & WeakMaps - #jonmircha     ********** */
    
     //const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);
    const ws = new WeakSet();
    let valor1 = { "valor1": 1 };
    let valor2 = { "valor2": 2 };
    let valor3 = { "valor3": 3 };
    ws.add(valor1);
    ws.add(valor2);
    console.log(ws);
    console.log(ws.has(valor1));
    console.log(ws.has(valor3));
    ws.delete(valor2);
    console.log(ws);
    ws.add(valor2);
    ws.add(valor3);
    console.log(ws);
    setInterval(() => console.log(ws), 1000);
    setTimeout(() => {
      valor1 = null;
      valor2 = null;
      valor3 = null;
    }, 5000);

    const wm = new WeakMap([
      ["nombre", "kEnAi"],
      ["edad", 7],
      ["animal", "perro"],
      [null, "nulo"]
    ]);

    const wm = new WeakMap();
    let llave1 = {};
    let llave2 = {};
    let llave3 = {};
    wm.set(llave1, 1);
    wm.set(llave2, 2);
    console.log(wm);
    console.log(wm.has(llave1));
    console.log(wm.has(llave3));
    console.log(wm.get(llave1));
    console.log(wm.get(llave2));
    console.log(wm.get(llave3));
    wm.delete(llave2);
    console.log(wm);
    wm.set(llave2, 2)
    wm.set(llave3, 3)
    console.log(wm);
    setInterval(() => console.log(wm), 1000);
    setTimeout(() => {
      llave1 = null;
      llave2 = null;
      llave3 = null;
    }, 5000);

/* /* **********     Curso JavaScript: 53. Iterables & Iterators - #jonmircha     ********** */
    const iterable = [1, 2, 3, 4, 5];
    //const iterable = "Hola Mundo";
    //const iterable = new Set([1, 2, 3, 3, 4, 5]);
    //const iterable = new Map([["nombre", "jon"], ["edad", 35]]);
    //Accedemos al iterador del iterable
    const iterador = iterable[Symbol.iterator]();
    console.log(iterable);
    console.log(iterador);
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    let next = iterador.next();
    while (!next.done) {
      console.log(next.value);
      next = iterador.next();
    } 
    

     /* **********     Curso JavaScript: 54. Generators - #jonmircha     ********** */
    function* iterable() {
      yield "hola";
      console.log("Hola consola");
      yield "hola 2";
      console.log("Seguimos con más instrucciones de nuestro código");
      yield "hola 3";
      yield "hola 4";
    }
    let iterador = iterable();
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    for (let y of iterador) {
      console.log(y);
    }
    const arr = [...iterable()];
    console.log(arr);
    function cuadrado(valor) {
      setTimeout(() => {
        return console.log({ valor, resultado: valor * valor })
      }, Math.random() * 1000);
    }
    function* generador() {
      console.log("Inicia Generator");
      yield cuadrado(0);
      yield cuadrado(1);
      yield cuadrado(2);
      yield cuadrado(3);
      yield cuadrado(4);
      yield cuadrado(5);
      console.log("Termina Generator");
    }
    let gen = generador();
    for (let y of gen) {
      console.log(y);
    }

/* **********     Curso JavaScript: 55. Proxies - #jonmircha     ********** */
    const persona = {
      nombre: "",
      apellido: "",
      edad: 0
    }
    const manejador = {
      set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) {
          return console.error(`La propiedad "${prop}" no existe en el objeto persona.`);
        }
        if (
          (prop === "nombre" || prop === "apellido") &&
          !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        ) {
          return console.error(`La propiedad "${prop}"" sólo acepta letras y espacios en blanco`);
        }
        obj[prop] = valor;
      }
    }
    const jon = new Proxy(persona, manejador);
    jon.nombre = "Jon";
    jon.apellido = "MirCha";
    jon.edad = 35;
    jon.twitter = "@jonmircha";
    console.log(jon);
    console.log(persona);





    /* **********     Curso JavaScript: 56. Propiedades Dinámicas - #jonmircha     ********** */
        let aleatorio = Math.round(Math.random() * 100 + 5);
        const objUsuarios = {
          propiedad: "Valor",
          [`id_${aleatorio}`]: "Valor Aleatorio"
        };
        console.log(objUsuarios);
        const usuarios = ["Jon", "Irma", "Miguel", "Kala", "kEnAi"];
        usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario);
        console.log(objUsuarios);

        
/* **********     Curso JavaScript: 57. this - #jonmircha     ********** */
    console.log(this);
        console.log(window);
        console.log(this === window);
        this.nombre = "Contexto Global";
        console.log(this.nombre);
        function imprimir() {
          console.log(this.nombre);
        }
        imprimir();
        const obj = {
          nombre: "Contexto Objeto",
          imprimir: function () {
            console.log(this.nombre);
          }
        }
        obj.imprimir();
        const obj2 = {
          nombre: "Contexto Objeto 2",
          imprimir
        }
        obj2.imprimir();
        const obj3 = {
          nombre: "Contexto Objeto 3",
          imprimir: () => {
            console.log(this.nombre);
          }
        }
        obj3.imprimir();
        function Persona(nombre) {
          const that = this;
          //this.nombre = nombre;
          that.nombre = nombre;
          //return console.log(this.nombre);
          //return function () {
          //console.log(this.nombre);
          //}
          //return () => console.log(this.nombre);
          return function () {
            console.log(that.nombre);
          }
        }
        let jon = new Persona("Jon");
        jon();





    /* **********     Curso JavaScript: 58. call, apply, bind - #jonmircha     ********** */
    console.log(this);
    this.lugar = "Contexto Global";
    function saludar(saludo, aQuien) {
      console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
    }
    saludar("Hola", "kEnAi");
    const obj = {
      lugar: "Contexto Objeto"
    }
    saludar.call(obj, "Hola", "Jon");
    saludar.call(null, "Hola", "Jon");
    saludar.call(this, "Hola", "Jon");
    saludar.apply(obj, ["Adios", "MirCha"]);
    saludar.apply(null, ["Adios", "MirCha"]);
    saludar.apply(this, ["Adios", "MirCha"]);
    this.nombre = "Window";
    const persona = {
      nombre: "Jon",
      saludar: function () {
        console.log(`Hola ${this.nombre}`)
      }
    }
    persona.saludar();
    const otraPersona = {
      saludar: persona.saludar.bind(this)
    }
    otraPersona.saludar();

 /* **********     Curso JavaScript: 59. JSON - #jonmircha     ********** */
    /* https://www.json.org/json-es.html */
    /* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON */
    
    const json = {
      cadena: "Jon",
      numero: 35,
      booleano: true,
      arreglo: ["correr", "programar", "cocinar"],
      objeto: {
        twitter: "@jonmircha",
        email: "jonmircha@gmail.com"
      },
      nulo: null
    }

    console.log(json);

    console.log(JSON);

    console.log("*** JSON.parse ***");
    console.log(JSON.parse("{}"));
    console.log(JSON.parse("[1,2,3]"));
    console.log(JSON.parse("true"));
    console.log(JSON.parse("false"));
    console.log(JSON.parse("19"));
    console.log(JSON.parse('"Hola Mundo"'));
    console.log(JSON.parse("null"));
    //console.log(JSON.parse("undefined"));
    console.log(JSON.parse('{ "x": 2, "y": 3 }'));

    console.log("*** JSON.stringify ***");
    console.log(JSON.stringify({}));
    console.log(JSON.stringify([1, 2, 3]));
    console.log(JSON.stringify(true));
    console.log(JSON.stringify(false));
    console.log(JSON.stringify(19));
    console.log(JSON.stringify("Hola Mundo"));
    console.log(JSON.stringify(null));
    console.log(JSON.stringify(undefined));
    console.log(JSON.stringify({ x: 2, y: 3 }));

    console.log("*** Ejemplo JSON ***");
    console.log(JSON.stringify(json));
    console.log(JSON.parse('{"cadena": "Jon","numero": 35, "booleano": true,"arreglo": ["correr","programar","cocinar"],"objeto": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"nulo": null}'));




    let d= document, //  es el arbol, la estructura html que nos permite acceder a los nodos de nuestro documento
        w= window,// es el contexto global que controla la ventana de nmuestro navegador
        n= navigator;//nos da informacion de las caracteristicas del dispositivo o del usuario que esta accediendo a nuestra web
