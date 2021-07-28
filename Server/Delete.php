<?php
    session_start();
	require_once 'Dependencies.php';  

    $Sql= "DROP TABLE UserInfo";
	$Connection->query($Sql);

	$Sql= "DROP TABLE EmailConfirmation";
	$Connection->query($Sql);
?>
