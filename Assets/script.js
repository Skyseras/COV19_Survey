let resBtn = document.querySelector("#show-res-btn");
resBtn.style.display = "none";
var index = 0;

var questions = [{
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
            if (temp > 30 && temp < 45) {
                this.answer = temp;
                return true;
            } else {
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
        title: "Avez-vous un mal de gorge apparu ces derniers jours ?",
        number: "5/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous de la diarrhée ces dernières 24 heures(au moins 3 selles molles) ?",
        number: "6/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous une fatigue inhabituelle ces derniers jours ?",
        number: "7/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?",
        number: "8/24",
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
        title: "Quel est votre âge ?",
        number: "13/24",
        type: "number",
        answer: null,
        getAnswer: function() {
            let age = document.getElementById("answer").value;
            if (age > 8 && age < 110) {
                this.answer = age;
                return true;
            }
        }
    },
    {
        title: "Quel est votre poids ?",
        number: "14/24",
        type: "number",
        answer: null,
        getAnswer: function() {
            let poid = document.getElementById("answer").value;
            if (poid > 20 && poid < 250) {
                this.answer = poid;
                return true;
            } else {
                return false;
            }

        }
    },
    {
        title: "Quelle est votre taille ?",
        number: "15/24",
        type: "number",
        answer: null,
        getAnswer: function() {
            let taille = document.getElementById("answer").value;
            if (taille > 80 && taille < 250) {
                this.answer = taille;
                return true;
            } else {
                return false;
            }

        }
    },
    {
        title: "Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?",
        number: "16/24",
        type: "radio",
        options: ['Oui', 'Non', 'Ne sait pas'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Êtes-vous diabétique ?",
        number: "17/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous ou avez-vous eu un cancer ?",
        number: "18/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?",
        number: "19/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
            return true;
        }
    },
    {
        title: "Avez-vous une insuffisance rénale chronique dialysée ?",
        number: "20/24",
        type: "radio",
        options: ['Oui', 'Non'],
        answer: null,
        getAnswer: function() {
            this.answer = document.querySelector('input[name="answer"]:checked').value;
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
        title: "Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections.",
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

function startSurvey() {
    document.getElementById(0).style.display = 'none';
    document.getElementById(1).style.display = 'block';
    document.getElementById("barnum").innerText = questions[index].number;
    document.getElementById("barval").style.width = "4.2%";
    document.getElementById("quest").innerHTML = '<div class="d-flex justify-content-center align-items-center"><div class="cercle"></div></div>';
    document.getElementById("quest").classList.remove('mb-3');
    document.getElementById("quest").style.backgroundColor = '#88b7d3';
    document.getElementById("quest").style.width = '50px';
    document.getElementById("quest").style.height = '50px';

    document.getElementById("info").innerHTML = '';
    document.getElementById("info").classList.add('mb-3');
    document.getElementById("info").style.backgroundColor = '#1078AD';
    document.getElementById("info").style.width = '25px';
    document.getElementById("info").style.height = '25px';

}

function next() {
    // document.getElementById('errors').innerText = "";
    if (questions[index].getAnswer()) {
        index++;
        if (index < questions.length) {
            // document.getElementById('btnPrv').disabled = false;
            document.getElementById("barnum").innerText = questions[index].number;
            document.getElementById("barval").style.width = ((index + 1) * 4.2) + "%";
            document.getElementById("title").innerText = questions[index].title;
            generateForm(index);
            if (index == questions.length - 1) {
                resBtn.style.display = "block";
                document.querySelector("#s1").style.display = "none";
            }

        }
    }
}


document.getElementById("title").innerText = questions[index].title;
generateForm(index);

function generateForm(index) {
    let form = document.getElementById("form");
    let question = questions[index];

    form.innerHTML = '';
    switch (question.type) {
        case "radio":
            {

                for (let i = 0; i < question.options.length; i++) {

                    let radio = document.createElement("input");
                    radio.type = "radio";
                    radio.id = "radio-" + i;
                    radio.name = "answer";
                    radio.classList = "btn-check";
                    radio.value = question.options[i];
                    const label = document.createElement('label');
                    label.setAttribute("for", "radio-" + i);
                    label.classList = "btn bg-white p-3 border border-primary border-2 rounded text-primary btn-primary";
                    label.textContent = question.options[i];

                    form.appendChild(radio);
                    form.appendChild(label);
                    if (question.options[i] == question.answer) {
                        radio.checked = true;
                    }
                }
            }
            break;
        case "number":
            {
                let input = document.createElement("input");
                input.type = 'number';
                input.id = 'answer';
                input.value = question.answer;
                form.appendChild(input);
            }
            break;
        case "text":
            {
                let input = document.createElement("input");
                input.type = 'text';
                input.id = 'answer';
                input.value = question.answer;
                form.appendChild(input);
            }
            break;

        default:
            break;
    }
}



const results = () => {
    let nonefacGrav = 0;
    let facGravMaj = 0;
    let facGravmin = 0;
    let unfacGravmaj = 0;
    let unfacGravmin = 0;
    let deuxplusfacGravmaj = 0;
    let deuxplusfacGravmin = 0;
    let fievre = 0;

    let sansfacpro = 0;
    let age = questions[13].answer;

    if (questions[1].answer >= 39 || questions[1].answer <= 35) {
        fievre++;
    }

    if (questions[1].answer >= 39 || questions[7].answer == 'Oui' || questions[10].answer == ('Très-mal' || 'Mal')) {
        facGravmin++;
        if (questions[1].answer >= 39 && questions[7].answer != 'Oui' && questions[10].answer != ('Très-mal' || 'Mal') || questions[1].answer < 39 && questions[1].answer > 35 && questions[7].answer == 'Oui' && questions[10].answer != ('Très-mal' || 'Mal') || questions[1].answer < 39 && questions[1].answer > 35 && questions[7].answer != 'Oui' && questions[10].answer == ('Très-mal' || 'Mal')) {
            unfacGravmin++;
        } else {
            deuxplusfacGravmin++;
        }
    } else if (questions[1].answer <= 35 || questions[8].answer == 'Oui' || questions[9].answer == 'Oui') {
        facGravMaj++;
        if (questions[1].answer <= 35 && questions[8].answer != 'Oui' && questions[9].answer != 'Oui' || questions[1].answer < 39 && questions[1].answer > 35 && questions[8].answer == 'Oui' && questions[9].answer != ('Très-mal' || 'Mal') || questions[1].answer < 39 && questions[1].answer > 35 && questions[8].answer != 'Oui' && questions[9].answer == 'Oui') {
            unfacGravmaj++;
        } else {
            deuxplusfacGravmaj++;
        }
    } else {
        nonefacGrav++;
    }

    if (questions[15].answer == 'Non' && questions[16].answer != 'Oui' && questions[17].answer != 'Oui' && questions[18].answer != 'Oui' && questions[19].answer != 'Oui' && questions[20].answer != 'Oui' && questions[21].answer != 'Oui' && questions[22].answer != 'Oui' && questions[23].answer != 'Oui') {
        sansfacpro++;
    }





    // style
    document.getElementById("resu").innerHTML = '<div class="d-flex justify-content-center align-items-center"><div class="cercle"></div></div>';
    document.getElementById("resu").classList.remove('mb-3');
    document.getElementById("resu").style.backgroundColor = '#88b7d3';
    document.getElementById("resu").style.width = '50px';
    document.getElementById("resu").style.height = '50px';

    document.getElementById("quest").innerHTML = '';
    document.getElementById("quest").classList.add('mb-3');
    document.getElementById("quest").style.backgroundColor = '#1078AD';
    document.getElementById("quest").style.width = '25px';
    document.getElementById("quest").style.height = '25px';



    // add last question
    questions[questions.length - 1].getAnswer();
    let results = '';
    for (let i = 0; i < questions.length; i++) {
        results += questions[i].title + ': ' + questions[i].answer + '<br>';
    }
    document.getElementById("1").style.display = 'none';
    document.getElementById("resultats-test").style.display = 'block';
    document.getElementById("resultatquestions").innerHTML = results;




    
    if (age < 15) {
        document.getElementById("textresult").innerText = 'Prenez contact avec votre médecin généraliste au moindre doute.'
        document.getElementById("textresult2").innerText = 'Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15. Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.'
    }

    // Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée :
    else if (questions[1].answer >= 39 || questions[1].answer <= 35 || (questions[2].answer == 'Oui' && questions[4].answer == 'Oui') || (questions[2].answer == 'Oui' && questions[3].answer == 'Oui') || (questions[1].answer == 'Oui' && questions[5].answer == 'Oui')) {
        if (sansfacpro > 0) {
            if (nonefacGrav > 0 && age < 50 && age >= 15) {
                document.getElementById("textresult").innerText = 'Rester à votre domicile.'
                document.getElementById("textresult2").innerText = 'Nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes. Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.'
            } else if (facGravmin > 0 && age >= 50 && age <= 69) {
                document.getElementById("textresult").innerText = 'Rester à votre domicile.'
                document.getElementById("textresult2").innerText = 'Téléconsultation ou médecin généraliste ou visite à domicile. “appelez le 141 si une gêne respiratoire ou des difficultésimportantes pours’alimenter ou boire pendant plus de 24h apparaissent.” Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.'
            }
        } else if (sansfacpro == 0) {
            if (deuxplusfacGravmin > 0) {
                document.getElementById("textresult").innerText = 'Appelez 141 tout de suite.'
                document.getElementById("textresult2").innerText = 'Rester à votre domicile et appelez 141.'
            } else {
                document.getElementById("textresult").innerText = 'Rester à votre domicile.'
                document.getElementById("textresult2").innerText = 'Téléconsultation ou médecin généraliste ou visite à domicile. “appelez le 141 si une gêne respiratoire ou des difficultésimportantes pours’alimenter ou boire pendant plus de 24h apparaissent.” Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.'
            }
        } else if (facGravMaj > 0) {
            document.getElementById("textresult").innerText = 'Appelez 141 tout de suite.'
            document.getElementById("textresult2").innerText = 'Rester à votre domicile et appelez 141. Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.'
        }
    }
    // Tout patient avec fièvre et toux :

    //Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :

    //Tout patient avec aucun symptôme :
    else if (nonefacGrav > 0 && sansfacpro > 0) {
        document.getElementById("textresult").innerText = 'Votre santé est bonne.'
        document.getElementById("textresult2").innerText = 'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil. Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène.s'
    }
}