<?php

ini_set( 'session.cookie_secure', 1 );

session_start(); //gets session id from cookies, or prepa

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
<?php

if (session_id() == '' || !isset($_SESSION['login'])) { //if sid exists and login for sid exists
  
?>

<a href="login.php" class="btn btn-primary">Login</a>
  
<?php

} else {

?>
<h2> Hi,  <?php echo $_SESSION['login']; ?> </h2>
<a href="logout.php" class="btn btn-primary">Logout</a>

<?php 

}

?>
</div>
</div>
</div>
</body>
</html>