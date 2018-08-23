// Due to family visiting from out of the country the past 2 weeks, I fell behind on this Hangman game, but I will be finishing up development on it this weekend.  Currently I use a simple Bootstrap layout to display Intstructions, a Movie to Guess (with underscores '_'), and Guesses So Far, with the JS logic accounting for the guesses the user has made and revealing each letter that is guessed correctly.  The logic only accounts for single word movie titles at the moment, but I will be working to add the ability to store multi-word movie titles.  I also need to add the drawing of the Hangman, images, and several other pieces.  This is just a starting point, for what I will build out this weekend when I'm catching up on Activities and this Homework.

var movies = ["titanic", "matrix", "avengers", "nemo", "constantine", "rudy", "jaws", "gladiator", "goodfellas", "alien", "scream", "rocky", "grease"];

var blanks = [];

var guesses = [];

var guessesLeft = 9;


var randomMovie = movies[Math.floor(Math.random() * movies.length)];

console.log(randomMovie);

for (var i = 0; i < randomMovie.length; i++) {
    
    blanks.push("_");
}

document.getElementById("game").innerHTML = blanks.join(" ");

document.onkeyup = function(event) {

    var userChoice = event.key;



    guesses.push(userChoice);


 // I still need to add the if/else logic to account for decrementing guessesLeft, as well as hints and several other items mentioned in the GitLab assignment documentation.

        for (var i = 0; i < randomMovie.length; i++) {

            if (userChoice === randomMovie[i]) {
    
                blanks[i] = userChoice;
    
            }
            else {
                
                guessesLeft--;
                console.log(guessesLeft);
            }
        }
    

    
    document.getElementById("game").innerHTML = blanks.join(" ");
    document.getElementById("guesses").innerHTML = guesses.join(", ");
}