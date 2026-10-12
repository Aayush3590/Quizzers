const allQuestions = {
    HTML: [
        {
            question: "What does HTML stand for?",
            answers: [
                { text: "Home Tool Markup Language", correct: false },
                { text: "Hyper Text Markup Language", correct: true },
                { text: "Hyperlinks and Text Markup Language", correct: false },
                { text: "Hyper Text Makeup Language", correct: false },
            ],
        },
        {
            question: "Which tag is used to create a hyperlink in HTML?",
            answers: [
                
                { text: "link", correct: false },
                { text: "href", correct: false },
                { text: "a", correct: true },
                { text: "hyperlink", correct: false },
            ],
        },
        {
            question: "What is the purpose of the <head> tag in HTML?",
            answers: [
                { text: "Contains metadata and links to resources", correct: true },
                { text: "Displays the title of the document", correct: false },
                { text: "Defines the body of the document", correct: false },
                { text: "Contains the main content of the webpage", correct: false },
            ],
        },
        {
            question: "Which attribute specifies an image source in an <img> tag?",
            answers: [
                { text: "href", correct: false },
                { text: "alt", correct: false },
                { text: "src", correct: true },
                { text: "path", correct: false },
            ],
        },
        {
            question: "What is the default file extension for HTML files?",
            answers: [
                { text: ".html", correct: true },
                { text: ".htm", correct: false },
                { text: ".web", correct: false },
                { text: ".xml", correct: false },
            ],
        },
        {
            question: "Which element represents the main content of a page?",
            answers: [
                { text: "<main>", correct: true },
                { text: "<aside>", correct: false },
                { text: "<footer>", correct: false },
                { text: "<summary>", correct: false },
            ],
        },
        {
            question: "Which attribute provides alternative text for an image?",
            answers: [
                { text: "title", correct: false },
                { text: "alt", correct: true },
                { text: "label", correct: false },
                { text: "caption", correct: false },
            ],
        },
        {
            question: "What does <!DOCTYPE html> tell the browser?",
            answers: [
                { text: "The page uses modern HTML", correct: true },
                { text: "The page is written in XML", correct: false },
                { text: "The page should use a dark theme", correct: false },
                { text: "The page has no external resources", correct: false },
            ],
        },
        {
            question: "Which HTML element creates an unordered list?",
            answers: [
                { text: "<ol>", correct: false },
                { text: "<li>", correct: false },
                { text: "<ul>", correct: true },
                { text: "<dl>", correct: false },
            ],
        },
        {
            question: "Which element is used to collect user input in a form?",
            answers: [
                { text: "<input>", correct: true },
                { text: "<output>", correct: false },
                { text: "<data>", correct: false },
                { text: "<meter>", correct: false },
            ],
        },
    ],
    CSS: [
        {
            question: "What does CSS stand for?",
            answers: [
                
                { text: "Colorful Style Sheets", correct: false },
                { text: "Cascading Style Sheets", correct: true },
                { text: "Computer Style Sheets", correct: false },
                { text: "Creative Style Sheets", correct: false },
            ],
        },
        {
            question: "Which property is used to change the text color in CSS?",
            answers: [
                
                { text: "font-color", correct: false },
                { text: "text-color", correct: false },
                { text: "background-color", correct: false },
                { text: "color", correct: true },
            ],
        },
        {
            question: "How do you select an element with the id 'header' in CSS?",
            answers: [
                { text: "#header", correct: true },
                { text: ".header", correct: false },
                { text: "header", correct: false },
                { text: "*header", correct: false },
            ],
        },
        {
            question: "Which property is used to set the background color in CSS?",
            answers: [
                
                { text: "color", correct: false },
                { text: "background-color", correct: true },
                { text: "bg-color", correct: false },
                { text: "background", correct: false },
            ],
        },
        {
            question: "What is the correct syntax for a CSS comment?",
            answers: [
                { text: "/* This is a comment */", correct: true },
                { text: "// This is a comment", correct: false },
                { text: "<This is a comment", correct: false },
                { text: "# This is a comment", correct: false },
            ],
        },
        {
            question: "Which CSS property adds space inside an element's border?",
            answers: [
                { text: "margin", correct: false },
                { text: "padding", correct: true },
                { text: "outline", correct: false },
                { text: "gap", correct: false },
            ],
        },
        {
            question: "Which selector targets elements with class name 'card'?",
            answers: [
                { text: "#card", correct: false },
                { text: "card", correct: false },
                { text: ".card", correct: true },
                { text: "*card", correct: false },
            ],
        },
        {
            question: "Which declaration creates a flex formatting context?",
            answers: [
                { text: "position: flex", correct: false },
                { text: "display: flex", correct: true },
                { text: "flex: display", correct: false },
                { text: "layout: flex", correct: false },
            ],
        },
        {
            question: "Which at-rule is commonly used for responsive breakpoints?",
            answers: [
                { text: "@supports", correct: false },
                { text: "@keyframes", correct: false },
                { text: "@media", correct: true },
                { text: "@import", correct: false },
            ],
        },
        {
            question: "In the CSS box model, what lies between content and border?",
            answers: [
                { text: "Margin", correct: false },
                { text: "Padding", correct: true },
                { text: "Outline", correct: false },
                { text: "Gap", correct: false },
            ],
        },
    ],
    JavaScript: [
        {
            question: "Which type is NOT a JavaScript data type?",
            answers: [
                { text: "boolean", correct: false },
                { text: "number", correct: false },
                { text: "float", correct: true },
                { text: "string", correct: false },
            ],
        },
        {
            question: "How do you write 'Hello World' in an alert box?",
            answers: [
                { text: "alert('Hello World');", correct: true },
                { text: "msg('Hello World');", correct: false },
                { text: "alertBox('Hello World');", correct: false },
                { text: "message('Hello World');", correct: false },
            ],
        },
        {
            question: "Which keyword declares a block-scoped variable that can be reassigned?",
            answers: [
                { text: "let", correct: true },
                { text: "var", correct: false },
                { text: "const", correct: false },
                { text: "static", correct: false },
            ],
        },
        {
            question: "Which method can be used to find the length of a string?",
            answers: [
            
                { text: "size", correct: false },
                { text: "length", correct: true },
                { text: "count", correct: false },
                { text: "chars", correct: false },
            ],
        },
        {
            question: "What is the correct syntax for a function in JavaScript?",
            answers: [
                { text: "def myFunction() {}", correct: false },
                { text: "func myFunction() {}", correct: false },
                { text: "function myFunction() {}", correct: true },
                { text: "create myFunction() {}", correct: false },
            ],
        },
        {
            question: "Which operator checks equality without converting operand types?",
            answers: [
                { text: "==", correct: false },
                { text: "=", correct: false },
                { text: "===", correct: true },
                { text: "!=", correct: false },
            ],
        },
        {
            question: "Which array method adds an item to the end of an array?",
            answers: [
                { text: "push()", correct: true },
                { text: "pop()", correct: false },
                { text: "shift()", correct: false },
                { text: "slice()", correct: false },
            ],
        },
        {
            question: "Which method converts a JSON string into a JavaScript value?",
            answers: [
                { text: "JSON.stringify()", correct: false },
                { text: "JSON.parse()", correct: true },
                { text: "JSON.convert()", correct: false },
                { text: "JSON.read()", correct: false },
            ],
        },
        {
            question: "Which method selects the first element matching a CSS selector?",
            answers: [
                { text: "document.getAll()", correct: false },
                { text: "document.querySelector()", correct: true },
                { text: "document.findElement()", correct: false },
                { text: "document.select()", correct: false },
            ],
        },
        {
            question: "Which method attaches an event handler to an element?",
            answers: [
                { text: "addEventListener()", correct: true },
                { text: "attachEventHandler()", correct: false },
                { text: "onEvent()", correct: false },
                { text: "createEvent()", correct: false },
            ],
        },
    ],
    Python: [
        {
            question: "Which symbol starts a single-line comment in Python?",
            answers: [
                { text: "#", correct: true },
                { text: "//", correct: false },
                { text: "<!--", correct: false },
                { text: "/*", correct: false },
            ],
        },
        {
            question: "Which built-in function displays text in the console?",
            answers: [
                { text: "echo()", correct: false },
                { text: "print()", correct: true },
                { text: "console.log()", correct: false },
                { text: "write()", correct: false },
            ],
        },
        {
            question: "Which collection stores an ordered, changeable sequence?",
            answers: [
                { text: "tuple", correct: false },
                { text: "set", correct: false },
                { text: "list", correct: true },
                { text: "frozenset", correct: false },
            ],
        },
        {
            question: "What keyword defines a function in Python?",
            answers: [
                { text: "func", correct: false },
                { text: "function", correct: false },
                { text: "def", correct: true },
                { text: "fun", correct: false },
            ],
        },
        {
            question: "Which keyword begins a conditional branch?",
            answers: [
                { text: "when", correct: false },
                { text: "if", correct: true },
                { text: "case", correct: false },
                { text: "condition", correct: false },
            ],
        },
        {
            question: "What does len([4, 8, 12]) return?",
            answers: [
                { text: "2", correct: false },
                { text: "3", correct: true },
                { text: "4", correct: false },
                { text: "24", correct: false },
            ],
        },
        {
            question: "Which value represents the absence of a value in Python?",
            answers: [
                { text: "null", correct: false },
                { text: "undefined", correct: false },
                { text: "None", correct: true },
                { text: "void", correct: false },
            ],
        },
        {
            question: "Which operator is used for exponentiation in Python?",
            answers: [
                { text: "^", correct: false },
                { text: "**", correct: true },
                { text: "^^", correct: false },
                { text: "//", correct: false },
            ],
        },
        {
            question: "Which loop is commonly used to iterate over items in a sequence?",
            answers: [
                { text: "foreach", correct: false },
                { text: "for", correct: true },
                { text: "repeat", correct: false },
                { text: "loop", correct: false },
            ],
        },
        {
            question: "Which built-in type stores key-value pairs?",
            answers: [
                { text: "list", correct: false },
                { text: "dict", correct: true },
                { text: "tuple", correct: false },
                { text: "str", correct: false },
            ],
        },
    ],
    "C++": [
        {
            question: "Which header provides std::cout and std::cin?",
            answers: [
                { text: "<string>", correct: false },
                { text: "<iostream>", correct: true },
                { text: "<input>", correct: false },
                { text: "<stdio>", correct: false },
            ],
        },
        {
            question: "Which operator writes output to std::cout?",
            answers: [
                { text: ">>", correct: false },
                { text: "<<", correct: true },
                { text: "::", correct: false },
                { text: "->", correct: false },
            ],
        },
        {
            question: "Which keyword declares a constant variable?",
            answers: [
                { text: "constant", correct: false },
                { text: "final", correct: false },
                { text: "const", correct: true },
                { text: "static", correct: false },
            ],
        },
        {
            question: "Which function is the usual entry point of a C++ program?",
            answers: [
                { text: "start()", correct: false },
                { text: "main()", correct: true },
                { text: "run()", correct: false },
                { text: "init()", correct: false },
            ],
        },
        {
            question: "Which loop checks its condition before each iteration?",
            answers: [
                { text: "do-while", correct: false },
                { text: "while", correct: true },
                { text: "switch", correct: false },
                { text: "case", correct: false },
            ],
        },
        {
            question: "Which standard type represents a sequence of characters?",
            answers: [
                { text: "std::text", correct: false },
                { text: "std::string", correct: true },
                { text: "std::chararray", correct: false },
                { text: "std::word", correct: false },
            ],
        },
        {
            question: "What does the address-of operator & produce when applied to an object?",
            answers: [
                { text: "The object's address", correct: true },
                { text: "The object's size", correct: false },
                { text: "A copy of the object", correct: false },
                { text: "The object's type", correct: false },
            ],
        },
        {
            question: "Which keyword creates an instance dynamically in C++?",
            answers: [
                { text: "alloc", correct: false },
                { text: "new", correct: true },
                { text: "create", correct: false },
                { text: "malloc", correct: false },
            ],
        },
        {
            question: "Which access specifier makes class members available to all callers?",
            answers: [
                { text: "private", correct: false },
                { text: "protected", correct: false },
                { text: "public", correct: true },
                { text: "internal", correct: false },
            ],
        },
        {
            question: "Which container is commonly used for a resizable sequence?",
            answers: [
                { text: "std::vector", correct: true },
                { text: "std::fixed_array", correct: false },
                { text: "std::pair", correct: false },
                { text: "std::stackframe", correct: false },
            ],
        },
    ],
    SQL: [
        {
            question: "Which SQL statement retrieves data from a table?",
            answers: [
                { text: "GET", correct: false },
                { text: "SELECT", correct: true },
                { text: "FETCH TABLE", correct: false },
                { text: "READ", correct: false },
            ],
        },
        {
            question: "Which clause filters rows by a condition?",
            answers: [
                { text: "ORDER BY", correct: false },
                { text: "WHERE", correct: true },
                { text: "GROUP BY", correct: false },
                { text: "INTO", correct: false },
            ],
        },
        {
            question: "Which clause sorts query results?",
            answers: [
                { text: "SORT", correct: false },
                { text: "ORDER BY", correct: true },
                { text: "ARRANGE", correct: false },
                { text: "GROUP BY", correct: false },
            ],
        },
        {
            question: "Which statement adds a new row to a table?",
            answers: [
                { text: "ADD ROW", correct: false },
                { text: "INSERT INTO", correct: true },
                { text: "UPDATE", correct: false },
                { text: "CREATE ROW", correct: false },
            ],
        },
        {
            question: "Which statement changes values in existing rows?",
            answers: [
                { text: "ALTER", correct: false },
                { text: "UPDATE", correct: true },
                { text: "MODIFY ROW", correct: false },
                { text: "REPLACE TABLE", correct: false },
            ],
        },
        {
            question: "Which constraint uniquely identifies each row in a table?",
            answers: [
                { text: "FOREIGN KEY", correct: false },
                { text: "PRIMARY KEY", correct: true },
                { text: "DEFAULT", correct: false },
                { text: "CHECK", correct: false },
            ],
        },
        {
            question: "Which function counts rows in a result set?",
            answers: [
                { text: "SUM(*)", correct: false },
                { text: "COUNT(*)", correct: true },
                { text: "TOTAL(*)", correct: false },
                { text: "NUMBER(*)", correct: false },
            ],
        },
        {
            question: "Which clause groups rows that share values?",
            answers: [
                { text: "GROUP BY", correct: true },
                { text: "ORDER BY", correct: false },
                { text: "WHERE", correct: false },
                { text: "JOIN BY", correct: false },
            ],
        },
        {
            question: "Which join returns rows with matching values in both tables?",
            answers: [
                { text: "CROSS JOIN", correct: false },
                { text: "INNER JOIN", correct: true },
                { text: "FULL OUTER JOIN", correct: false },
                { text: "SELF JOIN", correct: false },
            ],
        },
        {
            question: "Which statement removes a table and its definition?",
            answers: [
                { text: "DELETE TABLE", correct: false },
                { text: "DROP TABLE", correct: true },
                { text: "REMOVE TABLE", correct: false },
                { text: "CLEAR TABLE", correct: false },
            ],
        },
    ],
};

