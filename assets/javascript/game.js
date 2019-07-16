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

/*
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
    remainingGuesses--;
    
  }
}

function guessComplete() {
  // Check if user has completely guessed the word
  if (letters.toString() == display.toString()) {
    winNum++;
    alert("you won");
    winNum.innerHTML = totalWins;
    startGame();

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
    guessComplete();
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