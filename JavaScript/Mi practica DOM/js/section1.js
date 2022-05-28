function relojDigital () {
    const d = document;

    $inicia = d.querySelector("iniciaReloj");
    $detiene = d.querySelector("detieneReloj");

    $inicia.addEventListener("click", () => {
        console.log(`Iniciaste el reloj`);
    })
    
}