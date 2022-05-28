const urlAPI = 'https://reqres.in/api/users?per_page=12'

fetch(urlAPI)
.then(response => response.json() )
.then(dato =>{

    const arreglo = dato.data;
    const divPrincipal = document.querySelector('#divCards')
    let crearHTML = ""

    arreglo.forEach(element => {
        crearHTML += `
            <div id="card${element.id}" class="col">
                <div class="card text-center" style=" height:15rem; width: 18rem; padding-top: 1rem; align-items: center;">
                    <img src="${element.avatar}" class="card-img-top" alt="..." style="border-radius: 100%; width: 5rem">
                    <div class="card-body">
                    <h5 class="card-title">${element.first_name} ${element.last_name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${element.email}</h6>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `
    });
    divPrincipal.innerHTML = crearHTML;
})

