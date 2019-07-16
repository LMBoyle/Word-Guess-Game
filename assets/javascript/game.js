var $ = function (id) {
  return document.getElementById(id);
}

// Variables that hold references to the places in the HTML where we want to display things
  var wordBlank = document.getElementById("currentWord");
  var guessesNum = document.getElementById("guessesRemain");
  var guessesText = document.getElementById("alreadyGuessed");
  var winNum = document.getElementById("wins");
  var lossNum = document.getElementById("losses");

// List of words
  //! game
  var gymTerms = [
  "barbell",
  "dumbbell",
  "kettlebell",
  "squat",
  "deadlift",
  "bench press",
]

// Choose a random number
  // ! choice
  var arrayIndex = Math.floor(Math.random() * gymTerms.length);
    console.log("arrayIndex ", arrayIndex);

// Word from array based on number
  // ! answer
  var wordToGuess = gymTerms[arrayIndex];
    console.log('wordToGuess:', wordToGuess);

// Length of the word choosen
// ! myLength
  var wordLength = wordToGuess.length;
    console.log('wordLength:', wordLength);

  var display=[wordLength];
    console.log('display:', display)

// ! win
  var guessedCorrect = wordLength;
    console.log('win:', guessedCorrect);

// Create an array of the word to guess
  var letters = wordToGuess.split('');
    console.log('letters:', letters);

// Starting Values
  // !attempsLeft
  var remainingGuesses = 8;
  var totalWins = 0;
  var totalLosses = 0;

  var output = "";
  var userLetter="";

// Starting Game By Displaying Blanks for Word
var setup = function(){
  for (var i = 0; i < wordToGuess.length; i++) {
  display[i] = "_ ";
    console.log('display blanks:', display)
  output = output + display[i];
    console.log('output:', output)
  }

  wordBlank.textContent = output;
  output = "";
}

// When player presses a key...  
document.onkeypress = function (event) {
  output = "";
  userLetter = event.key;
    console.log('userLetter:', userLetter)

  event.key="";
  // go through selected word to see if letter is part of word...
  for (var j=0; j<wordToGuess.length; j++) {
    if (userLetter.toLowerCase() === letters[j]) {
      display[j] = userLetter.toLowerCase();
      guessedCorrect --;
    }
    // and fill in blank
    output = output + display[j] + " ";
  }

  wordBlank.textContent = output;
  output = "";
  remainingGuesses--;
  // guessesNum.textContent = remainingGuesses;

  if (guessedCorrect < 1) {
    totalWins++;
    winNum.textContent = totalWins;
    console.log('totalWins:', totalWins);
  }
  else if (remainingGuesses < 1) {
    totalLosses++;
    lossNum.textContent = totalLosses
    console.log('totalLosses:', totalLosses);
  }
  else {
    guessesNum.textContent = remainingGuesses;
  }
}

document.addEventListener("DOMContentLoaded", function(){
  setup();

// Show Wins/Losses/Remaining Guesses
// Decrease Remaining Guesses
    // Show number of guessing remaining
      guessesNum.textContent = remainingGuesses;

  // TODO After 5 wrong guesses, reset to new word and increase "losses" by one
    // Show number of losses
      lossNum.textContent = totalLosses;

  // TODO If word is correctly guessed, reset to new word and increase "wins" by one
  // Show number of wins
      winNum.textContent = totalWins;
})




/*
// Show on screen blanks in place of word
wordBlank.textContent = blanks.join(" ");

// Letters Already Guessed Array 
var lettersGuessed = [];

// Wait for key press
document.onkeypress = function(event) {
  // Determines which key was pressed.
  var keyPress = event.key;
  var userGuess = keyPress.toLowerCase();


  // If letter isn't in word/phrase, show under "letters used" and decrease "guesses" remaining
*/