<?php
       session_start();
       require_once 'Dependencies.php';

       header("Content-Type: application/json; charset=UTF-8");
       $UserInfo=json_decode($_POST["x"], false);

	   $FullName = $UserInfo->FullName;
       $UserId =   md5($UserInfo->Email);
       $Password = password_hash($UserInfo->Password,PASSWORD_DEFAULT); #Default Password used
       $Email =    $UserInfo->Email;
	   $Country =    $UserInfo->Country;
	   $AsapInfo = $UserInfo->AsapInfo;
	   $TradeName = $UserInfo->TradeName;
	   $Ref =      $UserInfo->Ref;

	   $GenerateKey= rand();
	   $ConfirmationKey = password_hash($GenerateKey,PASSWORD_DEFAULT);

      $Err_Info='';
      $ResponseCheck = array('Email'=>true, 'Password'=>true, 'FullName'=>true);
      $ResponseCheck_Info= array('Email'=>'', 'Password'=>'', 'FullName'=>'');
	  $EmailANDKey= array('Email'=>$Email, 'key'=>$ConfirmationKey);
      #-----First Phase of the check, checking if Username or Email contain values in them-----
     if(empty($Email) || empty($Password) || empty($FullName) || empty($AsapInfo)){
      $Err_Info = "Please, compulsory fields cannot be left empty";
	  $ResponseCheck['Email']=false;
	  $ResponseCheck['Password']=false;
	  $ResponseCheck['FullName']=false;
	  $ResponseCheck['LastName']=false;
	  $ResponseCheck['Phone']=false;
      $ResponseCheck_Info['Email'] = $Err_Info;
	  $ResoponseChek_Info['Password'] = $Err_Info;
	  $ResponseCheck_Info['FullName'] = $Err_Info;
	  $ResponseCheck_Info['Phone'] = $Err_Info;

	  echo json_encode(array($ResponseCheck,$ResponseCheck_Info));
	  return;
     }

       else{
        if (!preg_match("/^[a-zA-Z\s]*$/",$FullName)) {
            $Err_Info = "Only letters allowed";
			$ResponseCheck_Info['FullName'] = $Err_Info;
			$ResponseCheck['FullName']=false;}

	    if (!filter_var($Email, FILTER_VALIDATE_EMAIL)){
               $Err_Info = "Invalid Email format";
			   $ResponseCheck_Info['Email'] = $Err_Info;
			   $ResponseCheck['Email']=false;}  
       }
	           
       if($ResponseCheck['Email']==false || $ResponseCheck['FullName']==false){
	       echo json_encode(array($ResponseCheck,$ResponseCheck_Info));
		   return;}

	   else{
	       #----Second Phase of the check, checking if Username or Email Exist in Database Already----
	       $DbEmail =    $Connection->query("SELECT * FROM UserInfo WHERE Email='$Email'");
	      
		  if ($DbEmail->num_rows){
	           $Err_Info = 'The Email has already been used by another user';
	           $ResponseCheck_Info['Email'] = $Err_Info;
	           $ResponseCheck['Email']=false;}
		  	 
	      if($ResponseCheck['Email']==false){
	             echo json_encode(array($ResponseCheck,$ResponseCheck_Info));
				 return;}
		 
          else
		  {   
		    $Sql="SELECT * FROM EmailConfirmation WHERE Email= '$Email'";
	        $Result=$Connection->query($Sql);
	        if($Result->num_rows)
	        {
	           $Err_Info = 'The email has already been used.';
	           $ResponseCheck_Info['Email'] = $Err_Info;
	           $ResponseCheck['Email']=false;
			   echo json_encode(array($ResponseCheck,$ResponseCheck_Info));
			    return;
	        }

			else
			{
			   $Sql = "INSERT INTO EmailConfirmation (RandomKey, UserId, FullName, Email, Country, TradeName, Ref, Password) 
               VALUES ('$ConfirmationKey', '$UserId' ,'$FullName', '$Email', '$Country', '$TradeName', '$Ref', '$Password')";
		       $Connection->query($Sql);
		       echo json_encode(array($ResponseCheck,$ResponseCheck_Info,$EmailANDKey));
		       return;
			}
          }
	  }
	

	 
?>
