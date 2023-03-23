let questions = [
    {
        "question": "Wie heißt die giftigste Spinne am Amazonas?",
        "answer_1": "Schwarze Witwe",
        "answer_2": "Brasilianische Wanderspinne",
        "answer_3": "Kreuzspinne",
        "answer_4": "Vogelspinne",
        "right_answer": 2
    },
    {
        "question": "Warum kann ein Kolibri auch rückwärts fliegen?",
        "answer_1": "Um sich in Sicherheit zu bringen, wenn ein Angreifer von vorn kommt",
        "answer_2": "Um seinen Schnabel aus einer langen Blüte zu ziehen",
        "answer_3": "Um ein Weibchen zu beeindrucken",
        "answer_4": "Weil es ihm ganz einfach Spaß macht",
        "right_answer": 2
    },
    {
        "question": "Können sich Schimpansen selbst im Spiegel erkennen?",
        "answer_1": "Nein, sie denken, das ist ein Artgenosse",
        "answer_2": "Sie haben Angst und rennen schnell weg",
        "answer_3": "Ja, sie haben ein Ich-Bewusstsein",
        "answer_4": "Sie können im Spiegel gar nichts erkennen",
        "right_answer": 3
    },
    {
        "question": "Was ist an den Plumploris so besonders?",
        "answer_1": "Sie haben extrem weiches Fell",
        "answer_2": "Sie können mit ihren großen Augen besonders gut sehen",
        "answer_3": "Sie fressen nur eine bestimmte Käferart",
        "answer_4": "Sie sind die einzigen giftigen Primaten der Erde",
        "right_answer": 4
    },
    {
        "question": "Warum fressen Wasserschweine ihren Kot?",
        "answer_1": "Weil er ihnen supergut schmeckt",
        "answer_2": "Weil sie sonst nicht genug Nahrung finden",
        "answer_3": "Weil sie ihre Nahrung zweimal verdauen müssen",
        "answer_4": "Das hat bisher niemand herausgefunden",
        "right_answer": 3
    },
];

let currentQuestion = 0;

function init() {
    document.getElementById('questionsammount').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        
    } else {
        let question = questions[currentQuestion];

        document.getElementById('currentquestion').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let result = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (question['right_answer'] == result) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById("button").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById("button").disabled = true;

    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}