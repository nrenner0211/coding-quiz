// dom reference
console.dir(window.document);

// global variables
var startBtn = document.querySelector(".start-btn");
var startSlide = document.getElementById("start-slide");
var quizSlide = document.getElementById("quiz-slide");
var viewScoresBtn = document.querySelector(".high-scores");
var highScoreContainer = document.querySelector(".high-scores-container");
var highScoreList = document.getElementById("high-score-list");
var navButtons = document.querySelector(".buttons");
var endGameSlide = document.getElementById("finish");
var answerEl = document.getElementById("answers");
var questionEl = document.getElementById("question");
var resultEl = document.getElementById("result");
var rightOrWrong = document.querySelector('#right-or-wrong');
var nameInput = document.querySelector('#name');
var timeLeft = 40;
var score = 0;

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
    },
    {
        question: "Which of the following is the correct syntax to redirect a url using JavaScript?",
        choices: [
            "document.location='http://www.newlocation.com';", "browser.location='http://www.newlocation.com';", "navigator.location='http://www.newlocation.com';", "window.location='http://www.newlocation.com';"
        ],
        correct: "window.location='http://www.newlocation.com';"
    },
    {
        question: "What does CSS mean?",
        choices: ["Cascading Scissor Sheets", "Crazy Cool Stuff", "Cascading Style Sheets", "Cascading Style Shorts"],
        correct: "Cascading Style Sheets"
    }
];

//home screen
function startScreen() {
    startSlide.style.display = "block";
    quizSlide.style.display = "none";
    endGameSlide.style.display = "none";
    navButtons.style.display = "none";
    highScoreContainer.style.display = "none";
};

function startQuiz() {
    //timer
    var time = setInterval(startTimer, 1000);

    //start timer function
    function startTimer() {
        document.getElementById("timer").innerHTML = timeLeft;
        timeLeft--;

        // if time runs out, endgame
        if (timeLeft == -1) {
            clearInterval(time);
            endGame();
        }
    }

    startSlide.style.display = "none";
    quizSlide.style.display = "block";
    endGameSlide.style.display = "none";
    navButtons.style.diplay = "none";

    loadQuestion();
};

function loadQuestion() {
    //question appears onscreen
    questionEl.textContent = quizQuestions[questionIndex].question;
    //clears old answer choices
    answerEl.innerHTML = ""; 

    var questionChoices = quizQuestions[questionIndex].choices
    var sortedChoices = questionChoices.sort();
    for (var i in questionChoices) {
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
// debugger;
function checkAnswer(choice) {
    // check if correct
    var correctAnswer = quizQuestions[questionIndex].correct
    if (choice !== correctAnswer) {
        rightOrWrong.textContent = "*buzzerSound* WRONG!";
        timeLeft = timeLeft - 10;
    } else {
        score = score + 5;
        rightOrWrong.textContent = "Correct!";
    }
    resultEl.style.display = "block";

    setTimeout(function() {
        resultEl.style.display = "none";

        // if last question, endgame
        if (questionIndex === quizQuestions.length - 1) {
            endGame();
        } else {
            // otherwise load next question
            questionIndex++;
            loadQuestion();
        }
    }, 1000);
};

function endGame() {
    // if time runs out, endgame
    if (timeLeft =+ 1) {
        clearInterval(timeLeft);
    }

    startSlide.style.display = "none";
    quizSlide.style.display = "none";
    endGameSlide.style.display = "block";
    navButtons.style.display = "block";

    var submitBtn = document.querySelector("#submit-high-score");
    submitBtn.addEventListener("click", function () {
        var initials = document.querySelector("#initials").value;
        submitHighScore(initials, score);
    })
}

function submitHighScore(initials, score) {
    // creates an object of game values
    var highScore = {
        playerName: initials,
        score: score
    };

    highScores.push(highScore);
    //if more than one, it will sort scores
    if (highScores.length > 1) {
        highScores.sort(function (playerOne, playerTwo) {
            return playerTwo.score - playerOne.score;
        })
    }
    localStorage.setItem("highScores", JSON.stringify(highScores));
    document.querySelector("#initials").value = "";
    viewHighScores();
};

function viewHighScores() {
    //hides other containers
    quizSlide.style.display = "none";
    startSlide.style.display = "none";
    highScoreContainer.style.display = "block";

    for (var i = 0; i < highScores.length; i++) {
        var scoreElem = document.createElement("li");
        var playerScore = highScores[i];
        scoreElem.textContent = playerScore.playerName + " " + playerScore.score;
        highScoreList.appendChild(scoreElem);
    }
};

function resetQuiz() {
    timeLeft = 40;
    startBtn.addEventListener("click", startQuiz);
    location.reload()
};

//loads the start screen again
function goBack() {
    startScreen()
    resetQuiz()
};

startBtn.addEventListener("click", startQuiz);

viewScoresBtn.addEventListener("click", viewHighScores);



//--------------------------------------------------//

//pseudocode
// when 'click' startbtn ---> timer starts, startslide addclass hide, quizslide remove class hide

//when 'click' answer ---> check answer, loop?
//if wrong ---> -10 seconds && wrong-container remove class hide
//if correct ---> correct container remove class hide
//new question

//when game is over ---> endgame-slide remove class hide ---> input score

//when view high scores click ---> highscores slide remove class hide

