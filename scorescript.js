
const username = document.getElementById("username");

const saveButton = document.getElementById("saveButton");

const finalScore = document.getElementById("finalScore");

const recentScore = localStorage.getItem("recentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const highScoresList = document.getElementById("highScoresList");


console.log(highScores);

const max_highscores = 5;

localStorage.setItem("highScores", JSON.stringify([]));
console.log(JSON.parse(localStorage.getItem("highScores")));

finalScore.innerText = recentScore;

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    liMaker();
    e.preventDefault();


const score = {
    score: recentScore,
    name: username.value
};
highScores.push(score);

highScores.sort( (a,b) => b.score - a.score);

highScores.splice(5);

localStorage.setItem("highScores", JSON.stringify(highScores));
 
};

const form = document.querySelector('form');
const ul = document.querySelector('ol');
const button = document.querySelector('button');
const input = document.getElementById('name');


const liMaker = text => {
    const li = document.createElement('li');
    li.textContent = username.value + "-" +  recentScore;
    ul.appendChild(li);
  }

