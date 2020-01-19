// Player factory function

const playerFactory = (name, score) => {
	return { name, score };
}

let player1 = playerFactory('Player 1', 0);
let player2 = playerFactory('Player 2', 0);
let turn = 0;
let gameBoardArr = ["","","","","","","","",""];
player1.score = 0;
player2.score = 0;

updateScores();

function clickedSquare(clickedId) {
	
	let clkIdval = document.getElementById(clickedId).innerHTML;
	
	if (turn === 0) {
		alert("Press the PLAY button to start the game");
	}
	
	else if (turn === 1) {
		
			if (clkIdval === "") {
				turn = 2;
				gameBoardArr[clickedId] = "x";
				document.getElementById(clickedId).innerHTML= gameBoardArr[clickedId];
		}
	}
		
	else if (turn === 2) {
		
			if (clkIdval === "") {
				turn = 1;
				gameBoardArr[clickedId] = "o";
				document.getElementById(clickedId).innerHTML= gameBoardArr[clickedId];
		}
	}
	gameWon();
}

function startGame() {
	document.getElementById("btn-play").innerHTML="Game in progress";
	turn = 1;
}

function restartGame() {
	clearGameBoard();
	document.getElementById("btn-play").innerHTML="PLAY";
	
	turn = 0;
	player1.score = 0;
	player2.score = 0;
	updateScores();
	
}

function gameWon(clickedId) {
	if (gameBoardArr[0] === gameBoardArr[1] && 
        gameBoardArr[0] === gameBoardArr[2] &&
        gameBoardArr[0] !== "" ||
				
			gameBoardArr[3] === gameBoardArr[4] && 
        gameBoardArr[3] === gameBoardArr[5] &&
        gameBoardArr[3] !== "" ||
				
			gameBoardArr[6] === gameBoardArr[7] && 
        gameBoardArr[6] === gameBoardArr[8] &&
        gameBoardArr[6] !== "" ||
				
			gameBoardArr[0] === gameBoardArr[3] && 
        gameBoardArr[0] === gameBoardArr[6] &&
        gameBoardArr[0] !== "" ||
				
			gameBoardArr[1] === gameBoardArr[4] && 
        gameBoardArr[1] === gameBoardArr[7] &&
        gameBoardArr[1] !== "" ||
				
			gameBoardArr[2] === gameBoardArr[5] && 
        gameBoardArr[2] === gameBoardArr[8] &&
       gameBoardArr[2] !== "" ||	
         
      gameBoardArr[0] === gameBoardArr[4] && 
        gameBoardArr[0] === gameBoardArr[8] &&
        gameBoardArr[0] !== "" ||
			
			gameBoardArr[2] === gameBoardArr[4] && 
        gameBoardArr[2] === gameBoardArr[6] &&
        gameBoardArr[2] !== "")
	
	{	
		if (turn === 2) {
			
			alert("Player 1 wins");
			alert("Game over");
			player1.score++
			clearGameBoard();
		}
		
		else if (turn === 1) {

			alert("Player 2 wins");
			alert("Game over");
			player2.score++
			clearGameBoard();
		}
	}
	
	else if (gameBoardArr[0] !== "" && gameBoardArr[1] !== "" && gameBoardArr[2] !== "" && gameBoardArr[3] !== "" && gameBoardArr[4] !== "" && gameBoardArr[5] !== "" && gameBoardArr[6] !== "" && gameBoardArr[7] !== "" && gameBoardArr[8] !== "")
	{
		alert("Tied game");
		clearGameBoard();
	}
	updateScores();
}

function clearGameBoard() {
	colorWinSquares();
	document.getElementById("btn-play").innerHTML="PLAY";
	gameBoardArr = ["","","","","","","","",""];
	turn = 0;
	setTimeout(function(){ clearSquares(); }, 2500);
}

function clearSquares () {
	document.getElementById("0").innerHTML="";
	document.getElementById("1").innerHTML="";
	document.getElementById("2").innerHTML="";
	document.getElementById("3").innerHTML="";
	document.getElementById("4").innerHTML="";
	document.getElementById("5").innerHTML="";
	document.getElementById("6").innerHTML="";
	document.getElementById("7").innerHTML="";
	document.getElementById("8").innerHTML="";
	
	document.getElementById("square1").style.backgroundColor = "#d9e6f2";
	document.getElementById("square2").style.backgroundColor = "#d9e6f2";
	document.getElementById("square3").style.backgroundColor = "#d9e6f2";
	document.getElementById("square4").style.backgroundColor = "#d9e6f2";
	document.getElementById("square5").style.backgroundColor = "#d9e6f2";
	document.getElementById("square6").style.backgroundColor = "#d9e6f2";
	document.getElementById("square7").style.backgroundColor = "#d9e6f2";
	document.getElementById("square8").style.backgroundColor = "#d9e6f2";
	document.getElementById("square9").style.backgroundColor = "#d9e6f2";
	
	document.getElementById("0").style.color = "#fff";
	document.getElementById("1").style.color = "#fff";
	document.getElementById("2").style.color = "#fff";
	document.getElementById("3").style.color = "#fff";
	document.getElementById("4").style.color = "#fff";
	document.getElementById("5").style.color = "#fff";
	document.getElementById("6").style.color = "#fff";
	document.getElementById("7").style.color = "#fff";
	document.getElementById("8").style.color = "#fff";
}

