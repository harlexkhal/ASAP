<?php
    session_start();
	require_once 'Dependencies.php';

    $Key= $_GET['ConfirmationKey'];
    $Sql = "SELECT * FROM EmailConfirmation WHERE RandomKey = '$Key'";

    $Result=$Connection->query($Sql);

	if(!$Result->num_rows)
	    header("Location: #"); #link to 404 Error the link has Expired page info.

    $Row  = $Result->fetch_array(MYSQLI_ASSOC);
   
    $UserId    =   $Row['UserId'];
	$FullName =    $Row['FullName'];
	$Email  =      $Row['Email'];
    $Password  =   $Row['Password'];
    $Country     = $Row['Country'];
	$TradeName =   $Row['TradeName'];
    $Ref =         $Row['Ref'];
    
    $ECash = 0.01;
    $Sql = "INSERT INTO  UserInfo (UserId, FullName, Email, Password, Country, TradeName, Ref, EWallet) 
                    VALUES ('$UserId' ,'$FullName', '$Email', '$Password', '$Country', '$TradeName', '$Ref', $ECash)";
                    $Connection->query($Sql);

    $Sql= "DELETE FROM EmailConfirmation WHERE RandomKey = '$Key'";
	 $Connection->query($Sql);

	 $_SESSION['FullName'] = $FullName;
     $_SESSION['UserId'] = $UserId;
     
	header("Location: ../Client/docs/overview.html"); //<---Link to Set password page--->
?>
