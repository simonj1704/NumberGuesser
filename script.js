"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JS is Running")
    initializeButtons();
}

let secretNumber = null;
let firstGuess = true;
let numberOfGuesses = 1;
let earlierGuess = null;
let guess = null;

function initializeButtons(){
    document.querySelector(".btn-lower")
    .addEventListener("click", clickLower);
    
    document.querySelector(".btn-correct")
    .addEventListener("click", clickCorrect);
    
    document.querySelector(".btn-higher")
    .addEventListener("click", clickHigher);

    document.querySelector("#btn-start")
    .addEventListener("click", clickStart);

    document.querySelector("#btn-restart")
    .addEventListener("click", clickRestart);
}

function clickLower(){
    console.log("Lower");
    document.querySelector("#earlierGuess").insertAdjacentHTML("afterbegin", `<li>Computer guessed ${guess} - that was too high</li>`);
    generateGuess(false);
}

function clickCorrect(){
    console.log("Correct");
    document.querySelector("#earlierGuess").insertAdjacentHTML("afterbegin", `<li>Computer guessed ${guess} - that was correct</li>`);
    document.querySelector("#buttons").classList.add("hide");
}

function clickHigher(){
    console.log("Higher");
    document.querySelector("#earlierGuess").insertAdjacentHTML("afterbegin", `<li>Computer guessed ${guess} - that was too low</li>`);
    generateGuess(true);
}

function clickStart(){
    console.log("Start");
    firstGuess = true;
    let element = document.querySelector("#main");
    element.classList.remove("hide");
    generateGuess();
    document.querySelector("#btn-start").classList.add("hide");
    document.querySelector("#btn-restart").classList.remove("hide");
}

function clickRestart(){
    console.log("Restart");
    firstGuess = true;
    numberOfGuesses = 1;
    earlierGuess = null;
    generateGuess();
    document.querySelector("#earlierGuess").innerHTML = "";
    document.querySelector("#buttons").classList.remove("hide");
}


function generateGuess(guessHigher){
    //A  + y/n^2
    if (firstGuess){
        guess = 100/2;
        firstGuess = false;
        earlierGuess = guess;
        numberOfGuesses++;
    } else {
        if(guessHigher){
            guess = earlierGuess + Math.ceil(100/Math.pow(numberOfGuesses,2));
        } else {
            guess = earlierGuess - Math.ceil(100/Math.pow(numberOfGuesses,2));
        }
        earlierGuess = guess;
        if(guess > 100){
            guess = 100;
            earlierGuess = 100;
        }
        if(guess < 0){
            guess = 0;
            earlierGuess = 0;
        }
        console.log(guess);
        numberOfGuesses++;
    }
    document.querySelector(".guess").innerHTML = guess;

}