const totalQuestions = Object.values(allQuestions).reduce((total, questions) => total + questions.length, 0);
const screens = Array.from(document.querySelectorAll(".screen"));
const startScreen = document.getElementById("start-screen");
const categoryScreen = document.getElementById("category-screen");
const levelScreen = document.getElementById("level-screen");
const aiGeneratorScreen = document.getElementById("ai-generator-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const answerFeedback = document.getElementById("answer-feedback");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const timerProgress = document.getElementById("timer-progress");
const questionProgress = document.querySelector(".question-progress");
const questionProgressBar = document.getElementById("question-progress-bar");
let category = "";
let pace = "";
let questionTime = 30;
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = questionTime;
let answerLocked = false;
let currentQuizQuestions = [];
let isGeneratingQuiz = false;

document.getElementById("topic-count").textContent = Object.keys(allQuestions).length;
document.getElementById("question-count").textContent = totalQuestions;
document.querySelectorAll(".category-btn").forEach((button) => {
    button.querySelector(".category-count").textContent = allQuestions[button.dataset.category].length;
});

document.getElementById("play-btn").addEventListener("click", () => showScreen(categoryScreen));
document.getElementById("ai-generator-btn").addEventListener("click", () => {
    document.getElementById("ai-generator-error").hidden = true;
    showScreen(aiGeneratorScreen);
});

const aiTopicSelect = document.getElementById("ai-topic");
const customTopicField = document.getElementById("custom-topic-field");
const customTopicInput = document.getElementById("ai-custom-topic");
aiTopicSelect.addEventListener("change", () => {
    const isCustomTopic = aiTopicSelect.value === "Custom";
    customTopicField.hidden = !isCustomTopic;
    customTopicInput.required = isCustomTopic;
    if (!isCustomTopic) customTopicInput.value = "";
});

document.getElementById("ai-generator-form").addEventListener("submit", generateAiQuiz);

document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", () => {
        category = button.dataset.category;
        document.getElementById("chosen-category").textContent = category;
        showScreen(levelScreen);
    });
});

