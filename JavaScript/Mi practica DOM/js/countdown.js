export default function cuentaRegresiva (fecha, contador, paraQue){
    let d = document;
    setInterval(() => {
        let fechaActual = Date.now(),
        fechaEsperada = Date.parse(fecha), 
        /* let IPOfecha = new Date;    
        console.log(IPOfecha.setTime(Date.parse("Jun 14, 2022"))); */
        faltan = fechaEsperada - fechaActual;

    let dias = parseInt(faltan / 86400000);
        faltan -= dias*86400000;
    let horas = parseInt(faltan / 3600000);
        faltan -= horas*3600000;
    let minutos = parseInt(faltan / 60000);
        faltan -= minutos*60000;
    let segundos = parseInt(faltan / 1000),
        total = dias + horas + minutos + segundos;
        
    if(total !== 0){
        let $contador = d.querySelector(contador)
        $contador.textContent = `Faltan ${dias} dias, ${horas} horas ${minutos} minutos y ${segundos} segundos ${paraQue}`;
        /* if(horas<10){horas = `0${horas}`}
        if(minutos<10){minutos = `0${minutos}`}
        if(segundos<10){segundos = `0${segundos}`} */
    }
    else{
        alert("YA ES TU CUMPLEAÑOS")
    }
    }, 1000);      
}    
