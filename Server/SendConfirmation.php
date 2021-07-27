<?php 
    session_start();
    require_once 'Dependencies.php';
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'PHPMailer/vendor/autoload.php';
    
	$Email= $_GET['Email'];
	$ConfirmationKey= $_GET['Key'];

	$Sql="SELECT * FROM EmailConfirmation WHERE Email= '$Email'";
	$Result=$Connection->query($Sql);
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 1;
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'harlexibeh04@gmail.com';
    $mail->Password = 'Nickelodeo';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;
    $mail->IsHTML(true);
    $mail->setFrom('harlexibeh04@gmail.com', 'ASAP-TEAM');
    $mail->addAddress("$Email",'New User'); 
    $mail->Subject = 'Signup Email Confirmation';
    $mail->Body    = "To complete registration on Asap  
					   <a href='http://asap-web.herokuapp.com/Server/EmailConfirmation.php?ConfirmationKey=$ConfirmationKey' style='color=white !important; text-decoration:none; padding:13px;'>
					   Click
					   </a>";

   if($mail->send())
   {
	   $Connection->query($Sql);
	   header("Location: ../Client/docs/MailSent.html");
   }
?>