document.querySelectorAll(".level-btn").forEach((button) => {
    button.addEventListener("click", () => {
        pace = button.dataset.level;
        questionTime = Number(button.dataset.seconds);
        startQuiz();
    });
});

document.querySelectorAll("[data-back]").forEach((button) => {
    button.addEventListener("click", () => showScreen(document.getElementById(button.dataset.back)));
});

nextButton.addEventListener("click", handleNextButton);
document.getElementById("play-again-btn").addEventListener("click", () => {
    clearInterval(timer);
    category = "";
    pace = "";
    showScreen(startScreen);
});
document.getElementById("restart-quiz-btn").addEventListener("click", () => startQuiz(currentQuizQuestions));

function showScreen(activeScreen) {
    screens.forEach((screen) => {
        screen.hidden = screen !== activeScreen;
    });
}

function startQuiz(questions = allQuestions[category]) {
    currentQuizQuestions = [...questions];
    shuffledQuestions = shuffleArray([...currentQuizQuestions]);
    currentQuestionIndex = 0;
    score = 0;
    showScreen(quizScreen);
    document.getElementById("quiz-category-label").textContent = `${category} · ${pace}`;
    questionProgress.setAttribute("aria-valuemax", shuffledQuestions.length);
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    document.getElementById("question-count-label").textContent = `Question ${currentQuestionIndex + 1} of ${shuffledQuestions.length}`;
    const progress = (currentQuestionIndex / shuffledQuestions.length) * 100;
    questionProgressBar.style.width = `${progress}%`;
    questionProgress.setAttribute("aria-valuenow", currentQuestionIndex);

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        const key = document.createElement("span");
        const text = document.createElement("span");
        button.type = "button";
        button.className = "answer-option";
        button.dataset.correct = String(answer.correct);
        key.className = "option-key";
        key.textContent = String.fromCharCode(65 + index);
        text.className = "option-text";
        text.textContent = answer.text;
        button.append(key, text);
        button.addEventListener("click", () => selectAnswer(button));
        answerButtons.appendChild(button);
    });

    startTimer();
}

