// dom reference
console.dir(window.document);

// global variables
var startBtn = document.querySelector(".start-btn");
var startSlide = document.getElementById("start-slide");
var quizSlide = document.getElementById("quiz-slide");
var highScoresSlide = document.getElementById("highscores-slide");
var endGameSlide = document.getElementById("endgame-slide");
var answerButtonsEl = document.getElementById("answer-buttons");

//timer
var timeSec = document.querySelector(".timer-sec");
var sec = 15;
var time = setInterval(myTimer, 1000);

function myTimer() {    
    document.getElementById("timer").innerHTML = sec;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        gameOver();
    }
};

// questions array
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: {
            a: "Boolean",
            b: "Giraffe",
            c: "String",
            d: "Number"
        },
        correctAnswer: "b"
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "//comment",
            b: "/*comment*/",
            c: "<!--comment-->",
            d: "~comment~!%$#~"
        },
        correctAnswer: "a"
    },
    {
        question: "Who invented Javascript?",
        answers: {
            a: "Andy Samberg",
            b: "Dave Chappelle",
            c: "Someone who shouldn't have",
            d: "Brendan Eich"
        },
        correctAnswer: "d"
    },
    {
        question: "Which is a common naming convention for compounded (joined) words in Javascript?",
        answers: {
            a: "froggyJump",
            b: "stairCase",
            c: "camelCase",
            d: "camelToe"
        },
        correctAnswer: "c"
    }
];




// when 'click' startbtn ---> timer starts, startslide addclass hide, quizslide remove class hide

//when 'click' answer ---> check answer, loop?
//if wrong ---> -10 seconds && wrong-container remove class hide
//if correct ---> correct container remove class hide
//new question

//when game is over ---> endgame-slide remove class hide ---> input score

//when view high scores click ---> highscores slide remove class hide










// function countDown() {
//     time--;
//     timeSec.innerHTML = time;
//     if (counter === 0) {
//         // endGame()
//     }
// }

// startBtn.addEventListener('click', startGame, countDown);

// function startGame() {
//     infoContainer.classList.add("hide")
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     quizContainer.classList.remove("hide")
//     setNextQuestion()
// };

// function setNextQuestion() {
//     resetState()
//     showQuestion(shuffledQuestions[currentQuestionIndex])
// };

// function showQuestion(question) {
//     questionElement.innerText = question.question
//     question.answers.forEach(answer => {
//         var button = document.createElement('button')
//         button.innerText = answer.text
//         button.classList.add('btn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsEl.appendChild(button)      
//     });
// };

// function nextQuestionHandler() {
//     button.addEventListener('click', setNextQuestion())
// }

// function resetState() {
//     while (answerButtonsEl.firstChild) {
//         answerButtonsEl.removeChild
//         (answerButtonsEl.firstChild)
//     }
// };

// function selectAnswer(e) {
//     var selectedButton = e.target
//     var correct = selectedButton.dataset.correct
//     setStatusClass(document.body, correct)
//     Array.from(answerButtonsEl.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct)
//     })
// };

//  function setStatusClass(element, correct) {
//     clearStatusClass(element)
//    if (correct) {
//         nextQuestionHandler()
//     } 
// };

// function clearStatusClass(element) {
//     element.classList.remove('answer')
//     element.classList.remove('')
// };

// var questions = [
//     {
//         question: 'Commonly used data types do NOT include:',
//         answers: [
//             { text: 'Boolean', correct: false},
//             { text: 'Giraffes', correct: true},
//             { text: 'String', correct: false},
//             { text: 'Number', correct: false},
//         ]
//     },
//     {
//         question: 'How can you add a comment in a JavaScript?',
//         answers: [
//             { text: '//comment', correct: true},
//             { text: '/*comment*/', correct: false},
//             { text: '<!--comment-->', correct: false},
//             { text: '~?+~!~~!comment', correct: false},
//         ]
//     },
// ];

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
// });
