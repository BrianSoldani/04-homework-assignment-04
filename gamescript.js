

const question = document.getElementById("question");

const choices = Array.from(document.getElementsByClassName("choice-text"));

const questionCounterText = document.getElementById("questionCounter");

const scoreText = document.getElementById("score");

var countdown = document.getElementById("countdown");

var secondsLeft = 30;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


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


const correct_bonus = 10;
const max_questions = 10;



startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [ ... questions];
    console.log(availableQuestions);
    setTime();
    getNewQuestion();
    
};

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= max_questions){
        return window.location;
    }    

    questionCounter++;
    questionCounterText.innerHTML = questionCounter + "/" + max_questions;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    }); 


    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

};


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
            } else {
                secondsLeft -= 3;
            }

            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout( () => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
        
    });
});

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        countdown.textContent = secondsLeft + " seconds left";
        

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);
            countdown.innerHTML = "<a href=score.html>Time's Up! Click to see scores!</a>";
            goToScores()
        } else if(score === 100) {
            clearInterval(timerInterval);
            countdown.innerHTML = "<a href=score.html>100%! Click to see scores!</a>";
            goToScores()
        } else if(questionCounter === 10) {
            clearInterval(timerInterval);
            countdown.innerHTML = "<a href=score.html>Click to see scores!</a>";            
            goToScores()
        }
    }, 1000);
}

function goToScores() {
    questionCounterText.setAttribute("style", " color:white; padding: 5px; font-size:20px;");
    questionCounterText.innerHTML = "<a href=scores.html>Click to see scores!</a>";
   
};


incrementScore = num => {
    score += num;
    scoreText.innerText = score;
    localStorage.setItem("recentScore", score);
};


startGame();