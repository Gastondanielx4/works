let d = document;

export default function  draw (btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
              random = Math.floor(Math.random()* $players.length),
              winner = $players[random];

        /* console.log($players, random, winner); */

        return `El ganador es: ${winner.textContent}`
    };

    d.addEventListener("click", e => {
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            /* console.log(result); */
        }
    })
}


/* PARA YOUTUBE */
/* const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector),
          random = Math.floor(Math.random()* $players.length),
          winner = $players[random];

    return `El ganador es: ${winner.textContent}`
};

 */
//SI LLAMAS ASI LLAMA TODO EL TEXTO DENTRO DEL DIV
/* getWinnerComment("ytd-comment-thread-renderer") */

//PARA LLAMAR SOLO AL NOMBRE, DENTRO DEL DIV (AUTHOR-ID) HAY UN SPAN Y AHI DENTRO EL NOMBRE SOLO DEL AUTOR DEL COMENTARIO
/* getWinnerComment("ytd-comment-thread-renderer #author-text span") */
