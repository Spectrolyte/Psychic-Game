//create variables: wins, losses, user guess, number of guesses
	// wins & losses start at zero, increment +1
	// number of guesses start at 10, decrement -1
// alert user to press a letter key to start the game
//on key press
	// if user chooses letter, start game
		// letter bank
		// if guesses = 0
			// increment losses by +1
			// computer chooses new letter
			// guesses reset to 10
		// else if user guess doesn't match computer guess
			// guesses decrement -1
		// else if user guess matches computer guess
			// increment wins +1
			// reset guesses to 10
	// else, alert user to choose a letter

var wins = 0;
var losses = 0;
var guesses = 10;
var userGuess = '';
var computerChoice = '';

function generateCPUChoice () {
	var randomNumber = Math.floor(Math.random() * letters.length);
    return letters[randomNumber];
}

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

alert('Press any letter key to start the game!');

document.onkeyup = function game (event) {
	if (letters.indexOf(event.key) !== -1) {
		userGuess = event.key;
		computerChoice =generateCPUChoice();
		if (guesses === 0) {
			losses++;
			guesses = 10;
			computerChoice =generateCPUChoice();
		}
		else if (userGuess !== computerChoice) {
			guesses--;
		}
		else if (userGuess === computerChoice) {
			wins++;
			guesses = 10;
			computerChoice =generateCPUChoice();
		}
		document.getElementById('wins').innerHTML = "Wins: " + wins;
		document.getElementById('losses').innerHTML = "Losses: " + losses;
		document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
		document.getElementById('userGuess').innerHTML = "Your Guess: " + userGuess;
	}
	else {
		alert('Press a letter key to play.');
	}
}