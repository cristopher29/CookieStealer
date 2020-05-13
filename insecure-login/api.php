<?php 


$log = fopen("log.txt","a+") or exit("Unable to open file!");

$data = json_decode(file_get_contents('php://input'), true);

fwrite($log, json_encode($data) .  "\n");
fwrite($log, "================================================== \n");
fclose($log);
?>