document.addEventListener("DOMContentLoaded", function(){
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
console.log("wordToGuess ", wordToGuess);

// Array of blanks based on number of letters in word/phrase
var blanks = [];
for (var i = 0; i < wordToGuess.length; i++) {
  blanks[i] = "_ ";
}
console.log(blanks);

// Show on screen blanks in place of word
wordBlank.textContent = blanks.join(" ");

// Key press variables 
var lettersGuessed = [];

// Wait for key press
document.onkeypress = function(event) {
  // Determines which key was pressed.
  var keyPress = event.key;
  console.log('keyPress:', keyPress);
  var userGuess = keyPress.toLowerCase()
  console.log('userGuess:', userGuess)

  // TODO var alpha = /^[A-Za-z]+$/;
  // if (userGuess.match(alpha)) {

  // Checks if userGuess is a letter and in the word to guess
    for (var j = 0; j < wordToGuess.length; j++) {
      if (wordToGuess[j] === userGuess) {
        blanks[j] = userGuess;
        console.log('blanks:', blanks)
        wordBlank.textContent = blanks.join(" ");
      } 
      /*
      else {
        console.log("wrong guess, try again");
        // Decrease guesses remaining 
        remainingGuesses--;
        console.log('remainingGuesses:', remainingGuesses)
        // Add letter to lettersGuessed array
        // lettersGuessed.push(" " + userGuess);
        console.log('lettersGuessed:', lettersGuessed)
        // Show letter under Already Guessed
        // guessesText.textContent = lettersGuessed.join(" ");
      }
      */
    }
  }
})
  
  // } else {
    // console.log("is not Alpha")

  // If letter isn't in word/phrase, show under "letters used" and decrease "guesses" remaining
    
    // Decrease Remaining Guesses
      // Show number of guessing remaining
      // TODO Show number before pressing anything
      guessesNum.textContent = remainingGuesses;

  // TODO After 5 wrong guesses, reset to new word and increase "losses" by one
    // Show number of losses
      lossNum.textContent = losses;

  // TODO If word is correctly guessed, reset to new word and increase "wins" by one
  // Show number of wins
      winNum.textContent = wins;

// Display letters already guessed, wins, and losses
// Show # of guesses left
// Change all to uppercase
