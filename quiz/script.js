//These are all of my questions which are stored in arrays.
const quizQuestions = [
    {
        question: "Which nation won the UEFA Euros 1992 despite not even qualifying?",
        options: ["Germany", "England", "Denmark"],
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
        options: ["Rugby", "Golf", "Ice hockey"],
        correctAnswer: "Golf",
    },

    {
        question: ["Which goalkeeper ended up playing ice-hockey after his carreer?"],
        options: ["Petr Čech", "Iker Casillas", "Gianluigi Buffon"],
        correctAnswer: "Petr Čech decided to follow his boy dream of becoming a professional hockey goaltender in England.",

    }

];

//Mostly too see if my arrays are working.
console.log(quizQuestions);

fetch('https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple');