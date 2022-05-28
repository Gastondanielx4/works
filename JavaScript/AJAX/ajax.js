(()=>{
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();
        
        xhr.addEventListener("readystatechange", e => {
            if(xhr.readyState !== 4) return; //PARA QUE NO EJECUTE EN CADA ESTADO(4 ESTADOS) SI NO QUE EJECUTE DESPUES DEL ULTIMO (4TO)
            if(xhr.status >= 200 && xhr.status < 300){//EN EL CASO DE SER EXITOSA LA PETICION EJECUTE LO SIGUIENTE
            //console.log(xhr);
            //console.log("exito")
            //console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText)
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment)
            }
            else{//EN EL CASO DEL ERROR DE LA PETICION, EJECUTE LO SIGUIENTE
                //console.log("error");
                let message = xhr.statusText || "Ocurrio un error";
                $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
            }
    })
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users") // ABRIR CON GET LA WEB - SE PUEDE LLAMAR UN ARCHIVO LOCAL TAMBIEN 
    xhr.send(); //Y ENVIAR LA PETICION

})();
(()=> {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();
        
        fetch("https://jsonplaceholder.typicode.com/users").then(res =>res.ok? res.json(): Promise.reject(res)) //esta respuesta por defecto si es correcta da true en la propiedad ok: pero si da falso debemos ejecturar el reject para que accione el catch de error
        .then(json => {
            //console.log(json)
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment)
        })
        .catch(err=>{
            console.log(err)
            let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(()=>
        console.log()
        );
})();

(()=>{
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();

        async function getData(){
            try{
                let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();
                //onsole.log(res, json);

                if(!res.ok){
                    /* throw new Error ("Ocurrio un Error al solicitar los Datos") //throw es un como un return que envia el flujo al catch */
                }
                if(!res.ok) throw {status: res.status, statusText: res.statusText}
                json.forEach(el => {
                    const $li = document.createElement("li");
                    $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                    $fragment.appendChild($li);
                });
                $fetchAsync.appendChild($fragment)
            } catch (err){
                //console.log(err);
                let message = err.statusText || "Ocurrio un error";
                $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
            }finally{
                //console.log("Esto se ejecutara independientemente del try... catch")
            }
        }
        getData();
})();

(()=>{
    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();

    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        let json = res.data
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment)
        //console.log(res)
    })
    .catch((err)=>{
        //console.log(err.response)
        let message = err.response.statusText || "Ocurrio un error";
                $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(()=>{
        //console.log("Esto se ejecutara independientemente del resultado Axios")
    })
    ;
}
)();

(()=>{
    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();
    async function getData(){
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;
                json.forEach(el => {
                    const $li = document.createElement("li");
                    $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                    $fragment.appendChild($li);
                });
                $axiosAsync.appendChild($fragment)
                //console.log(res, json);
        }catch(err){
            //console.log(err.response)
            let message = err.response.statusText || "Ocurrio un error";
                $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        }finally{
            //onsole.log("Esto se ejecutara independientemente del try... catch")
        }
    }
    getData()
})();