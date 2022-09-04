<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li> <h3>Punto 1</h3></li>
        <?php
            echo "Hola mundo"
        ?>    
        <li><h3>Punto 2</h3></li>
        <?php
         $saludo = "Hola mundo";
            echo $saludo
        ?>   
        <li><h3>Punto 3</h3></li>
        <?php
         $valorA = 60;
         $valorB = 40;
         $sumaValores = $valorA + $valorB;
            echo "Valor A: ", $valorA, "&nbsp";
            echo "&nbsp &nbsp &nbsp" ,"Valor B: ", $valorB, '<br/><br/>';
            echo "El resultado de las sumas es: ", $sumaValores,  '<br/><br/>' ; 
            function multiplicacion ( $A, $B) {
                echo 'El resultado de la multiplicacion es: ', ($A * $B), '<br/><br/>' ;
            };
            multiplicacion($valorA, $valorB);
            echo "El resultado de la division es: ", ($valorA / $valorB) ;
        ?>   
        <li> <h3>Punto 4</h3></li>
        <?php
        $valorCelsius = 20;
            echo "Temperatura (Celsius): ",$valorCelsius, "°", '<br/><br/>' ;
            $valorFarenheit= $valorCelsius*1.8 +32;
            echo "Temperatura (Farenheit): ",$valorFarenheit, "°";
        ?> 
        <li> <h3>Punto 5</h3></li>
         <ul>
            <li> A)</li>
            <br/>
        <?php
        $baseRectangulo = 18;
        $alturaRectangulo = 12;
        $perimetroRectangulo = $baseRectangulo*2 + $alturaRectangulo*2;
        $areaRectangulo = $baseRectangulo * $alturaRectangulo;
            echo "Base del rectangulo: ",$baseRectangulo," cm", '<br/>' ;
            echo "Altura del rectangulo: ",$alturaRectangulo," cm", '<br/>' ;
            echo "Perimetro del rectangulo: ",$perimetroRectangulo," cm", '<br/>' ;
            echo "Area del rectangulo: ",$areaRectangulo," cm<sup>2</sup>", '<br/>' ;
        ?>
        </ul>
        <ul>
            <li> B)</li>
            <br/>
        <?php
        $radioCirculo = 30;
        $valorPi = pi();
        $perimetroCirculo = $radioCirculo * ($valorPi*2);
        $areaCirculo = $valorPi * ($radioCirculo**2);
            echo "Radio del circulo: ",$radioCirculo," cm", '<br/>' ;
            echo "Perimetro circulo: ",$perimetroCirculo," cm", '<br/>' ;
            echo "Area del circulo: ",$areaCirculo," cm<sup>2</sup>", '<br/>' ;
        ?>
        </ul>        
    </ul>   
</body>
</html>