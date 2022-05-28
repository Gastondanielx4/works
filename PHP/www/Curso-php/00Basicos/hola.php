<?php
//comentario de una sola linea
/*
Comentario multilinea
*/

//imprimir en pantalla
echo "Hola mundo";
echo "<br />Hola cruel mundo<br/> <h1>estoy aprendiendo PHP</h1>";

//variables
$nombre = "Gaston";
$Nombre = "Daniel";
//concatenacion de cadenas y variables
echo $nombre."&nbsp;".$Nombre;
echo "<br />";

$num1=5;
$num2=88;

$suma = $num1 + $num2;

echo $suma;

echo "<br />La variable \$suma tiene el valor de $suma<br />";

$modulo = $num2 % 2;
if($modulo === 0){
  echo "El n&uacute;mero es Par";
}else {
  echo "El n&uacute;mero es Impar";
}
echo "<br />";

for ($i=0; $i<=10; $i++){
  echo $i."<br />";
}
?>