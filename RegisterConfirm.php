<?php
	session_start() ;
?>
<!DOCTYPE HTML>
<!--Matyas Fenyves-->
<html>
	<head>
		<title>Confirm Registration</title>
		<style>
			body
			{
				text-align: center ;
				font-size: 20pt ;
				background-color: #66FFCC ;
			}
		</style>
		<script>
			
		</script>
	</head>
	<body>
		<?php
			$username = $_POST['createusername'];
			$password = $_POST['createpassword'];
			$email = $_POST['createemail'];
			
			$hostname = "localhost" ;
			$dbname = "mocktrol_troll" ;
			$uname = "mocktrol_mock" ;
			$pword = "fen6pety" ;
			$conn = new PDO("mysql:host=".$hostname.";dbname=".$dbname, $uname, $pword) ;
			$cmd = "INSERT INTO accounts 
			(username, password, email, level) 
			VALUES ('$username', '$password', '$email', 0) ;" ;
			$statement = $conn->prepare($cmd) ;
			$statement->execute() ;
			
		?>
		<br /><br />
		<form method = "post" action = "Log In.php" >
			Your Username: <?php echo $username ; ?>
			<br />
			your Email: <?php echo $email ; ?>
			<br />
			<input type = "submit" value = "Confirm" />
		</form>
	</body>
</html>