<?php
	session_start() ;
?>
<!DOCTYPE HTML>
<!--Matyas Fenyves-->
<html>
	<head>
		<title>Level 3</title>
		<link type="text/css" rel="stylesheet" href="GameCSS.css" />
		<script type = "text/javascript" src = "GameRules.js"></script>
		<?php
			$email = $_SESSION["email"] ;
			$password = $_SESSION["password"] ;
			$hostname = $_SESSION["host"] ;
			$dbname = $_SESSION["db"] ;
			$uname = $_SESSION["un"] ;
			$pword = $_SESSION["pw"] ;
			
		?>
		<script>
		level = 13 ;
		
		</script>
	</head>
	<body onload = "induction() ;">
		<audio preload = "auto" loop autoplay>
			<source src="American Woman - The Guess Who.m4a" type="audio/mpeg" autoplay = "true">
		</audio>
		<br />
		<h1 id = "levelnumber">Level #</h1>
		<br /><br /><br /><br /><br />
		<div id = "gamebox"></div>
		<br />
		<a href = "index.php"><button id = "backbtn">Back</button></a>
	</body>
	<script>
		alert("Be careful! If you see a Female Troll, DO NOT CLICK IT. Females don't add to the number of Troll on screen. If 8 Trolls appear on screen, you will lose! Good Luck!") ;
	</script>
</html>