function updateScores() {
	document.getElementById("score1").innerHTML = player1.score;
	
	document.getElementById("score2").innerHTML = player2.score;
	
	if (player1.score === 3) {
			alert(`Player 1 wins series ${player1.score} - ${player2.score}`);
			clearGameBoard();
			turn = 0;
			player1.score = 0;
			player2.score = 0;
	}
	
	else if (player2.score === 3) {
			alert(`Player 2 wins series ${player2.score} - ${player1.score}`)
			clearGameBoard();
			turn = 0;
			player1.score = 0;
			player2.score = 0;
	}
}

function colorWinSquares(clickedId) {
	if (gameBoardArr[0] === gameBoardArr[1] && 
        gameBoardArr[0] === gameBoardArr[2] &&
        gameBoardArr[0] !== "") {
					document.getElementById("square1").style.backgroundColor = "#000";
					document.getElementById("square2").style.backgroundColor = "#000";
					document.getElementById("square3").style.backgroundColor = "#000";
					
					document.getElementById("0").style.color = "red";
					document.getElementById("1").style.color = "red";
					document.getElementById("2").style.color = "red";
	}
	
	else if (gameBoardArr[3] === gameBoardArr[4] && 
        gameBoardArr[3] === gameBoardArr[5] &&
        gameBoardArr[3] !== "") {
					document.getElementById("square4").style.backgroundColor = "#000";
					document.getElementById("square5").style.backgroundColor = "#000";
					document.getElementById("square6").style.backgroundColor = "#000";
					
					document.getElementById("3").style.color = "red";
					document.getElementById("4").style.color = "red";
					document.getElementById("5").style.color = "red";
	}
	
	else if (gameBoardArr[6] === gameBoardArr[7] && 
        gameBoardArr[6] === gameBoardArr[8] &&
        gameBoardArr[6] !== "") {
					document.getElementById("square7").style.backgroundColor = "#000";
					document.getElementById("square8").style.backgroundColor = "#000";
					document.getElementById("square9").style.backgroundColor = "#000";
					
					document.getElementById("6").style.color = "red";
					document.getElementById("7").style.color = "red";
					document.getElementById("8").style.color = "red";
	}
				
	else if (gameBoardArr[0] === gameBoardArr[3] && 
        gameBoardArr[0] === gameBoardArr[6] &&
        gameBoardArr[0] !== "") {
					document.getElementById("square1").style.backgroundColor = "#000";
					document.getElementById("square4").style.backgroundColor = "#000";
					document.getElementById("square7").style.backgroundColor = "#000";
					
					document.getElementById("0").style.color = "red";
					document.getElementById("3").style.color = "red";
					document.getElementById("6").style.color = "red";
	}
				
	else if (gameBoardArr[1] === gameBoardArr[4] && 
        gameBoardArr[1] === gameBoardArr[7] &&
        gameBoardArr[1] !== "") {
					document.getElementById("square2").style.backgroundColor = "#000";
					document.getElementById("square5").style.backgroundColor = "#000";
					document.getElementById("square8").style.backgroundColor = "#000";
					
					document.getElementById("1").style.color = "red";
					document.getElementById("4").style.color = "red";
					document.getElementById("7").style.color = "red";
	}

	else if (gameBoardArr[2] === gameBoardArr[5] && 
        gameBoardArr[2] === gameBoardArr[8] &&
       	gameBoardArr[2] !== "") {
			 		document.getElementById("square3").style.backgroundColor = "#000";
					document.getElementById("square6").style.backgroundColor = "#000";
					document.getElementById("square9").style.backgroundColor = "#000";
					
					document.getElementById("2").style.color = "red";
					document.getElementById("5").style.color = "red";
					document.getElementById("8").style.color = "red";
	}
	 
	else if (gameBoardArr[0] === gameBoardArr[4] && 					gameBoardArr[0] === gameBoardArr[8] &&
        gameBoardArr[0] !== "") {
					document.getElementById("square1").style.backgroundColor = "#000";
					document.getElementById("square5").style.backgroundColor = "#000";
					document.getElementById("square9").style.backgroundColor = "#000";
					
					document.getElementById("0").style.color = "red";
					document.getElementById("4").style.color = "red";
					document.getElementById("8").style.color = "red";
	}
	
	else if (gameBoardArr[2] === gameBoardArr[4] && 
        gameBoardArr[2] === gameBoardArr[6] &&
        gameBoardArr[2] !== "") {
					document.getElementById("square3").style.backgroundColor = "#000";
					document.getElementById("square5").style.backgroundColor = "#000";
					document.getElementById("square7").style.backgroundColor = "#000";
					
					document.getElementById("2").style.color = "red";
					document.getElementById("4").style.color = "red";
					document.getElementById("6").style.color = "red";
				}
}