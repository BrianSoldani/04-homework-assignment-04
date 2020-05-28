// Set the body to a variable
var body = document.body;

// Create all necessary elements
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var h3El = document.createElement("h3");
var h4El = document.createElement("h4");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var noticeEl = document.createElement("div");
var gameEl = document.createElement("button");
var forQuestionsEl = document.createElement("div");
var listEl = document.createElement("div");
var choice1 = document.createElement("div");
var choice2 = document.createElement("div");
var choice3 = document.createElement("div");
var choice4 = document.createElement("div");

// Set the text content of relevant elements
h1El.textContent = "Code Quiz";
h2El.textContent = "Are you ready to play?";
h3El.textContent = "High Scores";
h4El.textContent = "Countdown";
noticeEl.textContent = "This is a timed quiz for points!";
gameEl.textContent = "Click here to begin!";
forQuestionsEl.textContent = "";
choice1.textContent = "30 seconds on the clock!";
choice2.textContent = "10 questions!";
choice3.textContent = "100 possible points!";
choice4.textContent = "Wrong answers subtract time!";

// Append all of our elements
body.appendChild(h1El);
body.appendChild(h2El);
body.appendChild(h3El);
h3El.appendChild(infoEl);
body.appendChild(h4El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(noticeEl);
infoEl.appendChild(gameEl);
body.appendChild(forQuestionsEl);
forQuestionsEl.appendChild(listEl);
forQuestionsEl.appendChild(choice1);
forQuestionsEl.appendChild(choice2);
forQuestionsEl.appendChild(choice3);
forQuestionsEl.appendChild(choice4);

// Style all of our elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center; padding:5px;");
h2El.setAttribute("style", "margin:auto; width:100%; text-align:center; padding:5px;");
h2El.setAttribute("id", "score");
h3El.setAttribute("style", "margin:auto; width:100%; text-align:center; font-size:20px; padding:5px;");
h3El.setAttribute("id", "questionCounter");
h3El.setAttribute("a", "href=./04new04scorehw.html");
h4El.setAttribute("style", "margin:auto; width:100%; text-align:center; font-size:20px;");
h4El.setAttribute("id", "countdown");
infoEl.setAttribute("style", "margin:auto; width:100%; text-align:center;");
infoEl.setAttribute("id", "recentScore;");
imgEl.setAttribute("src", "assets/quiz-time-neon-sign.jpg");
imgEl.setAttribute("height", 120);
imgEl.setAttribute("width", 200);
imgEl.setAttribute("style", "margin-top:5px;");
gameEl.setAttribute("style", "font-size:22px; text-align:center; padding:5px; margin-top:5px; background: blue; color:white");
gameEl.setAttribute("id", "begin");
gameEl.setAttribute("a", "href=");
noticeEl.setAttribute("style", "font-size:25px; text-align:center;");
noticeEl.setAttribute("id", "question");
forQuestionsEl.setAttribute("style", "margin:auto; width:85%; font-size:22px; text-align:center;");
forQuestionsEl.setAttribute("id", "question");
listEl.setAttribute("style", "padding:5px; margin-top: 10px");
choice1.setAttribute("style", " color:white; background: #adadeb; padding: 5px; font-size:20px;");
choice1.setAttribute("class", "choice-text");
choice1.setAttribute("data-number", [1]);
choice1.setAttribute("a", "href=");
choice2.setAttribute("style", " color:white; background: #8585e0; padding: 5px; font-size:20px;");
choice2.setAttribute("class", "choice-text");
choice2.setAttribute("data-number", [2]);
choice2.setAttribute("a", "href=");
choice3.setAttribute("class", "choice-text");
choice3.setAttribute("data-number", [3]);
choice3.setAttribute("a", "href=");
choice3.setAttribute("style", " color:white; background: #7070db; padding: 5px; font-size:20px;");
choice4.setAttribute("class", "choice-text");
choice4.setAttribute("data-number", [4]);
choice4.setAttribute("a", "href=");
choice4.setAttribute("style", " color:white; background: #5c5cd6; padding: 5px; font-size:20px;");
body.setAttribute("style", "background: beige; padding:20px;");



// Start game information
// Variables and Constants for game play

var countdown = document.getElementById("countdown");

var secondsLeft = 30;

var noSecondsLeft = 0;

var penalty = secondsLeft - 3;

const question = document.getElementById("question");

const choices = Array.from(document.getElementsByClassName("choice-text"));

const questionCounterText = document.getElementById("questionCounter");

const addChoicesButtons = document.getElementById("question");

const scoreText = document.getElementById("score");



const correct_bonus = 10;
const max_questions = 10;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


//  Local storage items


var userInitials = localStorage.getItem("initials")

// const finalScore = document.getElementById("finalScore");
// const recentScore = localStorage.getItem("recentScore");
// recentScore.innerText = recentScore;


// username.addEventListener("keyup", () => {
//     saveScoreButton.disabled = !username.value;
// });

saveHighScore = e => {
    console.log("clicked on the save button!");
    e.preventDefault();
};



// List of questions and answers for game

let questions = [
    {
        question: "How do you close a script tag?",
        choice1: "<script>",
        choice2: "</script>",
        choice3: "<close script>",
        choice4: "</open>",
        answer: 2
    },
    {
        question: "Which extension is used on a JavaScript file?",
        choice1: "javascript.javascript",
        choice2: ".html",
        choice3: ".cssjs",
        choice4: ".js",
        answer: 4
    },
    {
        question: "Where are script tags placed in the html file?",
        choice1: "Right before the Footer tags",
        choice2: "Inside the Head tags",
        choice3: "Before the closing body tags",
        choice4: "In the CSS file",
        answer: 3
    },
    {
        question: "How do you access a Button Object in the DOM?",
        choice1: "document.getElementById(button)",
        choice2: "DOM, go get that button!",
        choice3: "document.setAttribute(button)",
        choice4: "None of these",
        answer: 1
    },
    {
        question: "How do you modify the content of an HTML element?",
        choice1: "<contentChange>",
        choice2: "Cascading Style Sheets",
        choice3: "innerHTML",
        choice4: "HTML.changeThis",
        answer: 3
    },
    {
        question: "How do you start a script tag?",
        choice1: "</script>",
        choice2: "<open>",
        choice3: "<close script>",
        choice4: "<script>",
        answer: 4
    },
    {
        question: "What attaches an event handler to the specified element?",
        choice1: "<javascript>",
        choice2: "addEventListener()",
        choice3: "offclick-js",
        choice4: "button-up()",
        answer: 2
    },
    {
        question: "Where are script tags placed in the html file?",
        choice1: "Right before the Footer tags",
        choice2: "Inside the Head tags",
        choice3: "None of these places",
        choice4: "All of these places",
        answer: 3
    },
    {
        question: "What does this do: element.addEventListener(click, function(){ alert(Hello World!);",
        choice1: "document.getElementById(button)",
        choice2: "DOM, go get that button!",
        choice3: "document.setAttribute(button)",
        choice4: "Alert 'Hello World!' when the user clicks on an element",
        answer: 4
    },
    {
        question: "JavaScript is the programming language of...",
        choice1: "HTML and the Web",
        choice2: "Cascading Style Sheets",
        choice3: "Middle Earth",
        choice4: "JavaScript is not a programming language",
        answer: 1
    }
];


// Start game functions

var beginButton = document.getElementById("begin");

beginButton.addEventListener("click", function (e) {
    setTime();
    hideButton();
    startGame();
  });

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    console.log(availableQuestions);
    endGame();
    getNewQuestion();
};

