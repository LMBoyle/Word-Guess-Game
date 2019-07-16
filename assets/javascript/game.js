var $ = function (id) {
  return document.getElementById(id);
}

document.addEventListener("DOMContentLoaded", function(){
// TODO Press a key to start the game
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
setup();

// When player presses a key, go through selected word to see if letter is part of word
document.onkeypress = function (event) {
  output = "";
  userLetter = event.key;
    console.log('userLetter:', userLetter)

  event.key="";

  for (var j=0; j<wordToGuess.length; j++) {
    if (userLetter.toLowerCase() === letters[j]) {
      display[j] = userLetter.toLowerCase();
      guessedCorrect --;
    }
    output = output + display[j] + " ";
  }

  wordBlank.textContent = output;
  output = "";
  remainingGuesses--;
}
// Showing Wins/Losses/Remaining Guesses
// Decrease Remaining Guesses
    // Show number of guessing remaining
      guessesNum.textContent = remainingGuesses;

  // TODO After 5 wrong guesses, reset to new word and increase "losses" by one
    // Show number of losses
      lossNum.textContent = totalLosses;

  // TODO If word is correctly guessed, reset to new word and increase "wins" by one
  // Show number of wins
      winNum.textContent = totalWins;





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

  // TODO 
  // var alpha = /^[A-Za-z]+$/;
  // if (userGuess.match(alpha)) {

  // Checks if userGuess is a letter and in the word to guess
    for (var j = 0; j < wordToGuess.length; j++) {
      if (wordToGuess[j] === userGuess) {
        blanks[j] = userGuess;
        console.log('blanks:', blanks)
        wordBlank.textContent = blanks.join(" ");
      } 
     
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


  
  // } else {
    // console.log("is not Alpha")

  // If letter isn't in word/phrase, show under "letters used" and decrease "guesses" remaining
    
    

// Display letters already guessed, wins, and losses
// Show # of guesses left
// Change all to uppercase
})