function resetState() {
    clearInterval(timer);
    answerLocked = false;
    nextButton.hidden = true;
    answerFeedback.hidden = true;
    answerFeedback.className = "answer-feedback";
    answerButtons.replaceChildren();
}

function selectAnswer(selectedButton) {
    if (answerLocked) return;
    answerLocked = true;
    clearInterval(timer);
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) score++;
    selectedButton.classList.add(isCorrect ? "correct" : "incorrect");
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });

    const feedback = isCorrect ? "Correct. Nice work!" : "Not quite. The correct answer is highlighted.";
    answerFeedback.textContent = currentQuestionExplanation(feedback);
    answerFeedback.classList.add(isCorrect ? "feedback-correct" : "feedback-incorrect");
    answerFeedback.hidden = false;
    nextButton.hidden = false;
    nextButton.focus();
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    clearInterval(timer);
    const total = shuffledQuestions.length;
    const incorrect = total - score;
    const percentage = Math.round((score / total) * 100);
    document.getElementById("result-category").textContent = `${category} · ${pace}`;
    saveQuizAttempt({ category, pace, score, total, percentage, completedAt: new Date().toISOString() });
    document.getElementById("final-score").textContent = score;
    document.getElementById("final-total").textContent = total;
    document.getElementById("final-percent").textContent = `${percentage}%`;
    document.getElementById("correct-count").textContent = score;
    document.getElementById("incorrect-count").textContent = incorrect;
    document.getElementById("result-title").textContent = percentage >= 80 ? "Excellent work!" : percentage >= 50 ? "Good progress!" : "Keep practicing!";
    document.getElementById("result-message").textContent = percentage >= 80
        ? "You have a strong grasp of this topic. Keep that momentum going."
        : percentage >= 50
            ? "You are building a solid foundation. A little more practice will help."
            : "Every attempt is a step forward. Try again and see what sticks.";
    showScreen(resultsScreen);
}

