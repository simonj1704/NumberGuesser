"use strict";

window.addEventListener("load", start);

function start() {
    console.log("JS is Running")
    initializeButtons();
}

let firstGuess = true;
let numberOfGuesses = 1;
let startNumber = 0;
let end = 100;
let guess = Math.floor((startNumber + end) / 2);

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
    startNumber = 0;
    end = 100;
    guess = Math.floor((startNumber + end) / 2);
    generateGuess();
    document.querySelector("#earlierGuess").innerHTML = "";
    document.querySelector("#buttons").classList.remove("hide");
}




function generateGuess(guessHigher){
    displayGuessCounter();
    
    if(startNumber === end){
        alert("The only possible number is " + guess + ". Please click 'Correct' to end the game.")
        return;
    }
    //binary search

    if (firstGuess){
        firstGuess = false;
        console.log("first")
    } else {
        if(guessHigher){
            startNumber = guess + 1;
        } else {
            end = guess - 1;
        }
        guess = Math.floor((startNumber + end) / 2);
    }

    console.log(guess);
    numberOfGuesses++;
    
    document.querySelector(".guess").innerHTML = guess;

}


function displayGuessCounter(){
    document.querySelector("#guess-counter").innerHTML = numberOfGuesses;
}
