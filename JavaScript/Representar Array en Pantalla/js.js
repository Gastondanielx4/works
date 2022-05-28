const lista = ["Perro", "Gato", "Cobayo", "Pececito", "Tero", "LaBruja"];
let contador= 0;

for ( el of lista){
    contador ++;
    const crearLi = document.createElement ("li");
    const contenidoLi = document.createTextNode(el);
    crearLi.appendChild(contenidoLi);
    const actualLi = document.getElementById(`div${contador}`);
    const elementoPadre = document.getElementById("listaUl")
    elementoPadre.insertBefore(crearLi, actualLi);
    console.log(contador);
}
