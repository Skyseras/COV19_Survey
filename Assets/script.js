let resBtn = document.querySelector("#show-res-btn");
resBtn.style.display = "none";
var index = 0;

var questions = [{
        title: "Avez-vous une maladie chronique du foie ?",
        number: "21/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Êtes-vous enceinte ?",
        number: "22/24",
        type: "radio",
        options: ['Oui', 'Non', 'Non application'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?",
        number: "23/24",
        type: "radio",
        options: ['Oui', 'Non', 'Ne sait pas'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections.Voici quelques exemples: corticoïdes, méthotrexate,ciclosporine, tacrolimus, azathioprine,cyclophosphamide(liste non exhaustive).",
        number: "24/24",
        type: "radio",
        options: ['Oui', 'Non', 'Ne sait pas'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    }
];






document.getElementById("title").innerText = questions[index].title;
generateForm(index);

function generateForm(index) {
    let form = document.getElementById("form");
    let question = questions[index];

    form.innerHTML = '';
    switch (question.type) {




        default: break;
    }
}




const results = () => {
    questions[questions.length - 1].getAnswer();
    let results = '';
    for (let i = 0; i < questions.length; i++) {
        results += questions[i].title + ': ' + questions[i].answer + '<br>';
    }
    document.getElementById("form").innerHTML = results;
























}