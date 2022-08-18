//adding variable elements
var landing = document.getElementById("home");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var timer = document.getElementById(".timeCount");

//Quiz object arrays begin

var questionBank = [
  {
    question: "The condition in an if/else statement is enclosed with",
    answerA: "Qoutes",
    answerB: "Curly Brackets",
    answerC: "Parenthesis",
    answer: "C",
  },

  {
    question: "Arrays in JavaScript can be used to store____.",
    answerA: "Boleans",
    answerB: "Other aarays",
    answerC: "All of the above",
    answer: "C",
  },

  {
    question:
      "String values must be enclosed within____when being assigned to variables.",
    answerA: "Commas",
    answerB: "Curly brackets",
    answerC: "Quotes",
    answer: "B",
  },

  {
    question:
      "A very usueful tool used during development and debugging for printing content to the debugger is:",
    answerA: "For Loops",
    answerB: "Terminal/Bash",
    answerC: "JavaScript",
    answer: "A",
  },

  {
    question: `What does DOM stand for?`,
    answerA: `Document Object Model`,
    answerB: `Document Object Management`,
    answerC: `Data Output Message`,
    answer: `A`,
  },

  {
    question: `Which of the below will ask the user a question and the choice is returned as true or false?`,
    answerA: `prompt(question)`,
    answerB: `confirm(question)`,
    answerC: `alert(question)`,
    answer: `B`,
  },

  {
    question: `When creating a function, what goes after the name of the function?`,
    answerA: `Body of the function`,
    answerB: `Parameters in parenthesis`,
    answerC: `The word "function"`,
    answer: `B`,
  },

  {
    question: `Which below would you use to assign a value to a variable?`,
    answerA: `=`,
    answerB: `==`,
    answerC: `===`,
    answer: `A`,
  },

  {
    question: `Which of the below is not something you'd use to declare a variable?`,
    answerA: `let`,
    answerB: `var`,
    answerC: `assign`,
    answer: `C`,
  },

  {
    question: `Which is not a loop?`,
    answerA: `while`,
    answerB: `for`,
    answerC: `if`,
    answer: `C`,
  },

  {
    question: `A semicolon is used to____.`,
    answerA: `Separate statements`,
    answerB: `Link two functions`,
    answerC: `Compare expressions`,
    answer: `A`,
  },
];

//quiz content
function quizContent() {
  var quiz = questionBank[currentQuestion];
  question.textContent = quiz.question;
  answerA.textContent = quiz.answerA;
  answerB.textContent = quiz.answerB;
  answerC.textContent = quiz.answerC;
}

//button to start quiz when cliked
start.addEventListener("click", activateQuiz);

function activateQuiz() {
  landing.style.display = "none";
  quizContent();
  quiz.style.display = "block";
  countdown();
}

//set varibles for score
var currentQuestion = 0;
var score = 0;
//variabls for time
var time = 90;

//countdown function
function countdown() {
  console.log(countdown);
  var timerInterval = setInterval(function () {
    time--;

    document.getElementById("timerText").innerHTML = time;

    if (time === 0) {
      alert("Times Up!");
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}
