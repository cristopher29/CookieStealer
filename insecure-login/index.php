<?php

ini_set('session.cookie_httponly', 1);

session_start();

?>

<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
 </head>
<body>
<div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
    <div class="col text-center">
<img src="./imgs/icon.png" width="100" class="img-responsive mb-5"/>

<?php

if (!isset($_SESSION['login'])) {
  
?>

<h2 class="mb-4"> No estas logueado :( </h2>
<a href="logs.php" class="btn btn-primary">Logs</a>
<a href="login.php" class="btn btn-primary">Login</a>
  
<?php

} else {

?>
<h2 class="mb-4"> Hola,  <?php echo $_SESSION['login']; ?> </h2>
<a href="logs.php" class="btn btn-primary">Logs</a>
<a href="logout.php" class="btn btn-primary">Logout</a>

<?php 

}

?>
</div>
</div>
</div>
</body>
</html>