<?php
	session_start() ;
?>
<!DOCTYPE HTML>
<!--Matyas Fenyves-->
<html>
	<head>
		<title>Level 4</title>
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
		level = 14 ;
		
		</script>
	</head>
	<body onload = "induction() ;">
		<audio preload = "auto" loop autoplay>
			<source src="The Troll song (Full Song).m4a" type="audio/mpeg" autoplay = "true">
		</audio>
		<br />
		<h1 id = "levelnumber">Level #</h1>
		<br /><br /><br /><br /><br />
		<div id = "gamebox"></div>
		<br />
		<a href = "index.php"><button id = "backbtn">Back</button></a>
	</body>
	<script>
		alert("If 7 Trolls appear on screen, you will lose! Good Luck!") ;
	</script>
</html>