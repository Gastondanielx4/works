<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Tienda de ropa</h1>
    <a href="listar.php">
        <input type="button" value="Volver a lista completa">
    </a>

    <h2>Lista de ropa</h2>
    <p>La siguiente lista muestra los datos de la ropa actualmente en stock.</p>
    <table border="1">
    <tr>
        <th>ID</th>
        <th>TIPO DE PRENDA</th>
        <th>MARCA</th>
        <th>TALLE</th>
        <th>PRECIO</th>
    </tr>
    <?php
    // 1) Conexion
          $conexion = mysqli_connect("localhost", "id19501423_gastondanielx4", "+?S1OE&KOa~{7tmA");
        mysqli_select_db($conexion, "id19501423_potrero");

    // 2) Preparar la orden SQL
    // Sintaxis SQL SELECT
    // SELECT * FROM nombre_tabla
    // => Selecciona todos los campos de la siguiente tabla
    // SELECT campos_tabla FROM nombre_tabla
    // => Selecciona los siguientes campos de la siguiente tabla
 $consulta="SELECT * FROM tienda_ropa WHERE marca = 'nike'" ;

    // 3) Ejecutar la orden y obtenemos los registros

  $datos= mysqli_query($conexion, $consulta);
    // 4) Mostrar los datos del registro
    while ( $reg = mysqli_fetch_array($datos) ) { ?>
        <tr>
        <td><?php echo $reg['id']; ?></td>
        <td><?php echo $reg['tipo_de_prenda']; ?></td>
        <td><?php echo $reg['marca']; ?></td>
        <td><?php echo $reg['talle']; ?></td>
        <td><?php echo $reg['precio']; ?></td>
        </tr>
    <?php } ?>
    </table>
</body>
</html>