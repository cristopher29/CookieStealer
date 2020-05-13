<?php 

function runIt() {
    $log = fopen("log.txt","r") or exit("Unable to open file!");
    while(! feof($log))  {
        $result = fgets($log);
        echo $result;
    }
    fclose($log);
}

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
    <h2>Cookies 🍪</h2>
    <textarea class="form-control" rows="20">
<?php

runIt();

?>
</textarea>
</div>
</div>
</div>
</body>

</html>