<?php
  //Get Heroku ClearDB connection information
  $cleardb_url = parse_url(getenv("CLEARDB_DATABASE_URL"));
  $cleardb_server = $cleardb_url["host"];
  $cleardb_username = $cleardb_url["user"];
  $cleardb_password = $cleardb_url["pass"];
  $cleardb_db = substr($cleardb_url["path"],1);
  $active_group = 'default';
  $query_builder = TRUE;

  $Connection = new mysqli($cleardb_server, $cleardb_username, $cleardb_password, $cleardb_db);
  if ($Connection->connect_error) die("Failed Fatal Error");

$Sql= "DROP DATABASE Asap";
  if($Connection->query($Sql)===true){ echo "Database Refreshing......<br/>";}

$Sql= "CREATE DATABASE Asap";

  if($Connection->query($Sql)===true){ echo "Database created successfully";}
  else { echo "Error creating database: " . $Connection->error;}

$Connection->close();
?>