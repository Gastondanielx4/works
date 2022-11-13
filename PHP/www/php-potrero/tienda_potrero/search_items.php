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
            <h1>Pokemon</h1>
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
                <?php
        // 1) Conexion
        $conexion = mysqli_connect("127.0.0.1", "root", "");
        mysqli_select_db($conexion, "potrero");

        // 2) Preparar la orden SQL
        // Sintaxis SQL SELECT
        // SELECT * FROM nombre_tabla
        // => Selecciona todos los campos de la siguiente tabla
        // SELECT campos_tabla FROM nombre_tabla
        // => Selecciona los siguientes campos de la siguiente tabla
        $consulta='SELECT * FROM ropa';

        // 3) Ejecutar la orden y obtenemos los registros
        $datos= mysqli_query($conexion, $consulta);

        // 4) el while recorre todos los registros y genera una CARD PARA CADA UNA
        while ($reg = mysqli_fetch_array($datos)) {?>
        <div id="<?php echo $reg['id'];?>" class="col">
                    <div class="card text-center" style=" height:25rem; width: 20rem; padding-top: 1rem; align-items: center;">
                        <img src="data:image/jpg;base64, <?php echo base64_encode($reg['imagen'])?>" alt="" height="300px") class="card-img-top" alt="..." style="border-radius: 100%; >
                        <div class="card-body">
                            <h5 class="card-title"><?php echo ucwords($reg['marca']) ?></h5>
                            <h6 class="card-subtitle mb-2 text-muted">$ <?php echo $reg['precio']; ?></h6>
                            <button id="favButton${pokemonId}" class="favButton">Comprar</button>
                        </div> 
                    </div>
                </div>
        <?php } ?>
            </div>
        </div>
    </div>
</body>
<script src="js/index_pokedex.js" type="module"> </script>

</html>