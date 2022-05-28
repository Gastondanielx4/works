'use strict'

let puntaje = 0;


alert ("1.¿Cual es la capital de Chile?\n(responde con el número de la respuesta o tipea tal cual la respuesta)"); 
let correctaUno = "No se pero queda cerca del Mar"
let respuestaUno = prompt ('1.Chile\n2.'+correctaUno+ '\n3.Santiago de Chile\n4.Amar azul');
    if (respuestaUno == 2 || respuestaUno == correctaUno ){
        puntaje += 10;
        alert ("Correcto, por no hacerte el intelectual poniendo la Opcion 3 y  bien por bardear a los indios barranqueros estos, +10 Pa! \nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, era la opcion bardera...\nTu puntaje es "+ puntaje );
    }

alert ('2.¿Como deberia llamarse nuestro pais?\n(responde con el número de la respuesta o tipea tal cual la respuesta)\n\n\n\n\nPuntaje: '+ puntaje);
let correctaDos = "Republica Peronia"
let respuestaDos = prompt ('1. '+ correctaDos + '\n 2. Argentain\n3. Argenzuela\n4. Argenchina')
    if(respuestaDos == 1 || respuestaDos == correctaDos ){
        puntaje += 10;
        alert ("Esta es la que mas gracia me causa, pero todas podrian ser correctas.\nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, pero podria ser cualquiera.\n Tu puntaje es "+ puntaje );
    }

alert ('3.¿"Que es lo mejor de Argentina?"\n(responde con el número de la respuesta o tipea tal cual la respuesta)\n\n\n\n\nPuntaje: '+ puntaje);
let correctaTres = "El gordo Barassi"
let respuestaTres = prompt ('1. El Asado\n 2. "La aventura (chorros vs laburantes)"\n3. ' + correctaTres + '\n4. El diegote')
    if(respuestaTres == 3 || respuestaTres == correctaTres ){
        puntaje += 10;
        alert ("Correcta, porque se me canta en este momento! \nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, lo lamento si pusiste al diego o al asado =( \nTu puntaje es "+ puntaje );
    }

alert ('4.¿"Cual es el trabajo mas ñoqui?"\n(responde con el número de la respuesta o tipea tal cual la respuesta)\n\n\n\n\nPuntaje: '+ puntaje);
let correctaCuatro = "Project Manager (EMA)"
let respuestaCuatro = prompt ('1. Municipal\n2. Docente\n3. Politico\n4. '+ correctaCuatro)
    if(respuestaCuatro == 4 || respuestaCuatro == correctaCuatro ){
        puntaje += 10;
        alert ("Incorrecto, pero ganaste 10pts por bardearlo al Ema; \nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, seguramente necesitas un ascenso...\nTu puntaje es "+ puntaje );
    }
    
alert ('5.¿"Cual es el trabajo mas gay?"\n(responde con el número de la respuesta o tipea tal cual la respuesta)\n\n\n\n\nPuntaje: '+ puntaje);
let correctaCinco = "Desarrollador (Frontend) - Lo que hace Matias"
let respuestaCinco = prompt ('1. Profe de Danza\n2. Peluquero\n3. Diseñador de moda\n4. '+ correctaCinco +'\n5. De lo que sea en Federacion Patronal Seguros')
    if(respuestaCinco == 4 || respuestaCinco == correctaCinco ){
        puntaje += 10;
        alert ("Tambien es Incorrecto, pero por bardearlo a Mati 10+ pa vos...\nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, tambien por chupa medias...\nTu puntaje es "+ puntaje );
    }
         

        





/* const preguntasRespuestas = [

    {
        pregunta :  "Cual es la capital de Chile?",
        respuestas : {
            1: "Chile",
            2: "No se pero queda cerca del Mar",
            3: "Santiago de Chile",
            4: "Amar azul",                           
        },
        respuestacorrecta: 2
    },
    {
        pregunta :  "Como deberia llamarse nuestro pais?",
        respuestas : {
            1: "Argentain",
            2: "Republica Peronia",
            3: "Argenzuela",
            4: "Argenchina",                        
        },
        respuestacorrecta: 2
    },
    {
        pregunta :  "Que es lo mejor de Argentina?",
        respuestas : {
            1: "El Asado",
            2: "La aventura (chorros vs laburantes)",
            3: "El gordo Barassi",
            4: "El diegote"                  
        },
        respuestacorrecta: 3
    }
]

 */

