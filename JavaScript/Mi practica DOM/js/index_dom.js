import hamburgerMenu from "./menu_hamburguesa.js";
import cuentaRegresiva from "./countdown.js"
import {scrollUpear} from "./scrollup.js";
import darkTheme from "./tema_oscuro.js";
import { responsive } from "./responsive_design.js";
import detectorConexion from "./detector_conexion.js";
import detectarWebcam from "./detector_webcam.js";
import geolocalizar from "./geolocalizador.js";
import { cards } from "./card_search.js";
import sortear from "./sorteo.js";
import slider from "./responsive_slider.js";
import scrollSpy from "./scroll_espia.js";
import videoInteligente from "./video_inteligente.js";
import validarFormulario from "./validar_formulario.js";
import narradorOnline from "./narrador.js";
/* import eventoDelTeclado from "./eventos_del_teclado.js" */

const d=document

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    eventoDelTeclado("#contenedorBola", "#bola");
    cuentaRegresiva("Jun 14, 2022",".contador", "Para mi Cumpleaños");
    scrollUpear(".scroll-up-btn");
    responsive("videoYT", "youtube", "mapGoogle", "googleMap");
    detectorConexion("cartelConexion",'reestablecida', "classOff");
    detectarWebcam("videoElement");
    geolocalizar("datosGeolocalizacion");
    cards(".cards"/* ,"filtro" */);
    sortear("#btn-inicioSorteo",".participantes");
    slider("#etiquetaImg", "#flechaLeft", "#flechaRight")
    scrollSpy();
    videoInteligente("#seccion13 video");
    validarFormulario("formularioComentarios", "name");
    narradorOnline(".btn-leer", ".input-leer", "#voicelist")   
})
;   


const $reloj = d.querySelector(".reloj-digital")
const $inicia = d.getElementById("iniciaReloj");
const $detiene = d.getElementById("detieneReloj");

function relojDigital () {
    let horaActual = new Date,
    hora = horaActual.getHours(),
    minutos = horaActual.getMinutes(),
    segundos = horaActual.getSeconds();
    
    if(hora<10){hora = `0${hora}`}
    if(minutos<10){minutos = `0${minutos}`}
    if(segundos<10){segundos = `0${segundos}`}
    
    $reloj.textContent = `${hora}:${minutos}:${segundos}`;
}

function iniciarReloj () {
    $inicia.disabled=true;
    $reloj.className= "reloj-digital";
    let segundero = setInterval(relojDigital, 1000);
    if ($inicia.disabled=false){clearInterval (segundero)};
    
}
function detenerReloj() {
    $inicia.disabled=false;
    $reloj.className= "reloj-digital-desactivado"
}

    $inicia.addEventListener("click", iniciarReloj) 
    $detiene.addEventListener("click", detenerReloj)


let $audio = d.getElementById("audio"),
    $iniciaAlarma = d.getElementById("iniciaAlarma"),
    $detieneAlarma = d.getElementById("detieneAlarma");

    $iniciaAlarma.addEventListener("click", iniciarAlarma)
    $detieneAlarma.addEventListener("click", detenerAlarma)
function iniciarAlarma () {
    $audio.play()
}
function detenerAlarma () {
    $audio.pause()
    $audio.currentTime = 0;
}

/* let d = document, */
function eventoDelTeclado(contenedor, bola){

    d.addEventListener("click", (e)=>{
        if(e.target.matches(contenedor)){
            moverBola(bola)
        }
    })
}

function moverBola(bola){
    let $bola = d.querySelector(bola)
    d.addEventListener("keydown", (e) => {
        let y = 0;
        let x = 0;
        switch (e.keyCode){
            case 37:
            e.preventDefault();
            x +=40;
            break;
            case 38:
            e.preventDefault();
            y +=40;
            break;
            case 39:
            e.preventDefault();
            x -=40;
            break;s
            case 40:
            e.preventDefault();
            y -=40;
            break;                
        }
        $bola.style.right = `${x}px`;
        $bola.style.bottom = `${y}px`;
    } )
}
darkTheme(".dark-theme-btn", "dark-mode");