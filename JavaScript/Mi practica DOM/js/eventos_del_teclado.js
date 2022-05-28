
eventoDelTeclado(moverBola, atajoAlert, atajoConfirm, atajoPrompt){
    let d = document,
    $bola = d.getElementById("bola");
    
    d.addEventListener("keydown", (e) => {
        switch (e.keyCode){
            case 37:
                $bola.style.right =+ "40px"; break;
        }

    } )
    $bola.style.bottom = "100px"
}