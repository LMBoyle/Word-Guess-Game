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

// Choose a random number
  // ! selectedWord
  var arrayIndex = Math.floor(Math.random() * gymTerms.length);
    console.log("arrayIndex ", arrayIndex);

// Word from array based on number
  var wordToGuess = gymTerms[arrayIndex];
    console.log('wordToGuess:', wordToGuess);

// Length of the word choosen
  // ! numBlanks
  var wordLength = wordToGuess.length;
    console.log('wordLength:', wordLength);
  // ! blanksAndSuccesses...?
  var display=[wordLength];
    console.log('display:', display)

  var guessedCorrect = wordLength;
    console.log('win:', guessedCorrect);

// Create an array of the word to guess
  // ! lettersInWord
  var letters = wordToGuess.split('');
    console.log('letters:', letters);

// Starting Values
  // ! guessesLeft
  var remainingGuesses = 8;
  // ! winCounts
  var totalWins = 0;
  // ! lossCount
  var totalLosses = 0;

// Letters Already Guessed Array 
  // ! wrongLetters
  var lettersGuessed = [];

  var output = "";
  var userLetter="";


// FUNCTIONS
// ==========================================================================
// Starting Game By...    
var startGame = function(){
  // Displaying Blanks for Word, ...
  for (var i = 0; i < wordToGuess.length; i++) {
  display[i] = "_ ";
    console.log('display blanks:', display)
  output = output + display[i];
    console.log('output:', output)
  }

  wordBlank.innerHTML = output;
  output = "";

  // show number of losses, ...
  lossNum.innerHTML = totalLosses;

  // Show number of wins, and ...
  winNum.innerHTML = totalWins;

  // reset:

  // remaining guesses to 8
  remainingGuesses = 8;
    // Show number of guessing remaining
    guessesNum.innerHTML = remainingGuesses;
  // and letters guessed to nothing
  lettersGuessed = [];
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

  if(letterInWord) {
    for (var j=0; j<wordLength; j++) {
      if (wordToGuess[j] == letter) {
        display[j] = letter;
        console.log('display updated:', display)
      }
    }
  }
  else {
    lettersGuessed.push(letter);
    console.log('lettersGuessed:', lettersGuessed)
    remainingGuesses--;
    console.log('remainingGuesses:', remainingGuesses)
  }
}


  
/* 
  output = output + display[j] + " ";
      console.log('output updated:', output)
      ;
      guessedCorrect --;
    }
    else if (userLetter != letters[j]) {
      console.log("guessed wrong");
    }
    // and fill in blank
   
  }

  wordBlank.innerHTML = output;
  output = "";
  remainingGuesses--;
  // guessesNum.innerHTML = remainingGuesses;

  if (guessedCorrect < 1) {
    totalWins++;
    winNum.innerHTML = totalWins;
    console.log('totalWins:', totalWins);
  }
  else if (remainingGuesses < 1) {
    totalLosses++;
    lossNum.innerHTML = totalLosses
    console.log('totalLosses:', totalLosses);
  }
  else {
    guessesNum.innerHTML = remainingGuesses;
  }
}

*/

// When Screen Loads
document.addEventListener("DOMContentLoaded", function(){
  // Run Start Game and populate inital information
  startGame();

  // When user presses a key
  document.onkeyup = function (event) {
    output = "";
    userLetter = event.key.toLowerCase();
      console.log('userLetter:', userLetter);
    checkLetter(userLetter);
    //event.key="";
  }

// Show Wins/Losses/Remaining Guesses
// Decrease Remaining Guesses
    

  // TODO After 5 wrong guesses, reset to new word and increase "losses" by one
    

  // TODO If word is correctly guessed, reset to new word and increase "wins" by one
  
})




/*
// Show on screen blanks in place of word
wordBlank.innerHTML = blanks.join(" ");




// Wait for key press
document.onkeypress = function(event) {
  // Determines which key was pressed.
  var keyPress = event.key;
  var userGuess = keyPress.toLowerCase();


  // If letter isn't in word/phrase, show under "letters used" and decrease "guesses" remaining
*/