function saveQuizAttempt(attempt) {
    try {
        const savedAttempts = JSON.parse(localStorage.getItem("quizHistory")) || [];
        const attempts = Array.isArray(savedAttempts) ? savedAttempts : [];
        attempts.unshift(attempt);
        localStorage.setItem("quizHistory", JSON.stringify(attempts.slice(0, 50)));
    } catch (error) {
        console.warn("Could not save quiz history in this browser:", error);
    }
}

function startTimer() {
    timeLeft = questionTime;
    timerElement.textContent = timeLeft;
    timerProgress.style.width = "100%";
    timerProgress.classList.remove("timer-warning");

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        timerProgress.style.width = `${(timeLeft / questionTime) * 100}%`;
        if (timeLeft <= 5) timerProgress.classList.add("timer-warning");
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() {
    if (answerLocked) return;
    answerLocked = true;
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });
    answerFeedback.textContent = currentQuestionExplanation("Time is up. The correct answer is highlighted.");
    answerFeedback.classList.add("feedback-incorrect");
    answerFeedback.hidden = false;
    nextButton.hidden = false;
}

function shuffleArray(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    }
    return array;
}

function currentQuestionExplanation(feedback) {
    const explanation = shuffledQuestions[currentQuestionIndex].explanation;
    return explanation ? `${feedback} ${explanation}` : feedback;
}

