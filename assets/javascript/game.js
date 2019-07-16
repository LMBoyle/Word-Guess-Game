// VARIABLES
// ============================================================================================
// Variables that hold references to the places in the HTML where we want to display things
  var wordBlank = document.getElementById("currentWord");
  var guessesNum = document.getElementById("guessesRemain");
  var guessesText = document.getElementById("alreadyGuessed");
  var winNum = document.getElementById("wins");
  var lossNum = document.getElementById("losses");

// List of words
  var gymTerms = [
  "barbell",
  "dumbbell",
  "kettlebell",
  "squat",
  "deadlift",
  "bench press",
]

  var wordToGuess = "";

  var letters = [];

  var wordLength = 0;

// Blanks & Letters correctly guessed array
  var blanks=[];

// Wrong letters guessed array 
  var lettersGuessed = [];

// Starting Values
  var totalWins = 0;
  var totalLosses = 0;
  var remainingGuesses = 8;

// Sound variables
  var correctSound = document.createElement("audio");
  correctSound.setAttribute("src", "assets/Sounds/correct.mp3");
  var incorrectSound = document.createElement("audio");
  incorrectSound.setAttribute("src", "assets/Sounds/wrong.mp3");
  var winSound = document.createElement("audio");
  winSound.setAttribute("src", "assets/Sounds/win.mp3");
  var loseSound = document.createElement("audio");
  loseSound.setAttribute("src", "assets/Sounds/loss.mp3");
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
    correctSound.play()
    for (var j=0; j<wordLength; j++) {
      if (wordToGuess[j] == letter) {
        blanks[j] = letter;
        console.log('display updated:', blanks)
      }
    }
  }
  // if letter is not in word, display it under already guessed
  else {
    incorrectSound.play();
    if (!lettersGuessed.includes(letter)){
      lettersGuessed.push(letter);
        console.log('lettersGuessed:', lettersGuessed);
      remainingGuesses--;
    }
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
    winSound.play()
    alert("You Won! Click OK to play again.");
    winNum.innerHTML = totalWins;
    startGame();
  }
  else if (remainingGuesses == 0) {
    loseSound.play()
    totalLosses++;
    alert("You lost. The word was " + wordToGuess + ". Click OK to try again!");
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
