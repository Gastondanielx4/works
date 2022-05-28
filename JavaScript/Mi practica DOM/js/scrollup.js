export function scrollUpear(butonUp){
    let d = document;
    d.addEventListener("scroll", e => {
    let $botonUp = d.querySelector(butonUp);
        if ((window.scrollY) > 350) {
            $botonUp.style.opacity = "1";
            $botonUp.style.visibility = "visible";
        };
        if ((window.scrollY) < 350) {
            $botonUp.style.opacity = "0";
            $botonUp.style.visibility = "hidden";
        };
    })
    /* d.addEventListener("click",e => {
        if (e.target.matches(botunUp)){
            console.log("apretao"); 
        }
    }) */
}