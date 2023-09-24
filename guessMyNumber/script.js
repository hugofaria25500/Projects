'use strict';

//Elements
let body = document.body;
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const checkButton = document.querySelector(".btncheck");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const againButton = document.querySelector(".btnagain");

//Code
let scoreNumber = 20;
let highscoreNumber = 0;
let currentNumber = Math.ceil(Math.random()*20);

function checkInput(value) {
    if(value > 20) {
        message.innerHTML = "Numbers Only Between 1 and 20 !"
    } else if (value < 1) {
        message.innerHTML = "Numbers Only Between 1 and 20 !"
    }
}

function checkNumber () {
    let currentGuess = parseInt(guess.value);
    checkInput(currentGuess);
    
    if(scoreNumber == 0){
        message.innerHTML = "You Lost, Try Again !";
    } else if(currentGuess == currentNumber){
        body.style.backgroundColor = "green";
        message.innerHTML = "Correct Number";
        number.innerHTML = `${currentNumber}`;

        if(scoreNumber > highscoreNumber){
            highscoreNumber = scoreNumber;
            highscore.innerHTML = `${highscoreNumber}`;
        }

    } else {
        scoreNumber --;
        score.innerHTML = `${scoreNumber}`;

        if(currentGuess > currentNumber) {
            message.innerHTML = "Too High...";
        } else {
            message.innerHTML = "Too Low...";
        }
    }
    
}

function resetGame() {
    currentNumber = Math.ceil(Math.random()*20);
    number.innerHTML = "?";
    message.innerHTML = "Start guessing...";
    score.innerHTML = "20";
    scoreNumber = 20;
    guess.value = "";
    body.style.backgroundColor = "#222";
}

checkButton.addEventListener("click", checkNumber);
againButton.addEventListener("click", resetGame);


