<?php
  if (isset($_POST)) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];
    $domain= $_SERVER["HTTP_HOST"];
    $to = "tochircentral@gmail.com";
    $subject = "Contacto desde el formulario del sitio $domain: $subject";
    $message = "
    <p>
      Datos enviados desde el formulario del sitio <b> $domain </b>
      <p>
      <ul>
       <li> Nombre: <b> $name </b></li>
       <li> Email: <b> $email </b></li>
       <li> Asunto: $subject </li>
       <li> Comentarios:  $subject </li>
       </ul>
    ";
    $headers = "MIME-Version: 1.0 \r\n" . "Content-Type: text/html; charset =utf-8\r\n" . "From: Envío Automático No Responder <no-reply@domain>";
    mail($to, $subject, $message, $headers);

  }

?>
