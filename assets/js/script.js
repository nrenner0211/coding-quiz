// dom reference
console.dir(window.document);

// global variables
var startBtn = document.querySelector(".start-btn");
var startSlide = document.getElementById("start-slide");
var quizSlide = document.getElementById("quiz-slide");
var highScoresSlide = document.getElementById("highscores-slide");
var endGameSlide = document.getElementById("endgame-slide");
var answerButtonsEl = document.querySelector(".answerbtn");
var questionEl = document.getElementById("#answer-buttons");
var score = 0;
var currentQuestion = 0;
var totalQuestions = [""];

// questions array
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ["Boolean", "Giraffe", "String", "Number"],
        correctAnswer: ["wrong", "correct", "wrong", "wrong",]
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: ["//comment", "/*comment*/", "<!--comment-->", "~comment~!%$#~"],
        correctAnswer: ["correct", "wrong", "wrong", "wrong"]
    },
    {
        question: "Who invented Javascript?",
        answers: ["Andy Samberg", "Dave Chappelle", "Someone who shouldn't have", "Brendan Eich"],
        correctAnswer: ["wrong", "wrong", "wrong", "correct"]
    },
    {
        question: "Which is a common naming convention for compounded (joined) words in Javascript?",
        answers: ["froggyJump", "stairCase", "camelCase", "camelToe"],
        correctAnswer: ["wrong", "wrong", "correct", "wrong"]
    }
];

//timer
var timeSec = document.querySelector(".timer-sec");
var sec = 75;
var time = setInterval(startTimer, 1000);

//start timer function
function startTimer() {
    document.getElementById("timer").innerHTML = sec;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        endGame();
    }
};

//start quiz function
function startQuiz() {
    startSlide.classList.add("hide")
    for(var i = 0; i < questions.length; i++) {
        var thisItem = questions[i];
        if (thisItem.answers == thisItem.correctAnswer) {
            checkAnswer();
        }
    }
    currentQuestion = 0
    quizSlide.classList.remove("hide")
    setNextQuestion()
};

function checkAnswer() {
    var thisItem = questions[i];
    if (thisItem.answers == thisItem.correctAnswer) {
        correct()
    } else {
        notCorrect()
    }
};

function correct() {
    var correctContainer = document.querySelector(".correct-container")
    correctContainer.classList.remove("hide")
}

function notCorrect() {
    var wrongContainer = document.querySelector(".wrong-container")
    wrongContainer.classList.remove("hide")
}

function resetState() {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild
        (answerButtonsEl.firstChild)
    }
};

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestion])
};

function showQuestion(currentQuestion) {
    questionEl.innerText = currentQuestion.question
    for(var i = 0; i < questions.length; i++) {
        var thisItem = questions[i];
        var answers = thisItem.answers
    thisItem.answers.forEach(answers => {
        var button = document.createElement('button')
        button.innerText = answers.length
        button.classList.add('btn')
        answerButtonsEl.appendChild(button)
    })
}};

// function clearStatusClass(element) {
//     element.classList.remove('answer')
//     element.classList.remove('question')
// };

function endGame() {
    endGameSlide.classList.remove('hide');
    quizSlide.classList.add('hide')
    startSlide.classList.add("hide")
};

startBtn.addEventListener("click", startQuiz);

startBtn.addEventListener("click", startTimer);

//pseudocode
// when 'click' startbtn ---> timer starts, startslide addclass hide, quizslide remove class hide

//when 'click' answer ---> check answer, loop?
//if wrong ---> -10 seconds && wrong-container remove class hide
//if correct ---> correct container remove class hide
//new question

//when game is over ---> endgame-slide remove class hide ---> input score

//when view high scores click ---> highscores slide remove class hide

