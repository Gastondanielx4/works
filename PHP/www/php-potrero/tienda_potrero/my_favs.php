<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css">
    <link href="fonts/jano-sans/stylesheet.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="css/styles_search.css">
    <link rel="stylesheet" href="css/styles_favs.css">
    <title>Pokedex Search</title>
</head>

<body>
    <div id="headerStatic" class="static-nav">
        <div class="icon-page">
            <img src="img/pokeball.png" alt="">
            <p>Pokedex</p>
        </div>
        <!-- NAV HAMBURGUESA -->
        <nav id="nav" class="nav">
            <ul>
                <a href="index.html">Home</a>
                <a href="search_items.html">Productos</a>
                <a href="my_favs.html">My favs</a>
            </ul>
        </nav>
        <!-- NAV DESKTOP -->
        <nav class="nav1">
            <ul>
                <a href="index.html">Home</a>
                <a href="search_items.html">Productos</a>
                <a href="my_favs.html">My favs</a>
            </ul>
        </nav>
    </div>
    <button class="panel-btn hamburger hamburger--vortex" type="button">
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
    <div class="contenido">
        <div class="searchDiv">
            <h1>My favs</h1>
            <input type="search" placeholder="Buscar..." class="card-filter">
            <input type="button" value="Search" class="searchButton">
        </div>
        <div class="contenedor">
            <div id="divCards" class="row row-cols-1 row-cols-md-4 g-4">
                <!--<div id="card${pokemonId}" class="col">
                    <div class="card text-center" style=" height:15rem; width: 18rem; padding-top: 1rem; align-items: center;">
                        <img src="${avatar}" class="card-img-top" alt="..." style="border-radius: 100%; width: 7rem">
                        <div class="card-body">
                            <h5 class="card-title">${namePokemon}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${types}</h6>
                            <button id="favButton${pokemonId}" class="favButton">Add to favs</button>
                        </div> 
                    </div>
                </div>`; -->
            </div>
        </div>
    </div>
</body>
<script src="js/index_myfavs.js" type="module"></script>

</html>