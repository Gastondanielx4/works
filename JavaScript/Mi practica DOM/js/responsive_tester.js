let w = window,
    d = document;
    
export default function enviarForm (){
let $submit = d.getElementById("btnSubmit")
$submit.addEventListener("submit", e =>{
    e.preventDefault();
        let $inputUrl = d.getElementById("get-url").value,
        $width = d.getElementById("get-width").value,
        $hight = d.getElementById("get-hight").value;
        console.log($inputUrl, $width, $hight);
})

}