//Elements

let finalscore = document.getElementsById("#score")

// let initialInput = document.getElementById("#initial")

//timer element:
let timerEl = document.getElementById("countdown");
let timeLeft = 60; 

//quiz element:
let quizEl = document.querySelector(".quizContainer"); //selects whole div Quiz 
let questionEl = document.querySelector("#questions"); //selects h1 "questions"
let answerButton = document.querySelector(".answerButton"); //selects answerbutton where choices will display
let quizIndex = 0; //tracks current quiz 

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
    
// };

// //function for timer, go next if timer = 0 or gameover
// if(correct){ 
//     timeLeft + 10
//     score ++
// }
// if(incorrect){ 
//     timeLeft -10 
// }
// //function for timer add time if correct, subtract time if wrong

function setTimer(){ 
    let timerInterval = setInterval(function() { 
        timeLeft--; 
        timerEl.textContent = timeLeft;
        if(timeLeft ===0){
            clearInterval(timerInterval)};
            console.log("timer is working")
    }
 ,1000)
}

//function to submit score
// document.getElementById("submitbtn").addEventListener("click", response);
// function submitHighscore(){ 
//     let initial = document.querySelector(#initial).value; 
//     let score = score
//     event.preventDefault(); 
//     console.log(event); 
//     let response = "Your score is saved and will display on Highscore!" 
//     responseEl.textContent = response; 
//     initial
// }

// //function to bring up highScores (render)
// document.getElementById("#highscorebtn").addEventListener("click", highScore());
// function renderhighScore(){ 
//     var initial = localStorage.getItem("initial"); 
//     let score = localStorage.getItem("score");

//     userInitialSpan.textContent = initial; 
//     userScore.textContent = score;
// }

// function end quiz 

function endQuiz(){ 
    clearInterval(timeInterval); 
    timerEl.textContent = 0;
    if (timeLeft <0) { 
        timeLeft = 0;
    }
    //hide quiz 
    //show results page 
}

//function for input questions/answers into html
function displayQuiz() { 
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

//start the quiz 
document.getElementById("nextbtn").addEventListener("click", function(){ 
    document.getElementById("instructions").hidden = true; 
    quizEl.hidden = false; 
    console.log("next button is working!");
    setTimer();
    displayQuiz();
}, false);


//start button brings up instructions
document.getElementById("startbtn").addEventListener("click", function(){ 
    document.getElementById("start").hidden = true; 
    document.getElementById("instructions").hidden = false; 
    console.log("start button is working!");
}, false);
