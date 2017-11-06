window.onload = function(){

// Array of possible words for hangman
var words = ["fallout", "newvegas", "powerarmor", "supermutant", "nuclear", "megaton", "vault", "pipboy", "raider", "radscorpion", "deathclaw", "diamondcity", "minutemen", "institute", "railroad", "synth"];

// Variables for tracking wins which start at 0 and lives remaining which start at 10
var wins = 0;
var lives = 10;
var guesses = [];
var dashes = [];

// Determines what word will be in play for this round
var wordInPlay = words[Math.floor(Math.random() * words.length)];

// Creating the dashes for the game
for(var i = 0; i < wordInPlay.length; i++) {
dashes.push("_");
}

function htmlRewrite() {
	var html = "<h2>Press any key to play! </h2>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Lives: " + lives + "</p>" +
		"<p>Current Word: " + dashes.join(" ") + "</p>" +
		"<p>Previous Guesses: " + guesses.join(", ") + "</p>";
	document.querySelector("#game").innerHTML = html;
	}	

htmlRewrite();

function gameReset(){
	wordInPlay = words[Math.floor(Math.random() * words.length)];
	for(var i = 0; i < wordInPlay.length; i++) {
	dashes.push("_");
	}
}

// When a user presses a key it will run this function
document.onkeyup = function(event) {

	// Validates user inputted a letter rather than an extraneous character
	if (event.keyCode >= 65 && event.keyCode <= 90) {

		// Determine what key was pressed and make it Lower case and set it to the userGuess variable.
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

		// storing the users guesses in an array
		if (guesses.indexOf(userGuess) === -1) {
			guesses.push(userGuess);

			var index = wordInPlay.indexOf(userGuess);	
			if (index === -1){
					lives--;
				}		
			while (index >= 0){
					dashes[index] = userGuess;
					index = wordInPlay.indexOf(userGuess, index + 1);		
			}
		}
		if (dashes.includes("_") === false){
			wins++;
			lives = 10;
			guesses = [];
			dashes = [];
			gameReset();
			htmlRewrite();
		}
		if (lives === 0){
			var playAgain =	alert("Game Over! Press Ok to play again!")
				if (playAgain = true){
					guesses = [];
					dashes = [];
					gameReset();
					htmlRewrite();
					wins = 0;
					lives = 10;
				}
		}
	}
	htmlRewrite();
}
}
