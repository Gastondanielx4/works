import{PI,usuario,} from "./constantes.js";
import {sumar,restar} from "./aritmetica.js";

console.log("Soporto modulo");
console.log(PI);
console.log(usuario);
console.log(sumar(3,4));

//GRACIAS AL PRETIIER SI EXPORTAMOS POR DEFAULT AUTOMATICAMENTE SE AUTOCOMPLETA EN ESTE CODIGFO EL NOMBRE DEL OBJETO QUE EXPORTAMOS Y LA PODEMOS INVOCAR
//SOLO SE PUEDE HACER UN EXPORT DEFAULT 
// PARA HACER UN EXPORT DEFAULT SE DEBE HACER DESPUES DE DECLARAR LA VARIABLE.

/* EJEMPLO CON FUNCIONES O CLASES

export default function restar(a,b){
    return a - b;
}

 */

/* EJEMPLO EN VARIABLES O CONSTANTES

let password = "qwerty";
export default password;

*/