async function generateAiQuiz(event) {
    event.preventDefault();
    if (isGeneratingQuiz) return;

    const errorMessage = document.getElementById("ai-generator-error");
    const submitButton = document.getElementById("generate-quiz-btn");
    const progressPanel = document.getElementById("ai-generation-progress");
    const progressText = document.getElementById("ai-generation-progress-text");
    const progressPercent = document.getElementById("ai-generation-progress-percent");
    const progressTrack = document.getElementById("ai-generation-progress-track");
    const progressBar = document.getElementById("ai-generation-progress-bar");
    const questionCount = Number(document.getElementById("ai-question-count").value);
    const difficulty = document.getElementById("ai-difficulty").value;
    const selectedTopic = aiTopicSelect.value;
    const topic = selectedTopic === "Custom" ? customTopicInput.value.trim() : selectedTopic;

    errorMessage.hidden = true;
    progressPanel.hidden = false;
    submitButton.hidden = true;
    progressText.textContent = `Generating questions: 0 of ${questionCount}`;
    progressPercent.textContent = "0%";
    progressTrack.setAttribute("aria-valuemax", questionCount);
    progressTrack.setAttribute("aria-valuenow", "0");
    progressBar.style.width = "0%";
    isGeneratingQuiz = true;

    try {
        const response = await fetch("/api/generate-quiz", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                topic: selectedTopic,
                customTopic: selectedTopic === "Custom" ? topic : undefined,
                difficulty,
                questionCount,
            }),
        });
        const result = await readQuizGenerationStream(response, (generatedCount) => {
            const percent = Math.round((generatedCount / questionCount) * 100);
            progressText.textContent = `Generating questions: ${generatedCount} of ${questionCount}`;
            progressPercent.textContent = `${percent}%`;
            progressTrack.setAttribute("aria-valuenow", generatedCount);
            progressBar.style.width = `${percent}%`;
        });
        if (!Array.isArray(result.questions) || result.questions.length === 0) {
            throw new Error("The AI returned no questions. Please try again.");
        }

        category = topic;
        pace = `${difficulty} · AI`;
        questionTime = 30;
        const questions = result.questions.map((question) => ({
            question: question.question,
            answers: question.options.map((text) => ({
                text,
                correct: text === question.correctAnswer,
            })),
            explanation: question.explanation,
        }));
        startQuiz(questions);
    } catch (error) {
        errorMessage.textContent = error instanceof TypeError
            ? "Could not reach the quiz service. Make sure the Quizzers server is running and try again."
            : error.message;
        errorMessage.hidden = false;
        progressPanel.hidden = true;
        submitButton.hidden = false;
    } finally {
        isGeneratingQuiz = false;
    }
}

