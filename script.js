//Starter variables
let StartQuiz = document.getElementById("start-quiz");
let startTime = 60;
let pageTimer = document.querySelector('#time-remaining');
let timeInterval;
let startButton = document.querySelector("#start-quiz");
let titleCard = document.querySelector("#title-card");
let questionSlot = document.querySelector("#question-slot");
let choicesSlot = document.querySelector("#answer-choices");
let counter = 0;

// Timer
startButton.addEventListener("click", function(event) {
    var timerInterval = setInterval(function() {
    startTime--;
    pageTimer.textContent = `Time: ${startTime}`;
//Stops the time at desired number
    if (startTime === 0) {
        clearInterval(timerInterval);
        }
    },1000);

titleCard.style.visibility = "hidden";
});
//Display questions
startButton.addEventListener("click", showQuestion);

function showQuestion() {
    var currentQuestion = questions[counter];
    questionSlot.textContent = currentQuestion.name;
    //Makes buttons for user to choose answer from
    currentQuestion.choices.forEach(makeButtons);

    function makeButtons(item) {
    let choiceBtn = document.createElement("button");
    choiceBtn.addEventListener("click", answerClick);
    choiceBtn.textContent = item;
    choicesSlot.appendChild(choiceBtn);
    choiceBtn.setAttribute("value", item.textContent);
    choiceBtn.className = "choice-btn"
    startButton.style.visibility = "hidden";
    };
}
//Change the question upon clicking an answer
function answerClick(choiceBtn){
    choiceBtn.preventDefault();
    if(choiceBtn.value === currentQuestion.answer){
        console.log('True!');
        
    } else {
        console.log('False!');
    }

    counter++

    if(counter < questions.length){
        choices.innerHTML = '';
        showQuestion();
    } else{
        alert('Game Over! Thanks for playing.');
    }
}
// Questions
let questions = [
    {
        name: "Commonly used data types DO NOT include:",
        answer: 'Alerts',
        choices: ["Strings","Boolean","Arrays","Alerts"],
    },
    {
        name: "Which language is the standard markup language for web documents?",
        answer: 'HTML',
        choices: ["HTML","CSS","JavaScript","Python"],
    },
    {
        name: "Which language is used primarily to stylize pages?",
        answer: 'CSS',
        choices: ["Python","JavaScript","CSS","HTML"],
    },
    {
        name: "True or False: JavaScript is derived from the Java programming language",
        answer: 'False',
        choices: ["True","False"],
    },
    {
        name: "If HTML is the 'noun' of a document and CSS makes the 'adjectives', which langauge makes the 'verbs'?",
        answer: 'JavaScript',
        choices: ["JavaScript","Ruby","Java","None of the above"],
    },
    {
        name: "Full stack development entails which of the following?",
        answer: 'All of the above',
        choices: ["Front end","Back end","All of the above","Neither"],
    },
    {
        name: "Which of the following symbols indicates that two variables are NOT equal?",
        answer: 'A != B',
        choices: ["A == B","A || B","A && B","A != B"],
    },
]   