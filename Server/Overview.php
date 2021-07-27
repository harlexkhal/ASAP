<?php
    session_start();
	require_once 'Dependencies.php';

	echo json_encode(array($_SESSION['UserId'], $_SESSION['FullName']));
?>