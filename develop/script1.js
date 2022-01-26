//Elements
//Highscores element: 
let highScoreEl = document.querySelector(".highScore"); 
let scoreBoard = document.querySelector("#scoreboard");
let userScore = document.querySelector("#userScore");
let recordList = document.querySelector("#recordList")

//scorescreen element:
let scoreScreenEl = document.querySelector(".scoreScreen");
let finalScore = document.querySelector("#score");
let initialInput = document.querySelector("#initial");
let userId = document.querySelector("#userid");
let submitButton = document.querySelector("#submitbtn");
let record = [];

//timer element:
let timerEl = document.getElementById("displaySeconds");
let timeLeft = 60; 
let timerInterval; //for time to reach 0, and be referenced in endquiz fxn;

//quiz element:
let quizEl = document.querySelector(".quizContainer"); //selects whole div Quiz 
let questionEl = document.querySelector("#questions"); //selects h1 "questions"
let answerButton = document.querySelector(".answerButton"); //selects answerbutton where choices will display
let quizIndex = 0; //tracks current quiz 
let checkAnswerEl = document.querySelector("#checkAnswer");
let score = 0;

//instruction element: 
let nextButton = document.querySelector("#nextbtn");
let instructionsEl = document.querySelector(".instructions");

//startscreen element: 
let startButton = document.querySelector("#startbtn");
let startEl = document.querySelector(".start");

let quizBank = [ 
    {
    question: "What is a window object?",
    choices: [ 
        "My window that I open to get fresh air",
        "My operating system",
        "My Internet Explorer window",
        "Where my document object is placed"
        ],
    answer: 3
    }, 
    {
    question: "What does DOM stand for?",
    choices:[
        "My friend Dominic",
        "Delayed Onset Muscle-soreness",
        "Document Object Model",
        "Dirty Old Man"
        ],
    answer: 2
    },
    {//question3
    question: "Which element's style am I trying to change below? imgEl[0].setAttribute('style', 'width:50%')",
    choices:[
        "style", 
        "imgEl",
        "0",
        "First Image"
        ],
    answer: 3
    },
    {//question4 
    question: "What is 'Element.append' used for?",
    choices: [
        "chooses appendix",
        "insert set of objects after the last child of a parent",
        "a pen",
        "insert set of objects to the children of specified parent node"
    ], 
    answer: 1
    },
    {//question 5
    question: "When using TimerInterval, what command will stop the timer?",
    choices: [
        "clearInterval()",
        "Alt + F4",
        "Escape",
        "setInterval"
    ],
    answer: 0
    },
];

// function to quit Quiz?? (refresh?) or go back to startdiv? 
document.getElementById("quitbtn").addEventListener("click", location.reload.bind(location));

//function to load highscore
function highScore(){ 
    hide(scoreScreenEl);
    show(highScoreEl);
}

//function to load score from local 
function loadScore(){ 
    let userNameAndScore = JSON.parse(localStorage.getItem("initials-scores"))
    console.log(userNameAndScore);
    console.log("loadscore is working")

    if (userNameAndScore !== null) {
        
        for (let i = 0; i < 5; i++){ 
            let li = document.createElement("li"); 
        li.textContent = userNameAndScore[i].userName + "-" + userNameAndScore[i].score;
        }
    }
}

function checkScore(lastScore){
    console.log(lastScore);
    //check to see if there's any scores in localStorage
    let highScores = JSON.parse(localStorage.getItem("initials-scores"))
    if (!highScores){ 
        console.log("no highscores")
        highScores = [];
        highScores.push(lastScore);
        localStorage.setItem("initials-scores", JSON.stringify(highScores));
    }
    console.log(highScores);
}

//submit button will save score and load score, bring up highscore
submitButton.addEventListener("click", function(){ 
    event.preventDefault; 

    let userId = initialInput.value; 
    if (userId === ""){ //to check initial is not blank
        alert ("Your initials can't be blank!");
    }

    let userNameAndScore = { //create array for username and score
        userName: userId, 
        score: score};

    initialInput.value = ""; //clear initial input
    localStorage.setItem("userInitialsAndScore", JSON.stringify(userNameAndScore)); 
    console.log("storescore is working");
   
    checkScore(userNameAndScore);
    highScore();
    loadScore();
});

//function to display final score:
function scoreScreen() { 
    finalScore.textContent = "You scored: " + score + " out of " + quizBank.length;
}

// function end quiz, hides quiz div and show score div:
function endQuiz(){ 
    timeLeft= 0;
    clearInterval(timerInterval); 
    //if timer still ticking after quiz done
    hide(timerEl);
    hide(quizEl);
    show(scoreScreenEl);
    scoreScreen();
}

//function to set timer for quiz, end time if time is 0; 
function setTimer(){ 
    let timerInterval = setInterval(function() { 
        timeLeft--; 
        timerEl.textContent = timeLeft; //display time on screen
        if(timeLeft < 0){
            clearInterval(timerInterval);
            endQuiz();
        };
    }
 ,1000);
}

//fucntion to display right/wrong and add/subtr time
function showAnswer(choice){ 
    if (quizBank[quizIndex].answer == choice){ 
        checkAnswerEl.textContent = "Right!";
        timeLeft +=10; 
        score ++;
        nextQuestion();
    }else { 
        timeLeft -=10; 
        checkAnswerEl.textContent = "Wrong!";
        nextQuestion();
    }
}

//function to check answer
answerButton.addEventListener("click", function(event) {
    let checkAnswer = event.target;
    if (checkAnswer.matches("button")) {
        showAnswer(checkAnswer.value);
    }
})

//function to load next answer from the quizbank
function nextQuestion(){ 
    if (quizIndex < quizBank.length-1){ 
        quizIndex++; 
        displayQuiz();
    } else {
        endQuiz();
    }
}

function displayQuiz() { 
    let currentQuiz = quizBank[quizIndex]; //load current question from quizbank
    questionEl.textContent = currentQuiz.question; //input current question into html
    let answers = currentQuiz.choices; //input choices into html from index choices from indez quizbank

    for (let i = 0; i < answers.length; i++) { 
        answerButton.children[i].textContent = answers[i];
    }
};

function startQuiz (){ 
    hide(instructionsEl);
    show(quizEl);
    setTimer();
    displayQuiz();
}

//next button will display the quiz
nextButton.addEventListener("click", startQuiz);
function instructions(){ 
    hide(instructionsEl);
    displayQuiz();
    console.log(timeLeft)
};

//start button brings up instructions
startButton.addEventListener("click", instructions);
function instructions(){ 
    hide(startEl);
    show(instructionsEl);
};

//hide element
function hide(element) {
    element.setAttribute("style", "display: none;");
}
//show element
function show(element) {
    element.setAttribute("style", "display: block;");
}