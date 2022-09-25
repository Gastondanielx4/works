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
    <title>Trabajo Práctico N° 3</title>
</head>
<body>
    <head>
        <h1>Estructuras de Control: Parte 2</h1>
        <div>
            <li class="number-column" ></li>
            <ol>
                <li><h3>Mostrar los números del 1 al 100</h3>
                    <ul class="number-column">
                        <?php
                            for ($i=0; $i < 101 ; $i++) { 
                                print "<li> $i</li>";
                            }
                        ?>
                    </ul>
                </li>
                <hr>
                <li><h3>Mostrar los números del 100 al 1</h3>
                    <ul class="number-column">
                        <?php
                             for ($i=100; $i > 0 ; $i--) { 
                                print "<li> $i</li>";
                            }
                        ?>
                    </ul class="number-column">
                </li>
                <hr>
                <li><h3>Mostrar los números pares del 1 al 100</h3>
                    <ul class="number-column">
                        <?php
                             for ($i=0; $i < 101 ; $i++) { 
                                if ($i%2 == 0) {
                                    print "<li> $i</li>";
                                };
                            }
                        ?>
                    </ul>
                </li>
                <hr>
                <li><h3>Mostrar los números impares del 1 al 100</h3>
                    <ul class="number-column">
                        <?php
                             for ($i=0; $i < 101 ; $i++) { 
                                if ($i%2 != 0) {
                                    print "<li> $i</li>";
                                };
                            }
                        ?>
                    </ul>
                </li>
                <hr>
                <li><h3>Mostrar la suma de los números del 1 a 20</h3>
                    <ul class="number-column">
                        <?php
                            $suma = 0;
                            for ($i=0; $i < 21 ; $i++) { 
                               $suma += $i;
                            }
                             print "<li> $suma</li>";
                        ?>
                    </ul>
                </li>
                <hr>
                <li><h3>Mostrar la suma de lo números pares del 1 a 20</h3>
                    <ul class="number-column">
                        <?php
                            $sumaPares = 0;
                             for ($i=0; $i < 21 ; $i++) { 
                                if ($i%2 == 0) {
                                    $sumaPares += $i ;
                                };
                            }
                            print "<li>$sumaPares </li>";
                        ?>
                    </ul>
                </li>
            </ol>
        </div>
    </head>    
</body>
</html>