// Add something to stop time
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= max_questions){
        localStorage.setItem("recentScore", score);
    }    

    questionCounter++;
    questionCounterText.innerHTML = "Question " + questionCounter + "/" + max_questions;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    document.getElementById("question").setAttribute("style", "margin:auto; width:85%; font-size:25px; text-align:center; color:white; background: blue; padding:5px");
    document.getElementById("countdown").setAttribute("style", "margin:auto; width:35%; text-align:center; font-size:28px; color:white; background: blue; padding:5px");
    
    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    }); 

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};

// Add something for wrong answers to deduct time

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selcetedAnswer = selectedChoice.dataset["number"];


        const classToApply = 
            selcetedAnswer == currentQuestion.answer ? "correct" : "incorrect";

            if(classToApply === "correct"){
                incrementScore(correct_bonus);
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout( () => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 700);
        
    });
});
 


  console.log(choices)

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft + " seconds left";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            noTime();
        }
    }, 1000);
}


// function noTime() {
//         if(secondsLeft === 0) {
//             clearInterval();
//             alert("Out of time! Put your clicker down!");
//             newGame()
//         }
// }

incrementScore = num => {
    score += num;
    scoreText.innerText = "Your score is = " + (0+score);
};


function hideButton() {
    var removeButton = document.getElementById("begin");
    if (removeButton.style.display === "none") {
        removeButton.style.display = "block";
    } else {
        removeButton.style.display = "none";
    }
  };

function endGame() {
    if (questionCounter >= 10) {
        alert("That's all! Put your clicker down!");
         
    } else if (secondsLeft === 0) {
        alert("Time's up! Put your clicker down!");
          
    } else if (score === 100) {
        alert("You got 100%! Great job!");
      
    }
  };

//   function newGame() {
//     gameEl.removeAttribute("style", "display")
//     h3El.textContent = "High Scores";
//     h3El.setAttribute("style", "margin:auto; width:100%; text-align:center; font-size:20px; padding:5px;");
//     h4El.textContent = "Countdown";
//     h4El.setAttribute("style", "margin:auto; width:100%; text-align:center; font-size:20px;");

//     infoEl.removeChild(gameEl);
//     noticeEl.removeAttribute("id", "question");
//     body.removeChild(noticeEl);
//     body.removeChild(infoEl);
    


    // body.appendChild(infoEl);
    // infoEl.appendChild(gameEl);
    // gameEl.setAttribute("style", "display")
    // body.appendChild(noticeEl);
    // noticeEl.setAttribute("id", "question");
    // gameEl.setAttribute("style", "font-size:22px; text-align:center; padding:5px; margin-top:5px; background: blue; color:white");
    // gameEl.setAttribute("id", "begin");
    // gameEl.setAttribute("a", "href=");
  };
