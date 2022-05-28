let d = document;

export function cards (div /* inputFiltro */){

    let cardsContent = [
        {
          title: "Tecnología",
          img: "https://placeimg.com/200/200/tech",
        },
        {
          title: "Animales",
          img: "https://placeimg.com/200/200/animals",
        },
        {
          title: "Arquitectura",
          img: "https://placeimg.com/200/200/arch",
        },
        {
          title: "Gente",
          img: "https://placeimg.com/200/200/people",
        },
        {
          title: "Naturaleza",
          img: "https://placeimg.com/200/200/nature",
        },
        {
          title: "Any",
          img: "https://placeimg.com/200/200"
        }
      ];


    let $divCard = d.querySelector(div),
        crearFigure = "";

    cardsContent.forEach(el => {
        crearFigure +=  
    `<figure class= "card">
        <img src="${el.img}" alt="${el.title}">
        <figcaption>${el.title}</figcaption>
    </figure>`
        
    });
    
    $divCard.innerHTML= crearFigure;
    /* $inputFiltro = d.getElementById(inputFiltro) */
    const cardsContentFiltrado = cardsContent.filter((elemento) => {
        return (elemento.title).toLowerCase() == "any";
    })
    /* console.log(cardsContentFiltrado); */ 
}