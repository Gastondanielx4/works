 <?php
    session_start();
    // 1) Conexion
    $conexion = mysqli_connect("127.0.0.1", "root", "");
    mysqli_select_db($conexion, "potrero");

    // Almacenamos los datos del envio GET
    // Generar variables para el id a utilizard

    $id = $_GET['id'];

    // 2) Preparar la orden SQL
    // Sintaxis SQL SELECT
    // SELECT * FROM nombre_tabla
    // => Selecciona todos los campos de la siguiente tabla
    // SELECT campos_tabla FROM nombre_tabla
    // => Selecciona los siguientes campos de la siguiente tabla
    $consulta="SELECT * FROM ropa WHERE id=$id";

    // 3) Ejecutar la orden y obtenemos los registros
    $datos= mysqli_query($conexion, $consulta);
?>

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

<body class="main-layout footer_to90 project_page">
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
            <div class="header_midil">
                <div class="container">
                    <div class="row d_flex">
                        <div class="col-md-4">
                            <ul class="conta_icon d_none1">
                                <li><a href="#"><img src="images/email.png" alt="#" /> demo@gmail.com</a> </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <a class="logo" href="#"></a>
                        </div>
                        <div class="col-md-4">
                            <ul class="right_icon d_none1">
                                <li><a href="#"><img src="images/shopping.png" alt="#" /></a> </li>
                                <a href="#" class="order">Order Now</a>
                            </ul>
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
                                        <li class="nav-item active">
                                            <a class="nav-link" href="products.php">Products</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="admin.php">ADMIN</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="login.php">Cerrar Sesion</a>
                                        </li>
                                    </ul>
                                    <ul>
                                     <li class="nav-item">
                                            <a class="nav-link" href="closeLogin.php">Cerrar Sesion</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="col-md-4">
                            <div class="search">
                                <form action="/action_page.php">
                                    <input class="form_sea" type="text" placeholder="Search" name="search">
                                    <button type="submit" class="seach_icon"><i class="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- end header inner -->
    <!-- end header -->
    <!-- project section -->
    <div id="project" class="project">
        <div class="container">


            <div class="row">
                <div class="product_main">
                     <?php
                            // 4) el while recorre todos los registros y genera una CARD PARA CADA UNA
                            while ($reg = mysqli_fetch_array($datos)) {?>
                                <div className="div-one-book" style="display:flex">
                                    <div>
                                        <img
                                            style="height:30rem; width:30rem; margin-right:2rem"
                                            src="data:image/jpg;base64, <?php echo base64_encode($reg['imagen'])?>"
                                            alt=""
                                        />
                                    </div>
                                    <div style="display:flex; justify-content:flex-end; align-items:center">
                                        <div className="info-one-book" style="align-content:flex-end;">
                                        <h2 style= "marginTop:1rem"> Tipo de prenda: <?php echo ucwords($reg['tipo_de_prenda']) ?></h2>
                                        <h2 style= "marginTop:1rem">Marca: <?php echo ucwords($reg['marca']) ?></h2>
                                        <p><?php echo ucwords($reg['tipo_de_prenda']) ?>
                                            <?php echo ucwords($reg['marca']) ?>
                                        </p>
                                        <div style="display:flex;">
                                            <p style="margin-right:0.5rem">Precio: $
                                                <?php echo $reg['precio']; ?>
                                            </p>
                                        </div>
                                            <a style="margin:2rem 0;" href="<?php echo ucwords($reg['link_pago']) ?>" class="btn btn-primary">Buy</a>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>

                    <div class="col-md-12">
                        <a class="read_more" href="products.php">Volver atras</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end project section -->
    <!--  footer -->
    <footer>
        <div class="footer">
            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <p>© 2019 All Rights Reserved. Design by<a href="https://html.design/"> Free Html
                                    Templates</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- end footer -->
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