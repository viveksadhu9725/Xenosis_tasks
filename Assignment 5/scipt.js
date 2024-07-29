const quizData = [
    {
        question: "What does the term 'inheritance' refer to in object-oriented programming??",
        answers: ["The ability of a class to inherit attributes from a parent class", "The ability of a class to execute methods of another class", "The ability of a method to return multiple values", "The ability of a function to call itself"],
        correct: "The ability of a class to inherit attributes from a parent class"
    },
    {
        question: "In Java, which keyword is used to create an instance of a class?",
        answers: ["new", "create", "make", "instance"],
        correct: "new"
    },
    {
        question: "What is the keyword used to define a variable in JavaScript?",
        answers: ["var", "int", "let", "define"],
        correct: "var"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const feedbackContainer = document.getElementById('feedback-container');
const scoreContainer = document.getElementById('score-container');
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestion++;
    setNextQuestion();
});

function startQuiz() {
    startButton.classList.add('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestion < quizData.length) {
        showQuestion(quizData[currentQuestion]);
    } else {
        showScore();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    feedbackContainer.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.innerText === quizData[currentQuestion].correct;
    if (isCorrect) {
        score++;
        feedbackContainer.innerText = "Correct!";
    } else {
        feedbackContainer.innerText = "Wrong! The correct answer is " + quizData[currentQuestion].correct;
    }
    feedbackContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
}

function showScore() {
    questionElement.classList.add('hide');
    answerButtons.classList.add('hide');
    scoreContainer.classList.remove('hide');
    scoreContainer.querySelector('#score').innerText = score;
}
