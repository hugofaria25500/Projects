import * as list from "./lists.js"

/*onst exerBtn = document.getElementById("getExerBtn");
const atvBtn = document.getElementById("getAtvBtn");

function printExercise(){
    exerBtn.addEventListener("click", list.getRandomExerc)
        
}

function printActivit (){
    getAtvBtn.addEventListener("click", list.getRandomActiv)
}*/

const exercMessage = document.getElementById("exerc");
function printExerciseMessage(){
    exercMessage.innerHTML(list.getRandomExerc()) 
        
}

const activMessage = document.getElementById("activ");
function printActivMessage(){
    activMessage.innerHTML(list.getRandomActiv()) 
        
}

export {printExerciseMessage, printActivMessage}