// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

//quizbank array? [(question, choices, answer)(question2, choices2, answer2)...]
let quizBank = [ 
    {
    question: "What is a window object?",
    choices: [ 
        "My window that I open to get fresh air",
        "My operating system",
        "My Internet Explorer window",
        "Where my document object is placed"
        ],
    answer: "Where my document object is on my browser"
    }, 
    {
    question: "What does DOM stand for?",
    choices:[
        "My friend Dominic",
        "Delayed Onset Muscle-soreness",
        "Document Object Model",
        "Dirty Old Man"
        ],
    answer: "Document Object Model"
    },
    {//question3
    question: "Which element's style am I trying to change below?" <br> 'imgEl[0].setAttribute("style", "width:50%")',
    choices:[
        "style", 
        "imgEl",
        "0",
        "First Image"
        ],
    answer:"First Image"
    },
    {//question4 
    question: "What is 'Element.append' used for?",
    choices: [
        "chooses appendix",
        "insert set of objects after the last child of a parent",
        "a pen",
        "insert set of objects to the children of specified parent node"
    ], //answer
    answer: "insert set of objects after the last child of a parent"
    },
    {//question 5
    question: "When using TimerInterval, what command will stop the timer?",
    choices: [
        "clearInterval()",
        "Alt + F4",
        "Escape",
        "setInterval"
    ],
    answer: "clearInterval()"
    },
];