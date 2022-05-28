<?php
if(!$_COOKIE["idioma_solicitado"]){
  HEADER("Location: pedir-idioma.php");
} else if ($_COOKIE["idioma_solicitado"]== "es") {
  HEADER("Location: espaniol.php");
} else if ($_COOKIE["idioma_solicitado"]== "en") {
  HEADER("Location: ingles.php");
}
?>