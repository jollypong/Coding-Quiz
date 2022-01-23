//Elements

//variables

let mainEl = document.getElementById("body");
let containterEl = document.querySelector(".container");
let controlEl = document.querySelector(".control")
let timerEl = document.querySelector(".timer");
let highscoreEl = document.querySelector("#highscore")
let initialInput = document.querySelector("#initial")
let submitEl = document.querySelector(".submit")
let responseEl = document.querySelector(".response")
let score = 0;

// let currentQuestion = 0; 
// let timeLeft = 0;
// let quizBank = [ 
//     {
//     question: "What is a window object?",
//     choices: [ 
//         "My window that I open to get fresh air",
//         "My operating system",
//         "My Internet Explorer window",
//         "Where my document object is placed"
//         ],
//     answer: "Where my document object is on my browser"
//     }, 
//     {
//     question: "What does DOM stand for?",
//     choices:[
//         "My friend Dominic",
//         "Delayed Onset Muscle-soreness",
//         "Document Object Model",
//         "Dirty Old Man"
//         ],
//     answer: "Document Object Model"
//     },
//     {//question3
//     question: "Which element's style am I trying to change below?" <br> 'imgEl[0].setAttribute("style", "width:50%")',
//     choices:[
//         "style", 
//         "imgEl",
//         "0",
//         "First Image"
//         ],
//     answer:"First Image"
//     },
//     {//question4 
//     question: "What is 'Element.append' used for?",
//     choices: [
//         "chooses appendix",
//         "insert set of objects after the last child of a parent",
//         "a pen",
//         "insert set of objects to the children of specified parent node"
//     ], //answer
//     answer: "insert set of objects after the last child of a parent"
//     },
//     {//question 5
//     question: "When using TimerInterval, what command will stop the timer?",
//     choices: [
//         "clearInterval()",
//         "Alt + F4",
//         "Escape",
//         "setInterval"
//     ],
//     answer: "clearInterval()"
//     },
// ];

// //function to quit Quiz?? (refresh?)
// document.getElementById("quitbtn").addEventListener("click", quit());
// function quit(){    
//     window.location.reload()
// };

// //function for timer, go next if timer = 0 or gameover
// //function for timer add time if correct, subtract time if wrong

// function setTimer(){ 
//  let timerInterval = setInterval(function() { 
//         let score = 0;
//         let timeLeft = 60; 
//         timeLeft--; 
//         timerEl.textContnet = timeLeft + " "; 

//         if(currentQuestion === 0 || timeLeft ===0){
//             clearInterval(timerInterval);
//             gameOver();

//         if(correct){ 
//             timeLeft + 10
//             score ++
//         }
//         if(incorrect){ 
//             timeLeft -10 
//         }
//     }
//  }
//  ,1000)
// }

// //function to submit score
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

// //function bring up scorescreen and option to save
// function gameOver(){ 
//     containterEl.textContent = " "; 
//     let score = document.createElement(""); 
    
//     return score;
// }

// //function to increase 

// //function for bring up next question from bank 
// function nextQuiz(index){
//     if(quizBank.length > 1 && timeLeft > 1){ 
//         showQuestion();
//     }
//     else( 
//         gameOver()
//     );
// }

//start function bring up a question from bank 

//bring up quiz questions 
document.getElementById("nextbtn").addEventListener("click", function(){ 
    document.getElementById("instructions").hidden = true; 
    document.getElementById("showQuiz").hidden = false;  
    console.log("next button is working!");
}, false);


//start button brings up instructions
document.getElementById("startbtn").addEventListener("click", function(){ 
    document.getElementById("start").hidden = true; 
    document.getElementById("instructions").hidden = false; 
    console.log("start button is working!");
}, false);
