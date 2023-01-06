/******************************/
//JQUERYS TO GET HTML ELEMENTS//
/******************************/

//SCREEN
let screenCalc = document.getElementById("calcResult");
let screenResult = document.getElementById("result")

//OPERATORS
let sumCalc = document.getElementById("sum");
let subCalc = document.getElementById("subtract");
let multiplyCalc = document.getElementById("multiply");
let divideCalc = document.getElementById("divide");

//OPERANDS BUTTONS
let zero = document.getElementById("numberZero");
let one = document.getElementById("numberOne");
let two = document.getElementById("numberTwo");
let three = document.getElementById("numberThree");
let four = document.getElementById("numberFour");
let five = document.getElementById("numberFive");
let six = document.getElementById("numberSix");
let seven = document.getElementById("numberSeven");
let eight = document.getElementById("numberEight");
let nine = document.getElementById("numberNine");
let decimalCalc = document.getElementById("decimal");
let clearCalc = document.getElementById("clear");

/*********************/
//* EVENT lISTENERS *//
/*********************/

//SCREEN
function getResult () {

    let calcTransform = [];
    let calcFinal = [];
    calcTransform = screenCalc.innerHTML.split(" ");

    for (let i = 0; i < calcTransform.length; i ++){
        if (calcTransform[i] != ""){
            calcFinal.push(calcTransform[i]);
        } 
    }

    calcFinal = calcFinal.slice(0,4);
    
    if (calcFinal[1] != undefined && calcFinal[0] == "-" && (calcFinal[1] != "x" || calcFinal[1] != "/" || calcFinal[1] != "+" || calcFinal[1] != "." || calcFinal[1] != "-" )){
        calcFinal[0] = calcFinal[0] + calcFinal[1];
        screenCalc.innerHTML = `${calcFinal[0]}`;
        screenResult.innerHTML = `${Number(calcFinal[0])}`
    } else if (calcFinal[0] == "x" || calcFinal[0] == "/" || calcFinal[0] == "+" || calcFinal[0] == "."){
        screenResult.innerHTML = `Error`;
    } else if (calcFinal[2] == "x" || calcFinal[2] == "/" || calcFinal[2] == "+" || calcFinal[2] == "-" || calcFinal[2] == ".") {
        screenResult.innerHTML = `Error`;
    } else {   
        
        for (let j = 0; j < calcFinal.length; j++){

            screenResult.innerHTML = `${Number(calcFinal[0])}`;
            
            switch(calcFinal[1]) {
                
                case "x": 
                    let decimalNumber = Number(calcFinal[0]) * Number(calcFinal[2]);
                    let arrayDecimalNumber = decimalNumber.toString().split('.');
                    if(arrayDecimalNumber[1] != undefined) {
                        if (arrayDecimalNumber[1].length >= 6) {
                            screenResult.innerHTML = `${Number(Number(calcFinal[0]) * Number(calcFinal[2])).toFixed(6)}`;
                        } else {
                            screenResult.innerHTML = `${Number(Number(calcFinal[0]) * Number(calcFinal[2]))}`; 
                        }
                    } else {
                        screenResult.innerHTML = `${Number(Number(calcFinal[0]) * Number(calcFinal[2]))}`; 
                    }
                    break;
                case "/": 
                    let decimalNumber2 = Number(calcFinal[0]) / Number(calcFinal[2]);
                    let arrayDecimalNumber2 = decimalNumber2.toString().split('.');
                    if(arrayDecimalNumber2[1] != undefined) {
                        if (arrayDecimalNumber2[1].length >= 6) {
                            screenResult.innerHTML = `${Number(Number(calcFinal[0]) / Number(calcFinal[2])).toFixed(6)}`;
                        } else {
                            screenResult.innerHTML = `${Number(Number(calcFinal[0]) / Number(calcFinal[2]))}`; 
                        }
                    } else {
                        screenResult.innerHTML = `${Number(Number(calcFinal[0]) / Number(calcFinal[2]))}`; 
                    }
                    break;
                case "+": 
                    screenResult.innerHTML = `${Number(calcFinal[0]) + Number(calcFinal[2])}`;
                    break;
                case "-": 
                    screenResult.innerHTML = `${Number(calcFinal[0]) - Number(calcFinal[2])}`;
                    break;  
            }

            switch(calcFinal[3]) {
                case "x": 
                    calcFinal[0] = screenResult.innerHTML;
                    calcFinal[1] = " x ";
                    screenCalc.innerHTML = `${calcFinal[0]} ${calcFinal[1]}`;
                    break;
                case "/": 
                    calcFinal[0] = screenResult.innerHTML;
                    calcFinal[1] = " / ";
                    screenCalc.innerHTML = `${calcFinal[0]} ${calcFinal[1]}`;
                    break;
                case "+": 
                    calcFinal[0] = screenResult.innerHTML;
                    calcFinal[1] = " + ";
                    screenCalc.innerHTML = `${calcFinal[0]} ${calcFinal[1]}`;
                    break;
                case "-": 
                    calcFinal[0] = screenResult.innerHTML;
                    calcFinal[1] = " - ";
                    screenCalc.innerHTML = `${calcFinal[0]} ${calcFinal[1]}`;
                    break;
            }      
        } 
    }
}

//OPERATORS
sumCalc.addEventListener("click", function() {
    screenCalc.innerHTML += ` + `;
    getResult();
});

subCalc.addEventListener("click", function() {
    screenCalc.innerHTML += ` - `;
    getResult();
});
divideCalc.addEventListener("click", function() {
    screenCalc.innerHTML += ` / `;
    getResult();
});
multiplyCalc.addEventListener("click", function() {
    screenCalc.innerHTML += ` x `;
    getResult();
});

//OPERAND BUTTONS
decimalCalc.addEventListener("click", function() {
    screenCalc.innerHTML += `.`;
    getResult();
});

zero.addEventListener("click", function() {
    screenCalc.innerHTML += `0`;
    getResult();
});

one.addEventListener("click", function() {
    screenCalc.innerHTML += `1`;
    getResult();
});

two.addEventListener("click", function() {
    screenCalc.innerHTML += `2`;
    getResult();
});

three.addEventListener("click", function() {
    screenCalc.innerHTML += `3`;
    getResult();
});

four.addEventListener("click", function() {
    screenCalc.innerHTML += `4`;
    getResult();
});

five.addEventListener("click", function() {
    screenCalc.innerHTML += `5`;
    getResult();
});

six.addEventListener("click", function() {
    screenCalc.innerHTML += `6`;
    getResult();
});

seven.addEventListener("click", function() {
    screenCalc.innerHTML += `7`;
    getResult();
});

eight.addEventListener("click", function() {
    screenCalc.innerHTML += `8`;
    getResult();
});

nine.addEventListener("click", function() {
    screenCalc.innerHTML += `9`;
    getResult();
});

clearCalc.addEventListener("click", function() {
    screenCalc.innerHTML = ``;
    screenResult.innerHTML = `TEST`;
});

