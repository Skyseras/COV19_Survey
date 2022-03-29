let resBtn = document.querySelector("#show-res-btn");
resBtn.style.display = "none";
var index = 0;

var questions = [
    {
        title: "Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?",
        number: "1/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Quelle est votre température ?",
        number: "2/24",
        type: "number",
        answer: null,
        getAnswer: function() {
            let temp = document.getElementById("answer").value;
            if (temp > 35 && temp < 39) {
                this.answer = temp;
                return true;
            } else {
                document.getElementById('errors').innerHTML = "Ta température doit être entre 35°C et 39°C";
                return false;
            }

        }
    },
    {
        title: "Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?",
        number: "3/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ?",
        number: "4/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ?",
        number: "9/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? ",
        number: "10/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Comment vous sentez-vous ?",
        number: "11/24",
        type: "radio",
        options: ['Bien', 'Assez-bien', 'Mal', 'Très-mal'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous d’autre symptôme ?",
        number: "12/24",
        type: "text",
        answer: null,
        getAnswer: function() {
            this.answer = document.getElementById("answer").value;
            return true;
        }
    },
    {
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