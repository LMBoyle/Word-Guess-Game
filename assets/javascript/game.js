// Press a key to start the game

// List of words
var gymTerms = [
    "barbell",
    "dumbbell",
    "kettlebell",
    "squat",
    "deadlift",
    "bench press",
]





// Choose a word and show blanks based on number of letters in word/phrase
var wordToGuess = gymTerms[Math.floor(Math.random() * gymTerms.length)];
var blanks = [];
    for (var i = 0; i < wordToGuess.length; i++) {
        blanks[i] = "_";
    }
console.log(wordToGuess);
var remainingLetters = wordToGuess.length;
// Wait for key press
    var userText = document.getElementById("alreadyGuessed");
    
    document.onkeyup = function(event) {
        // Determines which key was pressed.
        var userGuess = event.key;
        lettersGuessed.push(userGuess);
        var x = lettersGuessed.toString();
        var y = lettersGuessed.join(" ");
            document.getElementById("alreadyGuessed" + "").innerHTML = y;
    }

// Change all to uppercase

// If letter appears in word/phrase, show in place of blank

// If letter isn't in word/phrase, show under "letters used" and decrease "guesses" remaining
var lettersGuessed = []
// After 5 wrong guesses, reset to new word and increase "losses" by one

// If word is correctly guess, reset to new word and increase "wins" by one