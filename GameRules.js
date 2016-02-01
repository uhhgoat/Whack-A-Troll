document.addEventListener('contextmenu', function(e) {e.preventDefault(); } ) ;
window.addEventListener("keydown", checkKeysDown, false);
window.addEventListener("keyup", checkKeysUp, false);

TROLL = "troll.png" ;
HORN_TROLL = "horn-troll.png" ;
MEXICAN_TROLL = "mexican-troll.png" ;
JOKER_TROLL = "joker-troll.png" ;
FEMALE_TROLL = "female-troll.png" ;
FANCY_TROLL = "fancy-troll.png" ;

function induction()
{
	roundOver = false ;
	theUnload() ;
	randY = parseInt(Math.random()*500 + 101) ;
	randX = parseInt(Math.random()*700 + 1) ;
	clock = 0 ;
	ctrlbtn = false ;
	spacebtn = false ;
	levelnum = document.getElementById("levelnumber") ;
	levelnum.innerHTML = "Level " + level ;
	numTrolls = 0 ;
	score = 0 ;
	box = document.getElementById("gamebox") ;
	sourceName = "troll.png" ;
	srcRand = parseInt((Math.random*100) + 1) ;
	speedSet() ;
	clockTime() ;
}
function theUnload()
{
	//if(roundOver == false)
	//	window.onbeforeunload = function(){ return 'Leaving will lose your progress on this level.';}
	//else
	//	window.onbeforeunload = function(){ return ;}
}
function speedSet()
{
	if(level <= 2)
	{
		speed = 1250 ;
	}
	if(level > 2 && level <= 4)
	{
		speed = 1000 ;
	}
	if(level > 4 && level <= 6)
	{
		speed = 1250 ;
	}
	if(level > 6 && level <= 9)
	{
		speed = 1000 ;
	}
	if(level > 9 && level <= 12)
	{
		speed = 1250 ;
	}
	if(level > 12 && level <= 14)
	{
		speed = 1000 ;
	}
	if(level > 14 && level <= 17)
	{
		speed = 1250 ;
	}
	if(level > 17 && level <= 20)
	{
		speed = 900 ;
	}
}
//TIMER FOR SPEED INCREASE
function clockTime()
{
	setInterval('checkTime()', 1000) ;
}
function checkTime()
{
	clock++
	playGame() ;
}

function addTrolls()
{
	levelConditions() ;
	theimg = document.createElement("img") ;
	box.appendChild(theimg) ;
	theimg.src = sourceName ;
	theimg.style.position = "absolute" ;
	theimg.style.top = randY + "px" ;
	theimg.style.left = randX + "px" ;
	checkEventStyle() ;
	if(sourceName == FEMALE_TROLL)
	{
		att.value = "hitFemale() ;" ;
	}
	else
		if(sourceName == JOKER_TROLL)
		{
			att.value = "hitJoker(this) ;" ;
		}
		else
			if(sourceName == FANCY_TROLL)
			{
				att.value = "hitFancy(this) ;" ;
			}
			else
				att.value = "removeTrolls(this) ;" ;
	theimg.setAttributeNode(att) ;
	speed -= 10 ;
	randY = parseInt(Math.random()*500 + 101) ;
	randX = parseInt(Math.random()*700 + 1) ;
	srcRand = parseInt((Math.random()*100) + 1) ;
	numTrolls++ ;
	checkLoseGame() ;
	checkEndRound() ;
}


function hitFemale()
{
	alert("You hit a female! You lose!") ;
	window.location = "index.php" ;
	roundOver = true ;
	theUnload() ;
}
function checkLoseGame()
{
	if(numTrolls >= loseThreshold)
	{
		alert("Overrun by Trolls! You lose!") ;
		window.location = "index.php" ;
		roundOver = true ;
		theUnload() ;
	}
}
function endRound()
{
	alert("Round Over!") ;
	roundOver = true ;
	theUnload() ;
	window.location.href = "index.php?level=" + level ;
}
function checkEndRound()
{
	if(speed < 500)
	{
		clearInterval(interval) ;
		setTimeout("endRound()", 500) ;
	}
}
function checkEventStyle()
{
	if(sourceName == TROLL)
	{
		att = document.createAttribute("onclick") ;
	}
	if(sourceName == HORN_TROLL)
	{
		att = document.createAttribute("ondblclick") ;
	}
	if(sourceName == MEXICAN_TROLL)
	{
		att = document.createAttribute("oncontextmenu") ;
	}
	if(sourceName == JOKER_TROLL)
	{
		att = document.createAttribute("onclick") ;
	}
	if(sourceName == FEMALE_TROLL)
	{
		att = document.createAttribute("onclick") ;
	}
	if(sourceName == FANCY_TROLL)
	{
		att = document.createAttribute("onclick") ;
	}
}

