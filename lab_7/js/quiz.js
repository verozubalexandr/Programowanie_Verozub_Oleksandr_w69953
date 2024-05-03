class Pytanie {
    constructor(tresc, odpowiedz) {
        this.tresc = tresc;
        this.odpowiedz = odpowiedz;
    }
}

class Quiz {
    constructor() {
        this.pytania = [];
    }

    dodajPytanie(pytanie) {
        this.pytania.push(pytanie);
    }

    wyswietlPytania() {
        const questionList = document.getElementById('questionList');
        questionList.innerHTML = '';
        this.pytania.forEach((pytanie, index) => {
            const questionItem = document.createElement('div');
            questionItem.textContent = `Pytanie ${index + 1}: ${pytanie.tresc} - Odpowiedź: ${pytanie.odpowiedz}`;
            questionList.appendChild(questionItem);
        });
    }
}

const quiz = new Quiz();

function addQuestion() {
    const questionInput = document.getElementById('question').value;
    const answerInput = document.getElementById('answer').value;

    if (questionInput.trim() !== '' && answerInput.trim() !== '') {
        const pytanie = new Pytanie(questionInput, answerInput);
        quiz.dodajPytanie(pytanie);
        quiz.wyswietlPytania();
        document.getElementById('quizForm').reset();
    } else {
        alert('Wpisz treść pytania oraz odpowiedź.');
    }
}