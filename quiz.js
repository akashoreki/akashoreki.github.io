const questions = [
    {
        question: "Who is the creator of this website?",
        answers: [
            { text: "Akash Bora", correct: true },
            { text: "Debanga Das", correct: false },
            { text: "Chinmoy Das", correct: false },
            { text: "Anowar Hussain", correct: false }
        ]
    },
    {
        question: "Which is the largest moon in the Solar System?",
        answers: [
            { text: "Titan", correct: false },
            { text: "Europa", correct: false },
            { text: "Ganymede", correct: true },
            { text: "Io", correct: false }
        ]
    },
    {
        question: "What is the speed of light in vacuum?",
        answers: [
            { text: "3 × 10^6 m/s", correct: false },
            { text: "3 × 10^8 m/s", correct: true },
            { text: "3 × 10^10 m/s", correct: false },
            { text: "3 × 10^12 m/s", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "Which is the smallest prime number?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false }
        ]
    },
    {
        question: "Which Indian scientist is known as the 'Missile Man of India'?",
        answers: [
            { text: "C.V. Raman", correct: false },
            { text: "Homi Bhabha", correct: false },
            { text: "A.P.J. Abdul Kalam", correct: true },
            { text: "Vikram Sarabhai", correct: false }
        ]
    },
    {
        question: "What is the chemical formula of ammonia?",
        answers: [
            { text: "NH3", correct: true },
            { text: "H2O", correct: false },
            { text: "CO2", correct: false },
            { text: "CH4", correct: false }
        ]
    },
    {
        question: "Which programming language is known as the 'mother of all languages'?",
        answers: [
            { text: "Python", correct: false },
            { text: "C", correct: true },
            { text: "Java", correct: false },
            { text: "JavaScript", correct: false }
        ]
    },
    {
        question: "What is the SI unit of electric current?",
        answers: [
            { text: "Volt", correct: false },
            { text: "Watt", correct: false },
            { text: "Ampere", correct: true },
            { text: "Ohm", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Alexander Fleming", correct: true },
            { text: "Louis Pasteur", correct: false },
            { text: "Joseph Lister", correct: false },
            { text: "Robert Koch", correct: false }
        ]
    }
];

const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = "true";
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        selectedButton.style.backgroundColor = "green";
    } else {
        selectedButton.style.backgroundColor = "red";
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "green";
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz Completed!");
        startQuiz();
    }
});

startQuiz();
