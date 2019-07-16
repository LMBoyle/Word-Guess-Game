var $ = function (id) {
  return document.getElementById(id);
}

// VARIABLES
// ============================================================================================
// Variables that hold references to the places in the HTML where we want to display things
  var wordBlank = document.getElementById("currentWord");
  var guessesNum = document.getElementById("guessesRemain");
  var guessesText = document.getElementById("alreadyGuessed");
  var winNum = document.getElementById("wins");
  var lossNum = document.getElementById("losses");

// List of words
// ! wordOptions
  var gymTerms = [
  "barbell",
  "dumbbell",
  "kettlebell",
  "squat",
  "deadlift",
  "bench press",
]


  // ! selectedWord
  var wordToGuess = "";

  // ! lettersInWord
  var letters = [];

  // ! numBlanks
  var wordLength = 0;

// Blanks & Letters correctly guessed array
  // ! blanksAndSuccesses
  var blanks=[];

// Wrong letters guessed array 
  // ! wrongLetters
  var lettersGuessed = [];

// Starting Values
  // ! winCounts
  var totalWins = 0;
  // ! lossCount
  var totalLosses = 0;
  // ! guessesLeft
  var remainingGuesses = 8;

// FUNCTIONS
// ==========================================================================
// Starting Game By...    
var startGame = function(){
  // Choose a random number and populte word from array based on number
  wordToGuess = gymTerms[Math.floor(Math.random() * gymTerms.length)];
    console.log('wordToGuess:', wordToGuess);
  // Create an array of the word to guess
  letters = wordToGuess.split('');
    console.log('letters:', letters);
  // Length of the word choosen
  wordLength = letters.length;
    console.log('wordLength:', wordLength);
  
  // reset:

  // remaining guesses to 8, ...
  remainingGuesses = 8;
  // letters guessed to nothing, ...
  lettersGuessed = [];
  // and blanks/succesful guesses to nothing
  blanks=[]

  // Displaying Blanks for Word, ...
  for (var i = 0; i < wordLength; i++) {
    blanks.push("_ ");
  }

  // Display blanks, ...
  wordBlank.innerHTML = blanks.join(" ");

  // show number of losses, ...
  lossNum.innerHTML = totalLosses;

  // show number of wins, and ...
  winNum.innerHTML = totalWins;

  // Show number of guessing remaining
  guessesNum.innerHTML = remainingGuesses;
}

// After player presses a key...  
function checkLetter(letter) {
  // go through selected word to see if letter is part of word...
  var letterInWord = false;

  for (var j=0; j<wordLength; j++) {
    if (wordToGuess[j] == letter) {
      letterInWord = true;
    }
  }
  // if letter is in word, display it in place of blanks ...
  if(letterInWord) {
    for (var j=0; j<wordLength; j++) {
      if (wordToGuess[j] == letter) {
        blanks[j] = letter;
        console.log('display updated:', blanks)
      }
    }
  }
  // if letter is not in word, display it under already guessed
  else {
    lettersGuessed.push(letter);
      console.log('lettersGuessed:', lettersGuessed)
    remainingGuesses--;
  }
}

function guessComplete() {
  // Update HTML after each guess:
  // Update blanks
  wordBlank.innerHTML = blanks.join(" ");
  // Update letters guessed
  guessesText.innerHTML = lettersGuessed.join(" ");
  // Update remaining guesses
  guessesNum.innerHTML = remainingGuesses;
  // Check if user has completely guessed the word
  if (letters.toString() == blanks.toString()) {
    totalWins++;
    alert("You Won! Click OK to play again.");
    winNum.innerHTML = totalWins;
    startGame();
  }
  else if (remainingGuesses == 0) {
    totalLosses++;
    alert("You lost. Click OK to try again!");
    lossNum.innerHTML = totalLosses;
    startGame();
  }
}

// When Screen Loads
document.addEventListener("DOMContentLoaded", function(){
  // Run Start Game and populate inital information
  startGame();

  // When user presses a key
  document.onkeyup = function (event) {
    userLetter = event.key.toLowerCase();
      console.log('userLetter:', userLetter);
    checkLetter(userLetter);
    guessComplete();
  }
})
