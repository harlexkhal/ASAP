<?php
  session_start();
  	require_once 'Dependencies.php';
	header("Content-Type: application/json; charset=UTF-8");
	$UserInfo=json_decode($_POST["x"], false);


     $Email =     $UserInfo->Email;
     $Password =  $UserInfo->Password;

     $Authentication = array('Check'=>true,'Info'=>'');

	 if(empty($Email) || empty($Password)){
	  $Authentication['Check']= false;
	  $Authentication['Info']= "Please, compulsory fields cannot be left empty";
	  echo json_encode($Authentication);
	  return;
     }
	
	if ($Authentication['Check']==true) {
	#---Second phase of the check-> checking if Username matches the Password---
	    
		$DbAuthentication = $Connection->query("SELECT * FROM UserInfo WHERE Email = '$Email'");

		if($DbAuthentication->num_rows)
		{
			$Fetch = $DbAuthentication->fetch_array(MYSQLI_ASSOC);
			$Hash = $Fetch['Password'];

			if (!password_verify($Password, $Hash)){
				 $Authentication['Check']=false;
				 $Authentication['Info']= "Incorrect password";
				 echo json_encode($Authentication);
				 return;
			}

			else {
				 $_SESSION['UserId'] = $Fetch["UserId"];
				 $_SESSION['FullName'] = $Fetch["FullName"];

				echo json_encode($Authentication);
				return;
			}
	    }

		else 
		{
		   $Authentication['Check']=false;
	       $Authentication['Info']= "Incorrect email";
		   echo json_encode($Authentication);
		}
	}
?>