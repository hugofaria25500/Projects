'use strict';


//Elements
let player1Score = document.querySelector("#score--0");
let player1CurrentScore = document.querySelector("#current--0");
let player2Score = document.querySelector("#score--1");
let player2CurrentScore = document.querySelector("#current--1");
let dice = document.querySelector(".dice"); 
let newGame = document.querySelector(".btn.btn--new");
let rollDice = document.querySelector(".btn.btn--roll");
let hold = document.querySelector(".btn.btn--hold");
let body = document.querySelector("body");

//Code
let isPlayer1 = true;
let player1TotalScore =0;
let player2TotalScore = 0;
let player1TotalCurrentScore = 0;
let player2TotalCurrentScore = 0;

function checkPlay(){
    let currentNum = Math.ceil(Math.random()*6);
    dice.src = `dice-${currentNum}.png`;
   
    if(isPlayer1){

        if(currentNum != 1){
            player1TotalCurrentScore += currentNum;
            player1CurrentScore.innerHTML = `${player1TotalCurrentScore}`;
        } else {
            isPlayer1=false;
            player1TotalCurrentScore = 0;
            player1CurrentScore.innerHTML = `${player1TotalCurrentScore}`;
        }
    } else {
        if(currentNum != 1){
            player2TotalCurrentScore += currentNum;
            player2CurrentScore.innerHTML = `${player2TotalCurrentScore}`;
        } else {
            isPlayer1=true;
            player2TotalCurrentScore = 0;
            player2CurrentScore.innerHTML = `${player2TotalCurrentScore}`;
        }
    }
}

function checkResult () {

    if(player1TotalCurrentScore != 0 || player2TotalCurrentScore != 0){
        if(isPlayer1){
            isPlayer1 = false;
            player1TotalScore += player1TotalCurrentScore;
            player1Score.innerHTML = `${player1TotalScore}`;
            player1TotalCurrentScore = 0;
            player1CurrentScore.innerHTML = `${player1TotalCurrentScore}`;
        } else {
            isPlayer1 = true;
            player2TotalScore += player2TotalCurrentScore;
            player2Score.innerHTML = `${player2TotalScore}`;
            player2TotalCurrentScore = 0;
            player2CurrentScore.innerHTML = `${player2TotalCurrentScore}`;
        }
        
        console.log("Player 1: " + player1TotalScore)
        console.log("Player 2: " + player2TotalScore)

        if(player1TotalScore >= 100 || player2TotalScore >= 100){
            let result = player1TotalScore >= 100 ? "Player 1 Wins" : "Player 2 Wins";
            console.log(result);
            resetGame();
        }
    }
}

function resetGame(){
    player1TotalScore = 0;
    player2TotalScore = 0;
    player1TotalCurrentScore = 0;
    player2TotalCurrentScore = 0;
    player1Score.innerHTML = `${player1TotalScore}`;
    player2Score.innerHTML = `${player2TotalScore}`;
    player1CurrentScore.innerHTML = `${player1TotalCurrentScore}`;
    player2CurrentScore.innerHTML = `${player2TotalCurrentScore}`;
    dice.src = "dice-1.png";
    isPlayer1 = true;
    body.style.backgroundImage = "linear-gradient(to top left, #753682 0%, #bf2e34 100%);";
}

newGame.addEventListener("click", resetGame);
rollDice.addEventListener("click", checkPlay);
hold.addEventListener("click", checkResult);

const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function (){
        console.log(this);
        console.log(2037 - this.year)
        console.log(this.firstName)
    },

    jesus: () => console.log(this.firstName),

    miss: function () {
        console.log(this)
        console.log(this.firstName)
    },

    greet: () => console.log(this)    
}

jonas.calcAge();
jonas.greet();
jonas.miss();
jonas.jesus();
