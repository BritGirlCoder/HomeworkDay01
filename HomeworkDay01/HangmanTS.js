"use strict";
//Wrapping the whole thing in a function triggered by the mouseclick
document.getElementById("btnGame").addEventListener("click", function () {
    //Here I'm setting up the list of words as a string array
    let allWords = ["tea", "coffee", "espresso", "redbull", "illegal"];
    //I'm getting a randomly selected word here
    let selectedWord = allWords[Math.floor(Math.random() * allWords.length)];
    //This is my counter to track how many wrong guesses there are
    let wrongGuesses = 6;
    //This will provide just a visual hint to the user - either a "_" for not-yet-guessed, or the
    //correctly guessed letter - I'm setting it as an array of strings
    //Explicitly declaring as a string array because JS will take any types in an array
    //- not sure about TS
    let hintLines = [];
    //So first of all, set the number of visual hintLines based on the number of letters in the
    //selected word.  Each item in the array gets the string "_"
    for (let i = 0; i < selectedWord.length; i++) {
        hintLines[i] = "_";
    }
    //The number of letters that still need to be guessed starts out as the #letters in the selected word
    let lettersToGuess = selectedWord.length;
    //So now I need to check if I still have letters left to guess in the word and if I have fewer than
    //6 wrong guesses
    //Providing I have both letters and guesses left, I can proceed
    while (lettersToGuess > 0 && wrongGuesses > 0) {
        //First, the user alert for the number of letters to guess
        //We're joining the array values with a space separator
        let message = hintLines.join(" ");
        document.getElementById("progressDisplay").textContent = message;
        //alert(hintLines.join(" "));
        //Convert the user's guess to lower case
        let userGuess = prompt("Enter any letter A-Z").toLowerCase();
        //need to track if the user's guess matched any letters - set the flag to true
        let matchesNone = true;
        //Now we'll loop through the word and check for matches on the user input
        for (let j = 0; j <= selectedWord.length; j++) {
            //If the user's guessed letter matches the letter then set the appropriate position in the
            //"hint" array to the letter
            //Then decrement the #letters left to guess and set matchesNone to false
            if (selectedWord[j] === userGuess) {
                hintLines[j] = userGuess;
                lettersToGuess--;
                matchesNone = false;
            }
        }
        //If the user guesses incorectly then decrement the # wrong guesses left and alert the user
        if (matchesNone) {
            wrongGuesses--;
            alert("Wrong!! You have only got " + wrongGuesses + " left of your 6 chances!");
        }
    }
    if (lettersToGuess > 0) {
        alert("You failed!");
    }
    else {
        alert("You guessed the word!");
    }
});
//# sourceMappingURL=HangmanTS.js.map