let d = document;

export default function validarFormulario (idForm, idName){
    let $form = d.getElementById(idForm);
    let $name = d.getElementById(idName)

    /* let regExpName = /^[a-z ,.'-]+$/i;
    let regExpCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; */
    /* max lenght asunto 40 caracteres */
    /* max lenght comentarios 255 caracteres  */

    d.addEventListener("keyup", e => {
        if(e.target.matches($name)){
            console.log(e);

        }
    })


}