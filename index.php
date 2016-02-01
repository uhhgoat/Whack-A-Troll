<?php
	session_start() ;
?>
<!DOCTYPE HTML>
<!--Matyas Fenyves-->
<html>
	<head>
		<title>Whack-a-Troll</title>
		<style>
			div.Rules
			{
				margin-right: 10% ;
				margin-left: 10% ;
				text-align: justify ;
				font-size: 15pt ;
			}
			b
			{
				text-align: center ;
				font-size: 15pt ;
			}
			body
			{
				text-align: center ;
				background-color: #66FFCC ;
			}
			button
			{
				width: 125px ;
				height: 80px ;
				font-size: 40pt ;
				background-color: #CC99FF ;
				border-color: #CC99FF ;
			}
			table
			{
				margin: auto ;
			}
			h1
			{
				font-size: 50pt ;
			}
			h2
			{
				font-size: 30pt ;
			}
			h3
			{
				font-size: 25pt ;
			}
			h4
			{
				font-size: 15pt ;
			}
			a#ricktroll
			{
				color: #66FFCC ;
			}
		</style>
		<script>
			
		</script>
	</head>
	<?php
		
		if(array_key_exists('email', $_POST) && array_key_exists('password', $_POST))
		{
			$email = $_POST['email'];
			$password = $_POST['password'];
			
		}
		else
		{
			if(array_key_exists('email', $_SESSION) && array_key_exists('password', $_SESSION))
			{
				$email = $_SESSION['email'];
				$password = $_SESSION['password'];
				
			}
			else
			{
				$email = "guest" ;
				$password = "guest" ;
			}
		}
		$_SESSION["email"] = $email ;
		$_SESSION["password"] = $password ;
		$_SESSION["host"] = "localhost" ;
		$_SESSION["db"] = "mocktrol_troll" ;
		$_SESSION["un"] = "mocktrol_mock" ;
		$_SESSION["pw"] = "fen6pety" ;
		$hostname = $_SESSION["host"] ;
		$dbname = $_SESSION["db"] ;
		$uname = $_SESSION["un"] ;
		$pword = $_SESSION["pw"] ;
		
		$conn = new PDO("mysql:host=".$hostname.";dbname=".$dbname, $uname, $pword) ;
		$cmd = "SELECT username, level FROM accounts WHERE (email LIKE '$email') AND (password LIKE '$password') ;" ;
		$statement = $conn->prepare($cmd) ;
		$signedIn = $statement->execute() ;
		$currentuser = $statement->fetchAll() ;
		if($currentuser == null)
			$currentuser[0][0] = "guest" ;
		
		$level = $_GET['level'] ;
		if($level == null)
		{
			if($currentuser == null)
			{
				$level = 0 ;
			}
			else
			{
				$level = $currentuser[0][1];
			}
		}
		$conn2 = new PDO("mysql:host=".$hostname.";dbname=".$dbname, $uname, $pword) ;
		$cmd2 = "UPDATE accounts SET level = '$level' WHERE (email LIKE '$email') AND (password LIKE '$password') ;" ;
		$statement2 = $conn2->prepare($cmd) ;
		$statement2->execute() ;
	?>
	<body>
		<audio preload = "auto" loop autoplay>
			<source src="The Alan Parsons Project - I Wouldn't Want To Be Like You.m4a" type="audio/mpeg" autoplay = "true">
		</audio>
		<h1>Whack-a-Troll</h1>
		<h2>A game of speed and not much intelligence.</h2>
		<h3>Current User: <?php echo $currentuser[0][0] ; ?> </h3>
		<a id = "ricktroll" href = "Rick Troll.html"><img src = "dancing-troll.gif" /></a>
		<a href = "Log In.php"><h4>Log In/Register</h4></a>
		<hr /><br />
		<!--Rules-->
		<b>Game Rules:</b> <br />
		<div class = "Rules">
			The object of the game is to hit all of the Trolls you see on screen with the mouse. 
			You cannot let the Trolls take over your page. They will keep coming for a time until they are demoralized. 
			They will come faster and with stronger Trolls as you progress through levels. If you let too many Trolls onto your screen, 
			you lose. You need to pass a level before continuing to the next. If you fail a level, you will be kicked back to level 1!
		</div>
		<br />
		<hr />
		<h3>Level Select</h3>
		<div class = "Levels">
			<table>
				<tr>
					<td><a href = "Level 1.php"><button id = "button1">1</button></a></td>
					<td><a href = "Level 2.php"><button id = "button2">2</button></a></td>
					<td><a href = "Level 3.php"><button id = "button3">3</button></a></td>
					<td><a href = "Level 4.php"><button id = "button4">4</button></a></td>
					<td><a href = "Level 5.php"><button id = "button5">5</button></a></td>
				</tr>
				<tr>
					<td><a href = "Level 6.php"><button id = "button6">6</button></a></td>
					<td><a href = "Level 7.php"><button id = "button7">7</button></a></td>
					<td><a href = "Level 8.php"><button id = "button8">8</button></a></td>
					<td><a href = "Level 9.php"><button id = "button9">9</button></a></td>
					<td><a href = "Level 10.php"><button id = "button10">10</button></a></td>
				</tr>
				<tr>
					<td><a href = "Level 11.php"><button id = "button11">11</button></a></td>
					<td><a href = "Level 12.php"><button id = "button12">12</button></a></td>
					<td><a href = "Level 13.php"><button id = "button13">13</button></a></td>
					<td><a href = "Level 14.php"><button id = "button14">14</button></a></td>
					<td><a href = "Level 15.php"><button id = "button15">15</button></a></td>
				</tr>
				<tr>
					<td><a href = "Level 16.php"><button id = "button16">16</button></a></td>
					<td><a href = "Level 17.php"><button id = "button17">17</button></a></td>
					<td><a href = "Level 18.php"><button id = "button18">18</button></a></td>
					<td><a href = "Level 19.php"><button id = "button19">19</button></a></td>
					<td><a href = "Level 20.php"><button id = "button20">20</button></a></td>
				</tr>
			</table>
		</div>
		<br />
		<hr />
		<br />
		<span>Created By: Matyas Fenyves</span>
		<br />
	</body>
	<script>
		btns = document.getElementsByTagName("button") ;
		for(i = 0 ; i < btns.length ; i ++)
		{
			btns[i].disabled = true ;
		}
		currLevel = <?php echo $level ; ?> ;
		for(a = 0 ; a < currLevel+1 ; a++)
		{
			btns[a].disabled = false ;
		}
	</script>
</html>