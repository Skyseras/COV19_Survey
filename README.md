# COV19_Survey

Le présent algorithme a vocation à être utilisé par l’ensemble des services numériques d’orientation des personnes mis en œuvre dans le cadre de la crise sanitaire liée au Covid19.

Il a été élaboré avec des professionnelle de la santé afin d’aider les gens à surmonter la crise.

# I. Questionnaire d’auto-évaluation

### Symptômes :

● Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ? OUI / NON / Ne sait pas

● Si oui : quelle est votre température ?

    ▪ 35,5 - 37,7°C

    ▪ 37,8 – 38,9°C = seuil retenu

    ▪ >= 39°C ou <= 35,4°C => Facteur de gravité

    ▪ Non renseignée & OUI à question précédente = fièvre présente.

● Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ? OUI / NON

● Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ? OUI / NON

● Avez-vous un mal de gorge apparu ces derniers jours ? OUI / NON

● Avez-vous de la diarrhée ces dernières 24 heures(au moins 3 selles molles) ? OUI/ NON

● Avez-vous une fatigue inhabituelle ces derniers jours ? OUI / NON

    ● Si oui cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ? OUI / NON => Facteur de gravité.

● Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? OUI / NON => Facteur de gravité.

● Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? OUI / NON => Facteur de gravité.

● Comment vous sentez-vous ? Bien/Assez bien/mal/très mal: MAL/TRES MAL => Facteur de gravité.

● Avez-vous d’autre symptôme ? Champ libre.

### Facteur pronostique défavorable lié au terrain :

● Quel est votre âge ?

    ○ < 50 ans

    ○ 50-69 ans

    ○ >= 70 ans

    ○ STOP si < 15 ans : Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.

● Quel est votre poids ? Quelle est votre taille ?

● Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ? OUI / NON / Ne sait pas (= OUI).

● Êtes-vous diabétique ? OUI / NON

● Avez-vous ou avez-vous eu un cancer ? OUI / NON

● Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ? OUI / NON

● Avez-vous une insuffisance rénale chronique dialysée ? OUI / NON

● Avez-vous une maladie chronique du foie ? OUI / NON

● Êtes-vous enceinte ? OUI / NON / Non applicable

● Avez-vous une maladie connue pour diminuer vos défenses immunitaires OUI / NON / Ne sait pas (= NON)

● Prenez-vous un traitement immunosuppresseur ? C’est un traitement qui diminue vos défenses contre les infections. Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive). OUI / NON / Ne sait pas (= NON) Considéré positif si au moins 1 item OUI ou en gras (âge, IMC).

### Facteurs de gravité :

● Facteurs de gravité mineurs :

    o Fièvre > ou = 39°C

    o Fatigue : alitement > 50% du temps diurne

    o Sensation de malaise

● Facteurs de gravité majeurs :

    o Gêne respiratoire

    o Difficultés importantes pour s’alimenter ou boire depuis plus de 24h

    o Fièvre <= 35,4°


# II. Algorithme décisionnel

Patient avec fièvre, ou toux + mal de gorge, ou toux + courbatures ou fièvre + diarrhée : 

#### Tout patient sans facteur pronostique :

● Sans facteur de gravité & <50 ans : nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes.

● Sans facteur de gravité & 50-69 ans, ou avec au moins un facteur de gravité mineur : téléconsultation ou médecin généraliste ou visite à domicile 

#### Tout patient avec un facteur pronostique ou plus :

● Aucun facteur de gravité : téléconsultation ou médecin généraliste ou visite à domicile

● Un seul facteur de gravité mineur : téléconsultation ou médecin généraliste ou visite à domicile

● Au moins deux facteurs de gravité mineurs : appel 141 

#### Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur : Appel 141.

Pour tout patient orienté vers une téléconsultation ou médecin généraliste : préciser “appelez le 141 si une gêne respiratoire ou des difficultésimportantes pours’alimenter ou boire pendant plus de 24h apparaissent.”

#### Tout patient avec fièvre et toux :

##### Tout patient sans facteur pronostique :

● Sans facteur de gravité ou au moins 1 facteur de gravité mineur sans facteur de gravité majeur : téléconsultation ou médecin généraliste ou visite à domicile 

##### Tout patient avec un facteur pronostique ou plus :

● Aucun facteur de gravité : téléconsultation ou médecin généraliste ou visite à domicile

● Un seul facteur de gravité mineur : téléconsultation ou médecin généraliste ou visite à domicile

● Au moins deux facteurs de gravité mineurs : appel 141

##### Tout patient avec ou sans facteur pronostique avec au moins un facteur de gravité majeur : 

Appel 141

#### Tout patient avec un seul symptôme parmi fièvre, toux, mal de gorge, courbatures :

● Pas de facteur de gravité :

    ○ Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.

● Au moins un facteur de gravité ou un facteur pronostique :

    ○ Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141.

#### Tout patient avec aucun symptôme :

Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la situation. Pour toute information concernant le Covid-19 allez vers la page d’accueil.

#### Pour tous : 

Restez chez vous au maximum en attendant que les symptômes disparaissent. Prenez votre température deux fois par jour. Rappel des mesures d’hygiène. Algorithme potentiellement modifiable après étude de cas et veille scientifique.
