<?php
$usuario  = $_POST ["user"];
$contrasenia  = $_POST ["pass"];

session_start();
$_SESSION["usuario"] = $usuario;

$conexion = mysqli_connect("127.0.0.1", "root", "");
                    mysqli_select_db($conexion, "potrero");

$consulta='SELECT * FROM usuarios';


 $datos= mysqli_query($conexion, $consulta);

 while ($reg = mysqli_fetch_array($datos)){
    if ($usuario == $reg['users']&& $contrasenia == $reg['password']) {
        session_start();
        $_SESSION["usuario"] = $usuario;
        header ( "location:admin.php");
    }
    else {
        header ( "location:error.html");
    }
 }
?>
 