let d = document;

export default function narradorOnline(btn, input, voicelist) {
    let $textoALeer = d.querySelector(input),
        $tipoDeVoz = d.querySelector(voicelist),
        $btnLeer = d.querySelector(btn);


    function leer (textoALeer){

        setTimeout(() => {
            let voces = window.speechSynthesis.getVoices();
            console.log(voces)
                voces.forEach(el => {
                    let option = document.createElement (`option`)
                    option.textContent = `Lenguaje:${el.lang} - Nombre ${el.name}`
                    console.log(option);
                    $tipoDeVoz.appendChild(option)
                })
        }, 0);
                
        speechSynthesis.speak(new SpeechSynthesisUtterance(textoALeer));
    }
    console.log($textoALeer.value);
    leer()
}