function removeTrolls(currentTroll)
{
	currentTroll.src = "blank.png" ;
	currentTroll.style.height = "0px" ;
	currentTroll.style.width = "0px" ;
	numTrolls-- ;
	score += 20 ;
}
function hitJoker(currentTroll)
{
	if(ctrlbtn == true)
	{
		currentTroll.src = "blank.png" ;
		currentTroll.style.height = "0px" ;
		currentTroll.style.width = "0px" ;
		numTrolls-- ;
		score += 20 ;
	}
}
function hitFancy(currentTroll)
{
	if(spacebtn == true)
	{
		currentTroll.src = "blank.png" ;
		currentTroll.style.height = "0px" ;
		currentTroll.style.width = "0px" ;
		numTrolls-- ;
		score += 20 ;
	}
}

//KEYBOARD EVENTS
function checkKeysDown(key)
{
	if(key.keyCode == "32")
	{
		spacebtn = true ;
	}
	if(key.keyCode == "17")
	{
		ctrlbtn = true ;
	}
}
function checkKeysUp(key)
{
	if(key.keyCode == "32")
	{
		spacebtn = false ;
	}
	if(key.keyCode == "17")
	{
		ctrlbtn = false ;
	}
}
function levelConditions()
{
	if(level == 1)
	{
		sourceName = TROLL ;
		loseThreshold = 7 ;
	}
	if(level == 2)
	{
		if(srcRand <= 20)
			sourceName = HORN_TROLL ;
		else
			sourceName = TROLL ;
		loseThreshold = 7 ;
	}
	if(level == 3)
	{
		if(srcRand <= 40)
			sourceName = HORN_TROLL ;
		else
			sourceName = TROLL ;
		loseThreshold = 6 ;
	}
	if(level == 4)
	{
		if(srcRand <= 60)
			sourceName = HORN_TROLL ;
		else
			sourceName = TROLL ;
		loseThreshold = 6 ;
	}
	if(level == 5)
	{
		if(srcRand <= 20)
			sourceName = HORN_TROLL ;
		if(srcRand > 20 && srcRand <= 40)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 40)
			sourceName = TROLL ;
		loseThreshold = 9 ;
	}
	if(level == 6)
	{
		if(srcRand <= 30)
			sourceName = HORN_TROLL ;
		if(srcRand > 30 && srcRand <= 60)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 60)
			sourceName = TROLL ;
		loseThreshold = 8 ;
	}
	if(level == 7)
	{
		if(srcRand <= 35)
			sourceName = HORN_TROLL ;
		if(srcRand > 35 && srcRand <= 70)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 70)
			sourceName = TROLL ;
		loseThreshold = 7 ;
	}
	if(level == 8)
	{
		if(srcRand <= 40)
			sourceName = HORN_TROLL ;
		if(srcRand > 40 && srcRand <= 80)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 80)
			sourceName = TROLL ;
		loseThreshold = 6 ;
	}
	if(level == 9)
	{
		if(srcRand <= 45)
			sourceName = HORN_TROLL ;
		if(srcRand > 45 && srcRand <= 90)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 90)
			sourceName = TROLL ;
		loseThreshold = 5 ;
	}
	if(level == 10)
	{
		if(srcRand <= 20)
			sourceName = HORN_TROLL ;
		if(srcRand > 20 && srcRand <= 40)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 40 && srcRand <= 60)
			sourceName = JOKER_TROLL ;
		if(srcRand > 60)
			sourceName = TROLL ;
		loseThreshold = 9 ;
	}
	if(level == 11)
	{
		if(srcRand <= 25)
			sourceName = HORN_TROLL ;
		if(srcRand > 25 && srcRand <= 50)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 50 && srcRand <= 75)
			sourceName = JOKER_TROLL ;
		if(srcRand > 75)
			sourceName = TROLL ;
		loseThreshold = 8 ;
	}
	if(level == 12)
	{
		if(srcRand <= 30)
			sourceName = HORN_TROLL ;
		if(srcRand > 30 && srcRand <= 60)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 60 && srcRand <= 90)
			sourceName = JOKER_TROLL ;
		if(srcRand > 90)
			sourceName = TROLL ;
		loseThreshold = 7 ;
	}
	if(level == 13)
	{
		if(srcRand <= 15)
			sourceName = HORN_TROLL ;
		if(srcRand > 15 && srcRand <= 30)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 30 && srcRand <= 45)
			sourceName = JOKER_TROLL ;
		if(srcRand > 45 && srcRand <= 60)
			sourceName = FEMALE_TROLL ;
		if(srcRand > 60)
			sourceName = TROLL ;
		loseThreshold = 8 ;
	}
	if(level == 14)
	{
		if(srcRand <= 20)
			sourceName = HORN_TROLL ;
		if(srcRand > 20 && srcRand <= 40)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 40 && srcRand <= 60)
			sourceName = JOKER_TROLL ;
		if(srcRand > 60 && srcRand <= 80)
			sourceName = FEMALE_TROLL ;
		if(srcRand > 80)
			sourceName = TROLL ;
		loseThreshold = 7 ;
	}
	if(level == 15)
	{
		if(srcRand <= 22)
			sourceName = HORN_TROLL ;
		if(srcRand > 22 && srcRand <= 44)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 44 && srcRand <= 66)
			sourceName = JOKER_TROLL ;
		if(srcRand > 66 && srcRand <= 88)
			sourceName = FEMALE_TROLL ;
		if(srcRand > 88)
			sourceName = TROLL ;
		loseThreshold = 6 ;
	}
	if(level == 16)
	{
		if(srcRand <= 12)
			sourceName = HORN_TROLL ;
		if(srcRand > 12 && srcRand <= 24)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 24 && srcRand <= 36)
			sourceName = JOKER_TROLL ;
		if(srcRand > 36 && srcRand <= 48)
			sourceName = FEMALE_TROLL ;
		if(srcRand > 48 && srcRand <= 60)
			sourceName = FANCY_TROLL ;
		if(srcRand > 60)
			sourceName = TROLL ;
		loseThreshold = 9 ;
	}
	if(level == 17)
	{
		if(srcRand <= 15)
			sourceName = HORN_TROLL ;
		if(srcRand > 15 && srcRand <= 30)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 30 && srcRand <= 45)
			sourceName = JOKER_TROLL ;
		if(srcRand > 45 && srcRand <= 60)
			sourceName = FEMALE_TROLL ;
		if(srcRand > 60 && srcRand <= 75)
			sourceName = FANCY_TROLL ;
		if(srcRand > 75)
			sourceName = TROLL ;
		loseThreshold = 8 ;
	}
	if(level == 18)
	{
		if(srcRand <= 20)
			sourceName = HORN_TROLL ;
		if(srcRand > 20 && srcRand <= 40)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 40 && srcRand <= 60)
			sourceName = JOKER_TROLL ;
		if(srcRand > 60 && srcRand <= 80)
			sourceName = FEMALE_TROLL ;
		if(srcRand > 80 && srcRand <= 90)
			sourceName = FANCY_TROLL ;
		if(srcRand > 90)
			sourceName = TROLL ;
		loseThreshold = 7 ;
	}
	if(level == 19)
	{
		if(srcRand <= 10)
			sourceName = HORN_TROLL ;
		if(srcRand > 10 && srcRand <= 32)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 32 && srcRand <= 54)
			sourceName = JOKER_TROLL ;
		if(srcRand > 54 && srcRand <= 76)
			sourceName = FEMALE_TROLL ;
		if(srcRand > 76 && srcRand <= 98)
			sourceName = FANCY_TROLL ;
		if(srcRand > 98)
			sourceName = TROLL ;
		loseThreshold = 6 ;
	}
	if(level == 20)
	{
		if(srcRand <= 10)
			sourceName = HORN_TROLL ;
		if(srcRand > 10 && srcRand <= 20)
			sourceName = MEXICAN_TROLL ;
		if(srcRand > 20 && srcRand <= 40)
			sourceName = JOKER_TROLL ;
		if(srcRand > 40 && srcRand <= 65)
			sourceName = FEMALE_TROLL ;
		if(srcRand > 65 && srcRand <= 90)
			sourceName = FANCY_TROLL ;
		if(srcRand > 90)
			sourceName = TROLL ;
		loseThreshold = 5 ;
	}
}

function playGame()
{
	if(clock == 1)
	{
		interval = setInterval('addTrolls()', speed) ;
	}
	if(clock == 5)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 10)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 15)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 20)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 25)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 30)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 35)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 40)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 45)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 50)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 55)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
	if(clock == 60)
	{
		clearInterval(interval) ;
		interval = setInterval('addTrolls()', speed) ;
		
	}
}