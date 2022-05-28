const MyArray = [
    {"name":"Jonh Smith", "title":"Newbie Programer","buttontext":"Follow","avatar": "https://reqres.in/img/faces/7-image.jpg"},
    {"name":"Alesha Doe", "title":"FullStack Programer","buttontext":"Add Friend","avatar": "https://reqres.in/img/faces/8-image.jpg"},
    {"name":"Jessica Jones", "title":"Copywriter","buttontext":"View Text", "avatar": "https://reqres.in/img/faces/11-image.jpg"}
]

const MyDeformedArray = [
    {"firstName":"Juanse Laverde", "title":"Singer","buttontext":"Sing","icon": "https://reqres.in/img/faces/7-image.jpg"},
    {"firstName":"Alesha Doe", "title":"Newbie","buttontext":"Add Oil","icon": "https://reqres.in/img/faces/8-image.jpg"},
    {"firstName":"Jonas Uala", "title":"Lier","buttontext":"View Text", "icon": "https://reqres.in/img/faces/11-image.jpg"}
]

let arrayTransformado = MyDeformedArray.map(obj => {
    let objT = {};
    objT['name'] = obj.firstName;
    objT['title'] = obj.title;
    objT['buttontext'] = obj.buttontext;
    objT['avatar'] = obj.icon;
    return objT;
})

const MyStudents = MyArray.concat(arrayTransformado);

console.log(MyStudents);

const divPrincipal = document.querySelector('#divCards')
let crearHTML = ""

MyStudents.forEach(element => {
        crearHTML += `
            <div id="card${element.id}" class="col">
                <div class="card text-center" style=" height:15rem; width: 18rem; padding-top: 1rem; align-items: center;">
                    <img src="${element.avatar}" class="card-img-top" alt="..." style="border-radius: 100%; width: 5rem">
                    <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${element.title}</h6>
                    <a href="#" class="btn btn-primary">${element.buttontext}</a>
                    </div>
                </div>
            </div>
        `
    })
divPrincipal.innerHTML = crearHTML;


    