<?php
  $dbhost  = 'localhost';  
  $dbuser  = 'root';   
  $dbpass  = '';   

  $Connection = new mysqli($dbhost, $dbuser, $dbpass);
  if ($Connection->connect_error) die("Failed Fatal Error");

$Sql= "DROP DATABASE Asap";
  if($Connection->query($Sql)===true){ echo "Database Refreshing......<br/>";}

$Sql= "CREATE DATABASE Asap";

  if($Connection->query($Sql)===true){ echo "Database created successfully";}
  else { echo "Error creating database: " . $Connection->error;}

$Connection->close();
?>