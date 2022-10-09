<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
       html {
        box-sizing: border-box;
        }
        *,
         *:before,
         *:after {
         box-sizing: inherit;
        }
        body{
            margin: 0;
             background-color: lightgreen;
        }
        h1{
            text-decoration: underline;
            height: 5vh;
            margin: 0;
            text-align: center;
            background-color: #8484e9;
        }
        h3{
                margin-block-start: 0.5em;
                margin-block-end: 0.5em;
        }
        div{
            background-color: lightgreen;
            width: 100%;  
            height: 95vh;
            padding-top:0.5rem;
        }
        .number-column{
            column-count: 18;
            list-style-type: square;
            list-style-position: inside;
            column-rule: thin solid black;
        }
    </style>
    <title>Trabajo Práctico N° 4</title>
</head>
<body>
    <head>
        <h1>Matrices</h1>
        <div>
            <ol>
                <li><h3>Ejercicio 1</h3>
                <ul>            
                    <?php
                        $primerosNumerosPares  = [ 2, 4, 6, 8, 10];
                        foreach ($primerosNumerosPares as $numeros ) {
                        print "<li> $numeros</li>";
                        }
                    ?>
                </ul>
                <li><h3>Ejercicio 2</h3>
                <ul>            
                    <?php
                        $arrayRandom  = [ "Pedro", "Ana", 34, 1];
                        print_r ($arrayRandom)
                    ?>
                </ul>
                <li><h3>Ejercicio 3</h3>
                <ul>            
                    <?php
                        $arrayAsociativo  = [ 'Nombre' => "Pedro", 'Apellido' => "Torres", 'Direccion' => "Av. Mayor 3703", 'Telefono' => 1122334455];
                        foreach ($arrayAsociativo as $valores ) {
                        print "<li> $valores</li>";
                        }
                        print_r ($arrayAsociativo)
                    ?>
                </ul>
                <li><h3>Ejercicio 4</h3>
                <ul>            
                    <?php
                        $ciudades  = [ "Madrid", "Barcelona", "Londres", "New York", "Los Angeles", "Chicago"];
                        foreach ($ciudades as $key=>$ciudad ) {
                        print "<li> La ciudad con el indice $key tiene el nombre $ciudad</li>";
                        }
                    ?>
                </ul>
                <li><h3>Ejercicio 5</h3>
                <ul>            
                    <?php
                       $ciudadesConIndices  = [ 'MD' => "Madrid", 'BCL' => "Barcelona", 'LD' => "Londres", 'NY' => "New York", 'LA' => "Los Angeles", 'CCG' => "Chicago"];
                        foreach ($ciudadesConIndices as $key=>$ciudad ) {
                        print "<li> El índice de $ciudad es $key</li>";
                        };
                    ?>
                </ul>
            </ol>
        </div>
    </head>    
</body>
</html>