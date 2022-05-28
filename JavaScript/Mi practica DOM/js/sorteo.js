let d = document;

export default function sortear(btn, selector) {
    let $arrayLista = d.querySelectorAll(selector);        
    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            let numGanador = Math.round(Math.random()* (9 - 0) + 0),
                ganador = $arrayLista[numGanador].textContent;
                console.log(ganador);
                console.log(numGanador);
            alert (`El ganador del sorteo es: \n ${ganador}`)
        }
    })
}