let d = document;

export default function geolocalizar (imprimirDatos) {

    if ("geolocation" in navigator) {
        let $divGeo = document.getElementById(imprimirDatos);
        navigator.geolocation.getCurrentPosition(success, error);
        function success (position) {
            let latitud = position.coords.latitude,
                longitud = position.coords.longitude,
                precision = position.coords.accuracy;

            /* console.log(position);
            console.log(latitud, longitud, precision); */
            $divGeo.innerHTML = `<h4>Tu posicion actual es:</h4>
            <p>Latitud: ${latitud}<br>
            Longitud: ${longitud}<br>
            Precision: ${precision} metros.</p>
            <a href="https://www.google.com.ar/maps/@${latitud},${longitud},15z" target="_blank" rel="noopener"> Ver en Google Maps</a>`;
        };
        function error(error) {
            /* console.log("La Geolocalizacion fue Bloqueada por el usario, activar si lo desea para continuar");
            console.log(error) */
        };
    }

    else {
        console.log("la geolocalización NO está disponible");
    }
    
}