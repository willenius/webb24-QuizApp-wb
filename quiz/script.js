//These are all of my questions which are stored in arrays. This is a manually created quiz.

const quizQuestions = [
    {
        question: "Which nation won the UEFA Euros 1992 despite not even qualifying?",
        options: ["Germany", "England", "Denmark", "Czech Republic"],
        correctAnswer: "Denmark!",
    },

    {
        question: "Who is the highest goalscorer in Englands highest football league, Premier League?",
        options: ["Thierry Henry", "Wayne Rooney", "Alan Shearer", "Harry Kane"],
        correctAnswer: "Alan Shearer, who scored 260 goals in his PL-carreer.",
    },

    {
        question: "Which nation has won the most amount of FIFA world cups?",
        options: ["Argentina", "Brazil", "England", "Italy"],
        correctAnswer: "Brazil has won 5 world cups!"
    },
    {
        question: "What is Gareth Bale's favorite sport, (except for football?!) ",
        options: ["Rugby", "Golf", "Ice hockey", "Cricket"],
        correctAnswer: "Golf",
    },

    {
        question: ["Which goalkeeper ended up playing ice-hockey after his carreer?"],
        options: ["Petr Čech", "Iker Casillas", "Gianluigi Buffon", "Edvin van Der Sar"],
        correctAnswer: "Petr Čech decided to follow his boy dream of becoming a professional hockey goaltender in England.",

    }

];

//here's my function which randomizes all my quiz-questions.
function randomQuestion() {
    console.log(quizQuestions[(Math.floor(Math.random() * quizQuestions.length))]);
}

const quizContainer = document.getElementById("quizContainer"); //fetching existing div
const nextQuestionDiv = document.createElement("div"); //here i create a new element for a new question


//const randomQuestion = quizQuestions[Math.floor(math.random() * quizQuestions.length)];

newQuestionDiv.textContent = randomQuestion.question;
quizContainer.appendChild(newQuestionDiv);

//Nästa steg, displaya frågorna från html --> JS och in i chrome.

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener('click', function (event){
    alert("Start Quiz")
})

console.log();





//Mostly too see if my arrays are working.
//console.log(quizQuestions);
//fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple');
