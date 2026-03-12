const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyper Transfer Markup Level"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Python", "C++"],
        correct: 1
    },
    {
        question: "Which language runs in the browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");
const quizDiv = document.getElementById("quiz");

loadQuestion();

function loadQuestion() {
    selectedOption = null;
    nextBtn.textContent = currentQuestion === questions.length - 1 ? "Submit ✅" : "Next ➡";

    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");

        button.addEventListener("click", () => {
            document.querySelectorAll(".option-btn").forEach(btn =>
                btn.classList.remove("selected")
            );

            button.classList.add("selected");
            selectedOption = index;
        });

        optionsEl.appendChild(button);
    });
}

nextBtn.addEventListener("click", () => {
    if (selectedOption === null) return;

    if (selectedOption === questions[currentQuestion].correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");
    scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultDiv.classList.add("hidden");
    quizDiv.classList.remove("hidden");
    loadQuestion();
});