/* 
el objeto navigator tiene una propiedad que evalua la deteccion de 
la conexion y el objeto window tiene los eventos de conexion 
y desconexion */
let d = document;

export default function detectorConexion (cartel, classOn, classOff){
    const  $cartelConexion = d.getElementById(cartel) 

    if(navigator.onLine) {
        goOnline();
    } else {
       goOffile();
    }
    
    window.addEventListener('offline', goOffline());
    window.addEventListener('online', goOnline());
    
    function goOnline() {
        $cartelConexion.classList.add(classOn);
        $cartelConexion.textContent = "Conexion reestablecida";
        setTimeout(() => {
            $cartelConexion.classList.remove(classOn)
        }, 4000);
        ;
    }
    function goOffline() {
        $cartelConexion.classList.add(classOff);
        $cartelConexion.textContent = "Conexion perdida";
        setTimeout(() => {
            $cartelConexion.classList.remove(classOff)
        }, 4000);

    }
}