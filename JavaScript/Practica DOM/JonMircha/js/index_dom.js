import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock, alarm} from "./reloj.js";
import {moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidation from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d = document

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarm("/assets/Awaken.ogg", "#activar-alarma","#desactivar-alarma")
    countdown("countdown", "May 23, 2022 03:23:19", "Feliz Cumpleaños amigo y docente digital")
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
         "(min-width: 1024px)",
          `<a target="_blank" href="https://www.youtube.com/embed/4QeLCtlbE_M">Ver Video</a>`,
           `<iframe id="videoYT" width="560" height="315" src="https://www.youtube.com/embed/4QeLCtlbE_M"
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
     clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
   </iframe>`)
    responsiveMedia("gmaps",
     "(min-width: 1024px)",
      `<a target="_blank" href="https://goo.gl/maps/Tpt6WdiDsmDvdEKr6">Ver Mapa</a>`,
       `<iframe id="mapGoogle" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18948.434693226885!2d-60.74063607510596!3d-32.907641184593125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65259a6071951%3A0x9624539dfb1da082!2sBosque%20de%20los%20Constituyentes!5e0!3m2!1ses-419!2sar!4v1643493957746!5m2!1ses-419!2sar"
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy">
   </iframe>`);
   responsiveTester("responsive-tester");
   userDeviceInfo("user-device");
   webCam("webcam");
   getGeolocation("geolocation");
   searchFilters(".card-filter", ".card");
   draw(".winner-btn",".player");
   slider();
   scrollSpy();
   smartVideo();
   contactFormValidation();
})
;
//keydown - cuando baja la tecla / keyup - cuando suelta la tecla 
// keypress - mientras la mantenga presionada
d.addEventListener("keydown", (e) => {
    shortcuts (e);
    moveBall (e, ".ball", ".stage");
});
darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();