// dom reference
console.dir(window.document);

// global variables
var startBtn = document.querySelector(".start-btn");
var startSlide = document.getElementById("start-slide");
var quizSlide = document.getElementById("quiz-slide");
var highScoreContainer = document.querySelector(".high-scores-container");
var endGameSlide = document.getElementById("finish");
var answerEl = document.getElementById("answers");
var questionEl = document.getElementById("question");
var resultEl = document.getElementById("result");
var rightOrWrong = document.querySelector('#right-or-wrong');
var nameInput = document.querySelector('#name');

//score local storage variables
var localStorage = window.localStorage;
var highScores = [];
if (localStorage.getItem('highScores') !== null) {
    highScores = JSON.parse(localStorage.getItem('highScores'));
}

// question variable
var questionIndex = 0;

// questions array
var quizQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: [
            "Boolean", 
            "Giraffe", 
            "String", 
            "Number"
        ],
        correct: "Giraffe"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        choices: ["//comment",
            "/*comment*/",
            "<!--comment-->", 
            "~comment~!%$#~"
        ],
        correct: "//comment"
    },
    {
        question: "Who invented Javascript?",
        choices: ["Andy Samberg", 
            "Dave Chappelle", 
            "Someone who shouldn't have", 
            "Brendan Eich"
        ],
        correct: "Brendan Eich"
    },
    {
        question: "Which is a common naming convention for compounded (joined) words in Javascript?",
        choices: ["froggyJump", 
            "stairCase", 
            "camelCase", 
            "camelToe"
        ],
        correct: "camelCase"
    }
];

//start quiz function
function startSlide() {
    startSlide.style.display = "block";
    quizSlide.style.display = "none";
    endGameSlide.style.display = "none";
    // resultEl.style.display = "none";
    // highScoreContainer.style.display = "none";
};

function startQuiz() {
    startSlide.style.display = "none";
    quizSlide.style.display = "block";
    endGameSlide.style.display = "none";

    //timer
    var timeSec = document.querySelector(".timer-sec");
    var sec = 65;
    var time = setInterval(startTimer, 1000);

    //start timer function
    function startTimer() {
        document.getElementById("timer").innerHTML = sec;
        sec--;
        if (sec == -1) {
            clearInterval(time);
            endGame();
        }
    }
    loadQuestion();
};

function loadQuestion() {
    //question appears onscreen
    questionEl.textContent = quizQuestions[questionIndex].question;
    //clears old answer choices
    answerEl.innerHTML = ""; 

    var questionChoices = quizQuestions[questionIndex].choices
    for (var i = 0; i < questionChoices.length; i++) {
        var item = questionChoices[i];
        var answerBtn = document.createElement('button');
        answerBtn.textContent = item;
        answerBtn.classList.add("btn");
        answerBtn.addEventListener("click", function () {
            //when answer clicked, check answer
            checkAnswer(this.textContent);
        });
        //add buttons to screen
        answerEl.appendChild(answerBtn);
    }
};

function checkAnswer(choice) {
    // check if correct
    var correctAnswer = quizQuestions[questionIndex].correct
    if (choice !== correctAnswer) {
        rightOrWrong.textContent = "*buzzerSound* WRONG!";
        // subtract 10s from timer
        sec = Math.max(secondsLeft - 10, 0);
    } else {
        rightOrWrong.textContent = "Correct!";
    }
    resultEl.style.display = "block";
};

startBtn.addEventListener("click", startQuiz);

// function correct() {
//     var correctContainer = document.querySelector(".correct-container")
//     correctContainer.classList.remove("hide")
// }

// function notCorrect() {
//     var wrongContainer = document.querySelector(".wrong-container")
//     wrongContainer.classList.remove("hide")
// }

// function resetState() {
//     while (answerButtonsEl.firstChild) {
//         answerButtonsEl.removeChild
//         (answerButtonsEl.firstChild)
//     }
// };

// function setNextQuestion() {
//     resetState()
//     showQuestion(questionEl[currentQuestion])
// };

// function showQuestion(currentQuestion) {
//     questionEl.innerText = currentQuestion.question
//     for(var i = 0; i < questions.length; i++) {
//         var thisItem = questions[i];
//         var answers = thisItem.answers
//     thisItem.answers.forEach(answers => {
//         var button = document.createElement('button')
//         button.innerText = answers.length
//         button.classList.add('btn')
//         answerButtonsEl.appendChild(button)
//     })
// }};

// // function clearStatusClass(element) {
// //     element.classList.remove('answer')
// //     element.classList.remove('question')
// // };

// function endGame() {
//     // endGameSlide.classList.remove('hide');
//     // quizSlide.classList.add('hide')
//     // startSlide.classList.add("hide")
// };

//pseudocode
// when 'click' startbtn ---> timer starts, startslide addclass hide, quizslide remove class hide

//when 'click' answer ---> check answer, loop?
//if wrong ---> -10 seconds && wrong-container remove class hide
//if correct ---> correct container remove class hide
//new question

//when game is over ---> endgame-slide remove class hide ---> input score

//when view high scores click ---> highscores slide remove class hide

