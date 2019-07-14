// TODO Press a key to start the game

// List of words
var gymTerms = [
  "barbell",
  "dumbbell",
  "kettlebell",
  "squat",
  "deadlift",
  "bench press",
]


// Starting variables
var remainingGuesses = 8;
var wins = 0;
var losses = 0;

// Variables that hold references to the places in the HTML where we want to display things
  var wordBlank = document.getElementById("currentWord" + "");
  var guessesNum = document.getElementById("guessesRemain");
  var guessesText = document.getElementById("alreadyGuessed" + "");
  var winNum = document.getElementById("wins");
  var lossNum = document.getElementById("losses");

// Choose a word from array
  var wordToGuess = gymTerms[Math.floor(Math.random() * gymTerms.length)];

  console.log(wordToGuess);

// Array of blanks based on number of letters in word/phrase
  var blanks = [];
  for (var i = 0; i < wordToGuess.length; i++) {
    blanks[i] = "_ ";
  }

  console.log(blanks);

  var remainingLetters = wordToGuess.length;

// Show on screen blanks in place of word
  wordBlank.textContent = blanks.join(" ");


// Key press variables 
  var lettersGuessed = [];

// Wait for key press
  document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key;
    lettersGuessed.push(" " + userGuess);
    
    // TODO If letter appears in word/phrase, show in place of blank

    // If letter isn't in word/phrase, show under "letters used" and decrease "guesses" remaining
      // Show letters under Already Guessed
      guessesText.textContent = lettersGuessed.join(" ");
      // Decrease Remaining Guesses
        // Show number of guessing remaining
        // TODO Show number before pressing anything
        guessesNum.textContent = remainingGuesses;

    // TODO After 5 wrong guesses, reset to new word and increase "losses" by one
      // Show number of losses
        // TODO Show number before pressing anything
        lossNum.textContent = losses;

    // TODO If word is correctly guessed, reset to new word and increase "wins" by one
      // Show number of wins
        // TODO Show number before pressing anything
        winNum.textContent = wins;

    // Display letters already guessed, wins, and losses
  }
  

// Show # of guesses left
  // var remainingGuesses = 8;
  // document.getElementById("guessesRemain") = toString(reaminingGuesses);

/*
document.onkeyup = function (event) {
  document.getElementById("currentWord").innerHTML = blanks.join(" ");

  while (remainingLetters > 0) {
    alert(blanks.join(""));
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
      // Exit the game loop
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
      // Update the game state with the guess
      for (var j = 0; j < wordToGuess.length; j++) {
        if (wordToGuess[j] === guess) {
          blanks[j] = guess;
          remainingLetters--;
        }
      }
    }
  }


  alert("Good job! The answer was " + wordToGuess);
*/



// Change all to uppercase






