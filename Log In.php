<?php
	session_start() ;
?>
<!DOCTYPE HTML>
<!--Matyas Fenyves-->
<html>
	<head>
		<title>Log In</title>
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
		<div>Please enter your username and password to sign in.</div>
		<br />
		<form method = "post" action = "index.php" >
			Email: <input type = "text" name = "email" />
			<br />
			Password: <input type = "password" name = "password" />
			<br />
			<input type = "submit" value = "Log In" />
		</form>
		<br />
		<hr />
		<br />
		<div>Or sign up now to save progress and data on your game.</div>
		<br />
		<form method = "post" action = "RegisterConfirm.php" >
			Create Username: <input type = "text" name = "createusername" />
			<br />
			Create Password: <input type = "password" name = "createpassword" />
			<br />
			Email: <input type = "text" name = "createemail" />
			<br />
			<input type = "submit" />
		</form>
	</body>
</html>