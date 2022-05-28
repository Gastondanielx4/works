const arrayArtistas = [
    {
        avatar: "https://depor.com/resizer/HQgjD5K6SDwjYkurI7FLcucvR00=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/H42EXSOSQVCQ7HWEAIFVJNKH2Y.jpg",
        name: "Shakira",
        tipoArtista: "Cantante",
        textoBoton:"Tomatazo",
    },
    {
        avatar: "https://imgsnotigram.s3.amazonaws.com/uploads/2021/05/shutterstock-editorial-138187a.jpg",
        name: "Micheal Jackson",
        tipoArtista: "Cantante y bailarin",
        textoBoton:"Quiero ese Don",
    },
    {
        avatar: "https://www.cinemascomics.com/wp-content/uploads/2021/07/fast-and-furious-paul-walker-brian-oconner-960x560.jpg.webp",
        name: "Paul Walker",
        tipoArtista: "Actor",
        textoBoton:"Resucitar",
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1019401802171772929/vT6bbC4k_400x400.jpg",
        name: "Martin Bossi",
        tipoArtista: "Imitador",
        textoBoton:"Entrada gratis!",
    },
    {
        avatar: "https://vivo.perfil.com/storage/uploads/shows/photo_gallery/8f6ddf61e78ff9a83ca2276bf9a069e2.jpg",
        name: "Nicolas Detracy",
        tipoArtista: "Stand Up",
        textoBoton:"Ver video",
    },
    {
        avatar: "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2021/7/12/whatsapp_image_2021-07-12_at_16.27.58.jpg?itok=eVNAZ1fQ",
        name: "L-Gante",
        tipoArtista: "Payaso",
        textoBoton:"Tiro en la frente",
    },
    {
        avatar: "https://media.urgente24.com/p/8fae0cfdc46a5552ddf89a269a09cc60/adjuntos/319/imagenes/002/470/0002470020/dario-barassiijpg.jpg",
        name: "Gordo Barassi",
        tipoArtista: "Conductorazo",
        textoBoton:"Si BEBE!",
    },
    {
        avatar: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jim-carrey-1599117800.jpg?crop=1.00xw:0.698xh;0,0.0862xh&resize=980:*",
        name: "Jim Carrey",
        tipoArtista: "Actor",
        textoBoton:"Vota para que vuelva",
    },
    {
        avatar: "https://elintransigente.com/wp-content/uploads/2021/03/Santi-Maratea-5-1024x768.jpg",
        name: "Santi Maratea",
        tipoArtista: "Instagramer",
        textoBoton:"Colaborar",
    },

]
const divPrincipal = document.querySelector('#cardsArtistas')
let contador= 0;
let crearHTML = ""

arrayArtistas.forEach(function(element){
    contador ++
    crearHTML += `
    <div id="cardArtista${contador}" class="card_artista">
        <img class="avatar" src="${element.avatar}" alt="">
        <div id="caracteristicasArtista" class="caracteristica_artista">                            
            <p class="nombre">${element.name}</p>
            <p class="tipo_artista">${element.tipoArtista}</p>
            <button class="boton">${element.textoBoton}</button>
        </div>
    </div>
    `
})
divPrincipal.innerHTML = crearHTML;

/* for ( el of arrayArtistas){
    contador++;
    
    const crearCardArtista = document.createElement("div")
        crearCardArtista.className = "card_artista"
        crearCardArtista.setAttribute("id", `cardArtista${contador}`);
    const actualCardArtista = document.getElementById(`cardArtista${contador}`);
    const divPadre = document.getElementById("cardsArtistas");
    divPadre.insertBefore(crearCardArtista, actualCardArtista);

    const crearAvatar = document.createElement ("img")
        crearAvatar.src  = (el.avatar)
        crearAvatar.className = "avatar"
        crearAvatar.setAttribute("id", `avatar${contador}`);
    const cardsArtista = `cardArtista${contador}`;
    const actualImg = document.getElementById(`avatar${contador}`);
    const avatarPadre = document.getElementById(cardsArtista);
    avatarPadre.insertBefore(crearAvatar, actualImg);

    const crearDivCaracteristicas = document.createElement("div")
        crearDivCaracteristicas.className = "caracteristica_artista"
        crearDivCaracteristicas.setAttribute("id", `caracteristicasArtista${contador}`)
    const actualCaracteristicas = document.getElementById(`caracteristicasArtista${contador}`);
    const caracteristicasPadre = document.getElementById(cardsArtista);
    caracteristicasPadre.insertBefore(crearDivCaracteristicas, actualCaracteristicas);

    const darNombre = document.createElement("p")
        darNombre.className = "nombre"
        darNombre.setAttribute("id", `nombre${contador}`)
    const actualNombre = document.getElementById(`nombre${contador}`)
    const padreDeNombre = document.getElementById(`caracteristicasArtista${contador}`)
    padreDeNombre.insertBefore(darNombre, actualNombre)
    const contenidoNombre = document.createTextNode(el.name);
    darNombre.appendChild(contenidoNombre);

    const dartipoArtista = document.createElement("p")
        dartipoArtista.className = "tipo_artista"
        dartipoArtista.setAttribute("id", `tipoArtista${contador}`)
    const actualtipoArtista = document.getElementById(`tipoArtista${contador}`)
    const padreDetipoArtista = document.getElementById(`caracteristicasArtista${contador}`)
    padreDetipoArtista.insertBefore(dartipoArtista, actualtipoArtista)
    const contenidotipoArtista = document.createTextNode(el.tipoArtista);
    dartipoArtista.appendChild(contenidotipoArtista);

    const darBoton = document.createElement("buttom")
        darBoton.className = "boton"
        darBoton.setAttribute("id", `Boton${contador}`)
    const actualBoton = document.getElementById(`Boton${contador}`)
    const padreDeBoton = document.getElementById(`caracteristicasArtista${contador}`)
    padreDeBoton.insertBefore(darBoton, actualNombre)
    const contenidoBoton = document.createTextNode(el.textoBoton);
    darBoton.appendChild(contenidoBoton);
}
*/
