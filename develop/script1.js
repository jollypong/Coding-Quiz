//Elements
//Highscores element: 
let highScoreEl = document.querySelector(".highScore"); 
let scoreBoard = document.querySelector("#scoreboard");

//scorescreen element:
let scoreScreenEl = document.querySelector(".scoreScreen");
let finalScore = document.getElementById("#score");
let initialInput = document.getElementById("#initial");
let scoreForm = document.getElementById("#scoreForm")

//timer element:
let timerEl = document.getElementById("displaySeconds");
let timeLeft = 60; 
let timerInterval; //for time to reach 0, and be referenced in endquiz fxn;

//quiz element:
let quizEl = document.querySelector(".quizContainer"); //selects whole div Quiz 
let questionEl = document.querySelector("#questions"); //selects h1 "questions"
let answerButton = document.querySelector(".answerButton"); //selects answerbutton where choices will display
let quizIndex = 0; //tracks current quiz 
let checkAnswerEl = document.querySelector("#checkAsnwer");
let score = 0;

function displayQuiz() { 
    hide(instructionsEl);
    show(quizEl);
    setTimer();

    let currentQuiz = quizBank[quizIndex]; //load current question from quizbank
    questionEl.textContent = currentQuiz.question; //input current question into html
    let answers = currentQuiz.choices; //input choices into html from index choices from indez quizbank
        console.log(answers);
        console.log(answers.length)

    for (let i = 0; i < answers.length; i++) { 
        answerButton.children[i].textContent = answers[i];
        console.log(answers[i])
    }
};

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
    hide (scoreScreenEl);
    show (highScore);
}

//function to render highscore
// function renderScore(){ 

// }

//function to load score from local 
function loadScore(){ 
    localStorage.getItem("initial"); 
    
}

//function for storing score to local 
function storeScore(){ 
    localStorage.setItem("initial", "score")
    localStorage.setItem("initialScore")
}

//function for scoreform to save score and load Highscores: 
// scoreForm.addEventListener("submit", function(){ 
//     event.preventDefault; 
//     let initial = initialInput.value; 
//     if (!initial){ 
//         return;
//     }
//     let initialScore = {Initials: initial, Score: score}; 
//     console.log(initialScore);
//     storeScore();
//     highScore();
// })

//function to display final score:
function scoreScreen() { 
    finalScore.textContent = "You've scored " + score; "/" + quizBank.length;
}

// function end quiz, hides quiz div and show score div:
function endQuiz(){ 
    clearInterval(timerInterval); 
    timerEl.textContent = 0;
    //if timer still ticking after quiz done
    timeLeft === 0;
    hide(timerEl)
    hide(quizEl);
    show(scoreScreenEl);
}

//function to settimer for quiz, end time if time is 0; 
function setTimer(){ 
    let timerInterval = setInterval(function() { 
        timeLeft--; 
        timerEl.textContent = timeLeft; //display time on screen
        if(timeLeft ===0){
            clearInterval(timerInterval);
            endQuiz();
        }; console.log("timer is working");
    }
 ,1000);
}

//fucntion to display right/wrong and add/subtr time
function checkAnswer(choice){ 
    if (quizBank[quizIndex].answer == choice){ 
        checkAnswerEl.setAttribute("class", "right");
        checkAnswerEl.textContent("Right!");
        secondsLeft +=10; 
        score ++
    }else { 
        secondsLeft -=10; 
        checkAnswerEl.setAttribute("class, wrong");
        checkAnswerEl.textContent("Wrong!");
    }
    nextQuestion();
}

//function to check answer
answerButton.addEventListener("click", function () {
    let element = event.target;
    if (element.matches("button")) {
        checkAnswer(element.value);
    }
})

//function to load next answer from the quizbank
function nextQuestion(){ 
    if (quizIndex < quizBank.length){ 
        quizIndex++; 
        displayQuiz();
    } else
    endQuiz;
}

// function for input questions/answers into html
// function displayQuiz() { 
//     hide(instructionsEl);
//     show(quizEl);
//     setTimer();

//     let currentQuiz = quizBank[quizIndex]; //load current question from quizbank
//     quizEl.textContent = currentQuiz.question; //input current question into html
//     let answers = currentQuiz.choices; //input choices into html from index choices from indez quizbank
//         console.log(answers);
//         console.log(answers.length)

//     for (let i = 0; i < answers.length; i++) { 
//         answerButton.children[i].textContent = answers[i];
//         console.log(answers[i])
//     }
//     console.log(answerButton);
//     console.log(answerButton.children[0]);
// };

//next button will display the quiz
nextButton.addEventListener("click", displayQuiz);
function instructions(){ 
    hide(instructionsEl);
    displayQuiz()
};

//start button brings up instructions
startButton.addEventListener("click", start);
function start(){ 
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