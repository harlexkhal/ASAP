
<!DOCTYPE html>
<html>
  <head>
    <title>Setting up database</title>
  </head>
  <body>

    <h3>Setting up...</h3>
<?php 
  require_once 'Dependencies.php';

  DestroySession();

  CreateTable( 'UserInfo',
                 'UserId VARCHAR(255),
			            FullName VARCHAR(255),
			            Email VARCHAR(255),
			            Password VARCHAR(255),
					    Country VARCHAR(20),
						TradeName VARCHAR(100),
						Ref VARCHAR(100),
                  EWallet DECIMAL(10,2)');

  CreateTable( 'EmailConfirmation',
                 'RandomKey VARCHAR(512),
			            UserId VARCHAR(255),
			          	FullName VARCHAR(255),
			          	Email    VARCHAR(255),
						Country VARCHAR(20),
						TradeName VARCHAR(100),
						Ref VARCHAR(100),
                  Password VARCHAR(255)');
?>

 <br>...done.
  </body>
</html>
