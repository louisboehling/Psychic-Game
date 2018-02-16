var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLetter);

var winsCounter = 0;
var lossCounter = 0;
var guessesLeftCounter = 11;
var guessedLetters = [];

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessedLetters.push(userGuess);
    
    guessesLeftCounter--;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeftCounter;

    document.getElementById("guessesSoFar").innerHTML = "Guesses So Far: " + guessedLetters;

    var restart = function () {
        guessesLeftCounter = 10;
        guessedLetters = [];
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
    }

    if (userGuess === randomLetter) {
        winsCounter++;
        document.getElementById("wins").innerHTML = "Wins: " + winsCounter;
        restart();
    }

    if (guessesLeftCounter === 0) {
        lossCounter++;
        document.getElementById("losses").innerHTML = "Losses: " + lossCounter; 
        restart();         
    }

}    
