<!DOCTYPE html>
<html lang="en">

<head>
    <!-- basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- mobile metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1">
    <!-- site metas -->
    <title>Potrero Libre</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- bootstrap css -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <!-- style css -->
    <link rel="stylesheet" href="css/style.css">
    <!-- Responsive-->
    <link rel="stylesheet" href="css/responsive.css">
    <!-- fevicon -->
    <link rel="icon" href="images/fevicon.png" type="image/gif" />
    <!-- Scrollbar Custom CSS -->
    <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
    <!-- Tweaks for older IEs-->
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
        media="screen">
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
</head>
<!-- body -->

<body class="main-layout footer_to90 contact_page">
    <!-- loader  -->
    <div class="loader_bg">
        <div class="loader"><img src="images/loading.gif" alt="#" /></div>
    </div>
    <!-- end loader -->
    <!-- header -->
    <header>
        <!-- header inner -->
        <div class="header">
            <div class="header_top d_none1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <ul class="conta_icon">
                                <li><a href="#"><img src="images/call.png" alt="#" />Call us: 0126 - 922 - 0162</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul class="social_icon">
                                <li> <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                <li> <a href="#"> <i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <div class="se_fonr1">
                                <form action="#">
                                    <div class="select-box">
                                        <label for="select-box1" class="label select-box1"><span
                                                class="label-desc">English</span> </label>
                                        <select id="select-box1" class="select">
                                            <option value="Choice 1">English</option>
                                            <option value="Choice 1">Falkla</option>
                                            <option value="Choice 2">Germa</option>
                                            <option value="Choice 3">Neverl</option>
                                        </select>
                                    </div>
                                </form>
                                <span class="time_o"> Open hour: 8.00 - 18.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                            <nav class="navigation navbar navbar-expand-md navbar-dark ">
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarsExample04" aria-controls="navbarsExample04"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarsExample04">
                                     <ul class="navbar-nav mr-auto">
                                        <li class="nav-item ">
                                            <a class="nav-link" href="index.php">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="products.php">Products</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="admin.php">ADMIN</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- end header inner -->
    <!-- end header -->
    <!-- banner -->
    <div class="blue_bg">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="titlepage">
                        <h2>Administrador</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="form-table">
        <div id="contact" class="contact" style="width:50%">
            <div class="con_bg">
                <div class="container">
                    <h2 style="font-weight:bold; text-align:center; margin-bottom:2rem">Agregar</h2>
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <form id="request" class="main_form"  method="POST" action="agregar.php" enctype="multipart/form-data">
                                <div class="row">
                                    <div class="col-md-6 col-sm-6">
                                        <input class="contactus" placeholder="Type" type="type" name="tipo_de_prenda" required>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <input class="contactus" placeholder="Mark" type="type" name="marca" required>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <input class="contactus" placeholder="Size" type="type" name="talle" required>
                                    </div>
                                    <div class="col-md-6 col-sm-6">
                                        <input class="contactus" placeholder="Price" type="type" name="precio" required>
                                    </div>
                                    <div class="col-md-12">
                                         <input type="file" name="imagen" placeholder="imagen" required>
                                    </div>
                                    <div class="col-md-12">
                                        <input class="send_btn" type="submit" name="submit" value="Submit">
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="table" style="width:50%; overflow:scroll; height:70vh">
            <table class="table table-striped table-hover" style="width:90%">
                <thead style="position: sticky">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Type</th>
                        <th scope="col">Mark</th>
                        <th scope="col">Size</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        // 1) Conexion
                    $conexion = mysqli_connect("localhost", "root", "");
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
                        // 4) Mostrar los datos del registro
                        while ( $reg = mysqli_fetch_array($datos) ) { ?>
                            <tr>
                                <td  scope="row"><?php echo $reg['id']; ?></td>
                                <td><?php echo $reg['tipo_de_prenda']; ?></td>
                                <td><?php echo $reg['marca']; ?></td>
                                <td><?php echo $reg['talle']; ?></td>
                                <td><?php echo $reg['precio']; ?></td>
                                <td> <img src="data:image/jpg;base64, <?php echo base64_encode($reg['imagen'])?>" alt="" width="70px" height="70px"/></td>
                                <td><a href="modificar.php?id=<?php echo $reg['id'];?>"><span class="fa-light fa-pen-to-square"></i>Editar</a></td>
                                <td><a href="borrar.php?id=<?php echo $reg['id'];?>"><span class="fa-solid fa-trash"></i>Borrar</a></td>
                            </tr>
                        <?php } ?>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Javascript files-->
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery-3.0.0.min.js"></script>
    <!-- sidebar -->
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/custom.js"></script>
</body>

</html>