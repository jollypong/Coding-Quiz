//Elements

//Highscores element: 

//scorescreen element:
let scorescreenEl = document.querySelector(".scorescreen");
let finalscore = document.getElementById("#score");
let initialInput = document.getElementById("#initial");

//timer element:
let timerEl = document.getElementById("countdown");
let timeLeft = 60; 
let timerInterval; //for time to reach 0, and be referenced in endquiz fxn;

//quiz element:
let quizEl = document.querySelector(".quizContainer"); //selects whole div Quiz 
let questionEl = document.querySelector("#questions"); //selects h1 "questions"
let answerButton = document.querySelector(".answerButton"); //selects answerbutton where choices will display
let quizIndex = 0; //tracks current quiz 

//instruction element: 
let nextButton = document.querySelector("#nextbtn");
let instructionsEl = document.querySelector(".instructions");

//startscreen element: 
let startButton = document.querySelector("#startbtn");
let startEl = document.querySelector(".start");

//function for input questions/answers into html
function displayQuiz() { 
    hide(instructionsEl);
    show(quizEl);
    setTimer();

    let currentQuiz = quizBank[quizIndex]; //load current question from quizbank
    quizEl.textContent = currentQuiz.question; //input current question into html
    let answers = currentQuiz.choices; //input choices into html from index choices from indez quizbank
        console.log(answers);
        console.log(answers.length)

    for (let i = 0; i < answers.length; i++) { 
        answerButton.children[i].textContent = answers[i]
    }
    console.log(answerButton);
    console.log(answerButton.children[0]);
};

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

//function scorescreen
function scorescreen() { 
    
}


// function end quiz, hides quiz div and show score div
function endQuiz(){ 
    clearInterval(timerInterval); 
    timerEl.textContent = 0;
    if (timeLeft <0) { 
        timeLeft = 0;
    }
    hide(quizEl);
    show(scorescreenEl);
}

//function to settimer for quiz, end time if time is 0; 
function setTimer(){ 
    let timerInterval = setInterval(function() { 
        timeLeft--; 
        timerEl.textContent = timeLeft;
        if(timeLeft ===0){
            clearInterval(timerInterval)};
            endQuiz()
            console.log("timer is working")
    }
 ,1000)
}

//function to check answer, display right/wrong and add/subtr time


//function for input questions/answers into html
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
//         answerButton.children[i].textContent = answers[i]
//     }
//     console.log(answerButton);
//     console.log(answerButton.children[0]);
// };

//next button will display the quiz
nextButton.addEventListener("click", displayQuiz);
function instructions(){ 
    hide(instructionsEl);
    show(quizEl);
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