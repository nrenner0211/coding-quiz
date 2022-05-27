// dom reference
console.dir(window.document);

// global variables
var startBtn = document.querySelector(".start-btn");
var infoContainer = document.querySelector("#info-box");
var 
var timer = document.querySelector(".timer");
var timeLeft = document.querySelector(".time-left");
var timeSec = document.querySelector(".time-sec");

startBtn.addEventListener('click', startGame);

function startGame() {
    infoContainer.classList.add("hide")
}

// // start timer event listener
// startBtn.addEventListener("click", function (event) {
// var time = 15;
// var myInterval;

//     // stops timer from starting with every click
//     clearInterval(myInterval);

//     // starts timer on click
//     myInterval = setInterval(function () {
//         time --;
//         timer.innerHTML = time;
//     }, 1000);

//     if (time < 0) {
//         alert("You lose!");
//     }
// });
