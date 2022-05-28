let d = document;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0, //para que no se guarden en cache las lecturas
    };
    
    const success = (position) => {
        let coords = position.coords;
        /* console.log(position); */

        $id.innerHTML = 
        `<p>Tu posicion actual es:</p>
            <ul>
                <li>Latitud:<b>${coords.latitude}</b></li>
                <li>Longitud:<b>${coords.longitude}</b></li>
                <li>Precision:<b>${coords.accuracy}</b>metros</li>
            </ul>
            <a href="https://www.google.com.ar/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver en Google Maps</a>`
    };
    
    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        /* console.log(`Error ${err.code}: ${err.message}`); */
    };
   

    navigator.geolocation.getCurrentPosition(success, error, options)
}