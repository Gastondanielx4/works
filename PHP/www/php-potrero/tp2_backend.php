<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    html {
        background-color: tomato;
    }
    body{
        display: flex;
        justify-content: center;
    }
    h3{
        background-color:greenyellow;
    }
    li{
        margin: 1rem 4rem;
        background-color: green;
    }
    b{
        color:red;
    }
</style>
<body>
    <ul>
        
    <?php
    $n = 0;
    echo "<h2>Ejercicio 1 2 y 3</h2><hr>";
    echo '<h3>Si la variable "n" es igual a: <b>', $n, '</b></h3>';
    if ($n > 0) {
         echo  "<li> Es positivo</li>";
    }if ($n > 1 && $n<10) {
        echo  "<li> Esta entre 1 y 10</li>";
    } if ($n > 10 ||$n < 2) {
         echo  "<li> Es mayor a 10 o menor a 2</li>";
    }
    $n = 4;
    echo '<h3>Si la variable "n" es igual a: <b>', $n, '</b></h3>';
    if ($n > 0) {
         echo  "<li> Es positivo</li>";
    }if ($n > 1 && $n<10) {
        echo  "<li> Esta entre 1 y 10</li>";
    } if ($n > 10 ||$n < 2) {
         echo  "<li> Es mayor a 10 o menor a 2</li>";
    }
    $n = 8;
    echo '<h3>Si la variable "n" es igual a:<b> ', $n, '</b></h3>';
    if ($n > 0) {
         echo  "<li> Es positivo</li>";
    }if ($n > 1 && $n<10) {
        echo  "<li> Esta entre 1 y 10</li>";
    } if ($n > 10 ||$n < 2) {
         echo  "<li> Es mayor a 10 o menor a 2</li>";
    }
    $n = 11;
    echo '<h3>Si la variable "n" es igual a: <b>', $n, '</b></h3>';
    if ($n > 0) {
         echo  "<li> Es positivo</li>";
    }if ($n > 1 && $n<10) {
        echo  "<li> Esta entre 1 y 10</li>";
    } if ($n > 10 ||$n < 2) {
         echo  "<li> Es mayor a 10 o menor a 2</li>";
    }
    echo "<hr>";
    ?>
    <?php
    echo "<h2>Ejercicio 4</h2><hr>";
    $numero1 = 12;
    $numero2 = 8;
    echo '<h3>El numero 1 es igual a :<b>', $numero1, '</b> &nbsp&nbsp&nbsp&nbsp- &nbsp&nbsp&nbsp&nbspEl numero 2 es igual a :<b>', $numero2, '</b> </h3>';
    if ($numero1 > $numero2) {
        echo '<li> Suma = ', $numero1+$numero2, "</li>";
        echo '<li> Resta = ', $numero1-$numero2, "</li>";
    }
    if ($numero1 < $numero2) {
        echo '<li> Multiplicación= ',$numero2 * $numero1, "</li>";
        echo '<li> División = ',$numero2/ $numero1, "</li>";
        echo '<li> Resto = ', $numero2 % $numero1,  "</li>";
    }
    if ($numero1 == $numero2) {
        echo '<li> Los números ingresados son iguales</li>';
    }
     $numero1 = 8;
    $numero2 = 8;
    echo '<h3>El numero 1 es igual a :<b>', $numero1, '</b> &nbsp&nbsp&nbsp&nbsp- &nbsp&nbsp&nbsp&nbspEl numero 2 es igual a :<b>', $numero2, '</b> </h3>';
    if ($numero1 > $numero2) {
        echo '<li> Suma = ', $numero1+$numero2, "</li>";
        echo '<li> Resta = ', $numero1-$numero2, "</li>";
    }
    if ($numero1 < $numero2) {
        echo '<li> Multiplicación= ',$numero2 * $numero1, "</li>";
        echo '<li> División = ',$numero2/ $numero1, "</li>";
        echo '<li> Resto = ', $numero2 % $numero1,  "</li>";
    }
    if ($numero1 == $numero2) {
        echo '<li> Los números ingresados son iguales</li>';
    }
 $numero1 = 4;
    $numero2 = 16;
    echo '<h3>El numero 1 es igual a :<b>', $numero1, '</b> &nbsp&nbsp&nbsp&nbsp- &nbsp&nbsp&nbsp&nbspEl numero 2 es igual a :<b>', $numero2, '</b> </h3>';
    if ($numero1 > $numero2) {
        echo '<li> Suma = ', $numero1+$numero2, "</li>";
        echo '<li> Resta = ', $numero1-$numero2, "</li>";
    }
    if ($numero1 < $numero2) {
        echo '<li> Multiplicación= ',$numero2 * $numero1, "</li>";
        echo '<li> División = ',$numero2/ $numero1, "</li>";
        echo '<li> Resto = ', $numero2 % $numero1,  "</li>";
    }
    if ($numero1 == $numero2) {
        echo '<li> Los números ingresados son iguales</li>';
    }
    echo "<hr>";
    ?>
    </ul>
</body>
</html>