async function readQuizGenerationStream(response, onProgress) {
    if (!response.ok || !response.headers.get("content-type")?.includes("text/event-stream")) {
        const responseText = await response.text();
        let errorResponse;
        try {
            errorResponse = responseText ? JSON.parse(responseText) : null;
        } catch {
            errorResponse = null;
        }
        if (errorResponse && typeof errorResponse.error === "string") {
            throw new Error(errorResponse.error);
        }
        throw new Error(response.ok
            ? "The quiz service returned an unreadable response. Please try again."
            : `The quiz service returned an unreadable error (HTTP ${response.status}). Restart the Quizzers server and try again.`);
    }

    if (!response.body) throw new Error("The quiz service did not provide a progress stream. Please restart Quizzers and try again.");

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let quiz;

    function processEvent(eventText) {
        const data = eventText
            .split(/\r?\n/)
            .filter((line) => line.startsWith("data:"))
            .map((line) => line.slice(5).trimStart())
            .join("\n");
        if (!data) return;

        let event;
        try {
            event = JSON.parse(data);
        } catch {
            throw new Error("The quiz service sent an invalid progress update. Please try again.");
        }
        if (event.type === "progress" && Number.isInteger(event.generatedCount)) {
            onProgress(event.generatedCount);
        } else if (event.type === "complete" && event.quiz) {
            quiz = event.quiz;
        } else if (event.type === "error") {
            throw new Error(event.error || "Quiz generation failed. Please try again.");
        }
    }

    try {
        while (true) {
            const { done, value } = await reader.read();
            buffer += decoder.decode(value, { stream: !done });
            const events = buffer.split(/\r?\n\r?\n/);
            buffer = events.pop() || "";
            events.forEach(processEvent);
            if (done) break;
        }
        if (buffer.trim()) processEvent(buffer);
    } catch (error) {
        await reader.cancel().catch(() => {});
        throw error;
    }
    if (!quiz) throw new Error("Quiz generation ended before all questions were ready. Please try again.");
    return quiz;
}
