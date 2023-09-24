'use strict';

//Elements
let modalButton = document.querySelectorAll(".show-modal");
let closeModalButton = document.querySelector(".close-modal");
let cardInfo = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

//Code
function showModal () {
    cardInfo.style.display = "block";
    overlay.style.display = "block";
}

function closeModal () {
    cardInfo.style.display = "none";
    overlay.style.display = "none";
}

for (let i = 0; i < modalButton.length; i++){
    modalButton[i].addEventListener("click",showModal);
}

closeModalButton.addEventListener("click", closeModal);

document.addEventListener("keydown", function(event) {

    if(event.key == "Escape"){
        cardInfo.style.display = "none";
        overlay.style.display = "none";
    }
})