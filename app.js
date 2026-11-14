'use strict';
/* French Lab 0.4.1 · 100 ejercicios originales de la versión 0.4, conservados. */
const QUESTIONS=[
  {
    "id": "q001",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Elle ___ à Paris hier.",
    "answer": "est allée",
    "explain": "Aller usa être; con elle: allée.",
    "options": [
      "est allée",
      "a allé",
      "est allé"
    ]
  },
  {
    "id": "q002",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Nous ___ le musée samedi.",
    "answer": "avons visité",
    "explain": "Visiter usa avoir y participio visité.",
    "options": [
      "avons visité",
      "sommes visités",
      "avons visiter"
    ]
  },
  {
    "id": "q003",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Ils ___ à huit heures.",
    "answer": "sont partis",
    "explain": "Partir usa être y concuerda en masculino plural.",
    "options": [
      "sont partis",
      "ont partis",
      "sont parti"
    ]
  },
  {
    "id": "q004",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Marie et Julie ___ en retard.",
    "answer": "sont arrivées",
    "explain": "Arriver usa être; femenino plural: arrivées.",
    "options": [
      "sont arrivées",
      "ont arrivées",
      "sont arrivés"
    ]
  },
  {
    "id": "q005",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Tu ___ tes devoirs ?",
    "answer": "as fini",
    "explain": "Finir usa avoir: tu as fini.",
    "options": [
      "as fini",
      "es fini",
      "as finir"
    ]
  },
  {
    "id": "q006",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Mon frère ___ en 2001.",
    "answer": "est né",
    "explain": "Naître usa être; masculino singular: né.",
    "options": [
      "est né",
      "a né",
      "est née"
    ]
  },
  {
    "id": "q007",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Elles ___ du train.",
    "answer": "sont descendues",
    "explain": "Descendre sin objeto directo aquí usa être.",
    "options": [
      "sont descendues",
      "ont descendues",
      "sont descendu"
    ]
  },
  {
    "id": "q008",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Nous ___ une lettre.",
    "answer": "avons écrit",
    "explain": "Écrire: avoir + écrit.",
    "options": [
      "avons écrit",
      "sommes écrits",
      "avons écris"
    ]
  },
  {
    "id": "q009",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Paul ___ son manteau.",
    "answer": "a mis",
    "explain": "Mettre: avoir + mis.",
    "options": [
      "a mis",
      "est mis",
      "a mit"
    ]
  },
  {
    "id": "q010",
    "cat": "pc",
    "mode": "choice",
    "prompt": "Les enfants ___ au jardin.",
    "answer": "sont sortis",
    "explain": "Sortir sin objeto directo usa être; plural: sortis.",
    "options": [
      "sont sortis",
      "ont sortis",
      "sont sorti"
    ]
  },
  {
    "id": "q011",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Je ___ (prendre) le bus hier.",
    "answer": "ai pris",
    "explain": "Prendre usa avoir; participio pris."
  },
  {
    "id": "q012",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Elle ___ (venir) ce matin.",
    "answer": "est venue",
    "explain": "Venir usa être; femenino singular venue."
  },
  {
    "id": "q013",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Nous ___ (faire) une promenade.",
    "answer": "avons fait",
    "explain": "Faire usa avoir; fait."
  },
  {
    "id": "q014",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Ils ___ (aller) au cinéma.",
    "answer": "sont allés",
    "explain": "Aller usa être; masculino plural allés."
  },
  {
    "id": "q015",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Tu ___ (voir) ce film ?",
    "answer": "as vu",
    "explain": "Voir usa avoir; vu."
  },
  {
    "id": "q016",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Je (mujer) ___ (se lever) tôt.",
    "answer": "me suis levée",
    "explain": "Se lever es pronominal; femenino singular levée."
  },
  {
    "id": "q017",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Vous (varias mujeres) ___ (arriver) tôt.",
    "answer": "êtes arrivées",
    "explain": "Arriver con être; femenino plural arrivées."
  },
  {
    "id": "q018",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Il ___ (ouvrir) la porte.",
    "answer": "a ouvert",
    "explain": "Ouvrir: avoir + ouvert."
  },
  {
    "id": "q019",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Nous (grupo mixto) ___ (rester) à la maison.",
    "answer": "sommes restés",
    "explain": "Rester usa être; aquí grupo masculino o mixto."
  },
  {
    "id": "q020",
    "cat": "pc",
    "mode": "text",
    "prompt": "Completa: Elles ___ (partir) hier soir.",
    "answer": "sont parties",
    "explain": "Partir usa être; femenino plural parties."
  },
  {
    "id": "q021",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Je ___ comprends pas.",
    "answer": "ne",
    "explain": "Ne ... pas rodea al verbo en presente.",
    "options": [
      "ne",
      "pas",
      "jamais"
    ]
  },
  {
    "id": "q022",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Elle n’a ___ mangé.",
    "answer": "rien",
    "explain": "Ne ... rien: no ha comido nada.",
    "options": [
      "rien",
      "personne",
      "ne"
    ]
  },
  {
    "id": "q023",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Il ne voyage ___.",
    "answer": "jamais",
    "explain": "Ne ... jamais significa nunca.",
    "options": [
      "jamais",
      "ne",
      "rien de"
    ]
  },
  {
    "id": "q024",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Nous ne travaillons ___ ici.",
    "answer": "plus",
    "explain": "Ne ... plus significa ya no.",
    "options": [
      "plus",
      "ne",
      "aucune"
    ]
  },
  {
    "id": "q025",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Je n’ai ___ vu Paul.",
    "answer": "pas",
    "explain": "Con passé composé: ne + auxiliar + pas + participio.",
    "options": [
      "pas",
      "ne",
      "aucun"
    ]
  },
  {
    "id": "q026",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Elle ne connaît ___.",
    "answer": "personne",
    "explain": "Ne ... personne: no conoce a nadie.",
    "options": [
      "personne",
      "aucun",
      "pas de"
    ]
  },
  {
    "id": "q027",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Il n’y a ___ de place.",
    "answer": "plus",
    "explain": "Il n’y a plus de place: ya no queda sitio.",
    "options": [
      "plus",
      "personne",
      "ne"
    ]
  },
  {
    "id": "q028",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Tu n’as ___ compris ?",
    "answer": "rien",
    "explain": "Tu n’as rien compris: no has entendido nada.",
    "options": [
      "rien",
      "ne",
      "aucun"
    ]
  },
  {
    "id": "q029",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Je ne vais ___ au cinéma.",
    "answer": "jamais",
    "explain": "Ne ... jamais: nunca.",
    "options": [
      "jamais",
      "aucune",
      "ne"
    ]
  },
  {
    "id": "q030",
    "cat": "neg",
    "mode": "choice",
    "prompt": "Ils ne sont ___ arrivés.",
    "answer": "pas",
    "explain": "Con être, pas se coloca tras el auxiliar.",
    "options": [
      "pas",
      "ne",
      "aucun"
    ]
  },
  {
    "id": "q031",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: Je travaille ici. (ya no)",
    "answer": "Je ne travaille plus ici.",
    "explain": "Ne ... plus = ya no."
  },
  {
    "id": "q032",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: Il a téléphoné. (no)",
    "answer": "Il n’a pas téléphoné.",
    "explain": "La negación rodea al auxiliar a."
  },
  {
    "id": "q033",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: Elle sort souvent. (nunca)",
    "answer": "Elle ne sort jamais.",
    "explain": "Ne ... jamais reemplaza souvent."
  },
  {
    "id": "q034",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: Je vois quelqu’un. (nadie)",
    "answer": "Je ne vois personne.",
    "explain": "Quelqu’un pasa a personne."
  },
  {
    "id": "q035",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: Nous avons quelque chose. (nada)",
    "answer": "Nous n’avons rien.",
    "explain": "Quelque chose pasa a rien."
  },
  {
    "id": "q036",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: Tu as fini. (no)",
    "answer": "Tu n’as pas fini.",
    "explain": "Ne se elide ante as."
  },
  {
    "id": "q037",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: Ils sont venus. (no)",
    "answer": "Ils ne sont pas venus.",
    "explain": "La negación rodea sont."
  },
  {
    "id": "q038",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: Elle habite encore ici. (ya no)",
    "answer": "Elle n’habite plus ici.",
    "explain": "Encore pasa a ne ... plus."
  },
  {
    "id": "q039",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: Il mange toujours du pain. (nunca)",
    "answer": "Il ne mange jamais de pain.",
    "explain": "Con negación de cantidad, du cambia a de."
  },
  {
    "id": "q040",
    "cat": "neg",
    "mode": "text",
    "prompt": "Nie: J’ai rencontré quelqu’un. (nadie)",
    "answer": "Je n’ai rencontré personne.",
    "explain": "Con passé composé, personne sigue al participio."
  },
  {
    "id": "q041",
    "cat": "time",
    "mode": "choice",
    "prompt": "J’habite à Zaragoza ___ 2020.",
    "answer": "depuis",
    "explain": "La situación comenzó en 2020 y continúa.",
    "options": [
      "depuis",
      "il y a",
      "pendant"
    ]
  },
  {
    "id": "q042",
    "cat": "time",
    "mode": "choice",
    "prompt": "Elle est partie ___ deux jours.",
    "answer": "il y a",
    "explain": "Il y a sitúa una acción en el pasado.",
    "options": [
      "il y a",
      "depuis",
      "pendant"
    ]
  },
  {
    "id": "q043",
    "cat": "time",
    "mode": "choice",
    "prompt": "J’ai étudié ___ trois heures hier.",
    "answer": "pendant",
    "explain": "Pendant indica duración delimitada.",
    "options": [
      "pendant",
      "depuis",
      "il y a"
    ]
  },
  {
    "id": "q044",
    "cat": "time",
    "mode": "choice",
    "prompt": "Nous attendons ___ une heure.",
    "answer": "depuis",
    "explain": "La espera continúa.",
    "options": [
      "depuis",
      "pendant",
      "il y a"
    ]
  },
  {
    "id": "q045",
    "cat": "time",
    "mode": "choice",
    "prompt": "Il a travaillé à Lyon ___ six mois, puis il est parti.",
    "answer": "pendant",
    "explain": "Periodo terminado: pendant.",
    "options": [
      "pendant",
      "depuis",
      "il y a"
    ]
  },
  {
    "id": "q046",
    "cat": "time",
    "mode": "choice",
    "prompt": "Je l’ai rencontré ___ dix ans.",
    "answer": "il y a",
    "explain": "El encuentro ocurrió hace diez años.",
    "options": [
      "il y a",
      "depuis",
      "pendant"
    ]
  },
  {
    "id": "q047",
    "cat": "time",
    "mode": "choice",
    "prompt": "Elle apprend le français ___ septembre.",
    "answer": "depuis",
    "explain": "Aprendizaje que continúa.",
    "options": [
      "depuis",
      "pendant",
      "il y a"
    ]
  },
  {
    "id": "q048",
    "cat": "time",
    "mode": "choice",
    "prompt": "Nous avons voyagé ___ deux semaines l’été dernier.",
    "answer": "pendant",
    "explain": "Duración completa en el pasado.",
    "options": [
      "pendant",
      "depuis",
      "il y a"
    ]
  },
  {
    "id": "q049",
    "cat": "time",
    "mode": "choice",
    "prompt": "Le train est arrivé ___ cinq minutes.",
    "answer": "il y a",
    "explain": "Llegó hace cinco minutos.",
    "options": [
      "il y a",
      "depuis",
      "pendant"
    ]
  },
  {
    "id": "q050",
    "cat": "time",
    "mode": "choice",
    "prompt": "Ils sont mariés ___ 2015.",
    "answer": "depuis",
    "explain": "Estado que continúa desde 2015.",
    "options": [
      "depuis",
      "pendant",
      "il y a"
    ]
  },
  {
    "id": "q051",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: Je suis retraité ___ 2025.",
    "answer": "depuis",
    "explain": "La situación continúa."
  },
  {
    "id": "q052",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: Elle a quitté Paris ___ trois ans.",
    "answer": "il y a",
    "explain": "Hecho ocurrido hace tres años."
  },
  {
    "id": "q053",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: Nous avons marché ___ une heure hier.",
    "answer": "pendant",
    "explain": "Duración terminada."
  },
  {
    "id": "q054",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: Il habite ici ___ janvier.",
    "answer": "depuis",
    "explain": "Vive aquí desde enero y sigue aquí."
  },
  {
    "id": "q055",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: J’ai lu ___ deux heures samedi.",
    "answer": "pendant",
    "explain": "Actividad pasada de duración definida."
  },
  {
    "id": "q056",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: Tu es arrivé ___ dix minutes.",
    "answer": "il y a",
    "explain": "Llegaste hace diez minutos."
  },
  {
    "id": "q057",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: Nous étudions ensemble ___ septembre.",
    "answer": "depuis",
    "explain": "La actividad sigue en curso."
  },
  {
    "id": "q058",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: Ils ont vécu à Nantes ___ quatre ans avant de déménager.",
    "answer": "pendant",
    "explain": "Periodo cerrado en el pasado."
  },
  {
    "id": "q059",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: Je l’ai appelé ___ une semaine.",
    "answer": "il y a",
    "explain": "Llamada en un momento pasado."
  },
  {
    "id": "q060",
    "cat": "time",
    "mode": "text",
    "prompt": "Completa: Elle travaille dans cette entreprise ___ 2018.",
    "answer": "depuis",
    "explain": "Trabajo iniciado en 2018 y vigente."
  },
  {
    "id": "q061",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "Le ___ scolaire comprend les études suivies.",
    "answer": "parcours",
    "explain": "Parcours scolaire: trayectoria educativa.",
    "options": [
      "parcours",
      "loisir",
      "spectacle"
    ]
  },
  {
    "id": "q062",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "Un ___ est une personne qui exerce un métier.",
    "answer": "professionnel",
    "explain": "Professionnel: profesional.",
    "options": [
      "professionnel",
      "souvenir",
      "billet"
    ]
  },
  {
    "id": "q063",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "Pour chercher un emploi, on prépare un ___.",
    "answer": "CV",
    "explain": "CV: currículum.",
    "options": [
      "CV",
      "loisir",
      "musée"
    ]
  },
  {
    "id": "q064",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "Une ___ permet d’acquérir des compétences pour un métier.",
    "answer": "formation",
    "explain": "Formation: formación.",
    "options": [
      "formation",
      "sortie",
      "promenade"
    ]
  },
  {
    "id": "q065",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "Un ___ est une activité pendant le temps libre.",
    "answer": "loisir",
    "explain": "Loisir: actividad de ocio.",
    "options": [
      "loisir",
      "diplôme",
      "emploi"
    ]
  },
  {
    "id": "q066",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "On va au ___ pour voir une pièce.",
    "answer": "théâtre",
    "explain": "Théâtre: teatro.",
    "options": [
      "théâtre",
      "bureau",
      "stade"
    ]
  },
  {
    "id": "q067",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "Une ___ peut être une promenade ou une visite entre amis.",
    "answer": "sortie",
    "explain": "Sortie: salida.",
    "options": [
      "sortie",
      "étude",
      "retraite"
    ]
  },
  {
    "id": "q068",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "Une personne qui joue dans un film est un ___.",
    "answer": "acteur",
    "explain": "Acteur: actor.",
    "options": [
      "acteur",
      "médecin",
      "ingénieur"
    ]
  },
  {
    "id": "q069",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "Un ___ valide une formation ou des études.",
    "answer": "diplôme",
    "explain": "Diplôme: título académico.",
    "options": [
      "diplôme",
      "loisir",
      "rendez-vous"
    ]
  },
  {
    "id": "q070",
    "cat": "vocab",
    "mode": "choice",
    "prompt": "La ___ est la période après la vie professionnelle.",
    "answer": "retraite",
    "explain": "Retraite: jubilación.",
    "options": [
      "retraite",
      "naissance",
      "scolarité"
    ]
  },
  {
    "id": "q071",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: una trayectoria profesional",
    "answer": "un parcours professionnel",
    "explain": "Parcours professionnel."
  },
  {
    "id": "q072",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: una entrevista de trabajo",
    "answer": "un entretien d’embauche",
    "explain": "Entretien d’embauche: entrevista de trabajo."
  },
  {
    "id": "q073",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: un diploma",
    "answer": "un diplôme",
    "explain": "Diplôme lleva acento circunflejo."
  },
  {
    "id": "q074",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: un espectáculo",
    "answer": "un spectacle",
    "explain": "Spectacle es masculino."
  },
  {
    "id": "q075",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: una actividad al aire libre",
    "answer": "une activité en plein air",
    "explain": "En plein air: al aire libre."
  },
  {
    "id": "q076",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: un oficio",
    "answer": "un métier",
    "explain": "Métier: oficio/profesión."
  },
  {
    "id": "q077",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: una formación",
    "answer": "une formation",
    "explain": "Formation: formación."
  },
  {
    "id": "q078",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: un recuerdo",
    "answer": "un souvenir",
    "explain": "Souvenir: recuerdo."
  },
  {
    "id": "q079",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: un concierto",
    "answer": "un concert",
    "explain": "Concert: concierto."
  },
  {
    "id": "q080",
    "cat": "vocab",
    "mode": "text",
    "prompt": "Traduce al francés: el tiempo libre",
    "answer": "le temps libre",
    "explain": "Temps libre: tiempo libre."
  },
  {
    "id": "q081",
    "cat": "comm",
    "mode": "choice",
    "prompt": "— Tu veux aller au cinéma ? — ___ !",
    "answer": "Avec plaisir",
    "explain": "Avec plaisir acepta una invitación.",
    "options": [
      "Avec plaisir",
      "Je suis allé",
      "Depuis deux ans"
    ]
  },
  {
    "id": "q082",
    "cat": "comm",
    "mode": "choice",
    "prompt": "— On va au musée samedi ? — Désolé, ___.",
    "answer": "je ne peux pas",
    "explain": "Je ne peux pas rechaza con cortesía.",
    "options": [
      "je ne peux pas",
      "je suis parti",
      "je viens de là"
    ]
  },
  {
    "id": "q083",
    "cat": "comm",
    "mode": "choice",
    "prompt": "Para proponer una salida, di:",
    "answer": "Ça te dit d’aller au théâtre ?",
    "explain": "Ça te dit de ... ? propone una actividad.",
    "options": [
      "Ça te dit d’aller au théâtre ?",
      "Je suis né hier.",
      "Il y a deux ans."
    ]
  },
  {
    "id": "q084",
    "cat": "comm",
    "mode": "choice",
    "prompt": "— Tu aimes la randonnée ? — Oui, ___.",
    "answer": "j’adore ça",
    "explain": "J’adore ça expresa gusto.",
    "options": [
      "j’adore ça",
      "je suis randonnée",
      "je depuis randonnée"
    ]
  },
  {
    "id": "q085",
    "cat": "comm",
    "mode": "choice",
    "prompt": "Para preguntar por una experiencia pasada:",
    "answer": "Qu’est-ce que tu as fait hier ?",
    "explain": "Passé composé pregunta por una acción terminada.",
    "options": [
      "Qu’est-ce que tu as fait hier ?",
      "Tu fais quoi demain ?",
      "Depuis quand tu habites ici ?"
    ]
  },
  {
    "id": "q086",
    "cat": "comm",
    "mode": "choice",
    "prompt": "— Tu es libre dimanche ? — ___, j’ai un rendez-vous.",
    "answer": "Non, désolé",
    "explain": "Rechazo cortés con motivo.",
    "options": [
      "Non, désolé",
      "Je suis allé",
      "Je suis libre hier"
    ]
  },
  {
    "id": "q087",
    "cat": "comm",
    "mode": "choice",
    "prompt": "Para hablar de estudios anteriores:",
    "answer": "J’ai étudié le droit.",
    "explain": "J’ai étudié: estudios terminados.",
    "options": [
      "J’ai étudié le droit.",
      "Je vais étudier demain.",
      "Je suis étudier le droit."
    ]
  },
  {
    "id": "q088",
    "cat": "comm",
    "mode": "choice",
    "prompt": "— On se retrouve à 18 h ? — ___.",
    "answer": "D’accord !",
    "explain": "D’accord acepta un plan.",
    "options": [
      "D’accord !",
      "Depuis 18 h",
      "Il y a 18 h"
    ]
  },
  {
    "id": "q089",
    "cat": "comm",
    "mode": "choice",
    "prompt": "Para preguntar por gustos:",
    "answer": "Qu’est-ce que tu aimes faire ?",
    "explain": "Aimer faire pregunta por preferencias.",
    "options": [
      "Qu’est-ce que tu aimes faire ?",
      "Où es-tu né ?",
      "Depuis quand ?"
    ]
  },
  {
    "id": "q090",
    "cat": "comm",
    "mode": "choice",
    "prompt": "— Ça te dit de sortir ? — ___, je suis fatigué.",
    "answer": "Pas ce soir, merci",
    "explain": "Pas ce soir, merci rechaza amablemente.",
    "options": [
      "Pas ce soir, merci",
      "J’ai sorti hier",
      "Je suis depuis"
    ]
  },
  {
    "id": "q091",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa la invitación: Ça te ___ d’aller au cinéma ?",
    "answer": "dit",
    "explain": "Ça te dit de ... ?"
  },
  {
    "id": "q092",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa la aceptación: Avec ___.",
    "answer": "plaisir",
    "explain": "Avec plaisir."
  },
  {
    "id": "q093",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa el rechazo: Désolé, je ne ___ pas.",
    "answer": "peux",
    "explain": "Je ne peux pas."
  },
  {
    "id": "q094",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa: J’___ le théâtre. (me encanta)",
    "answer": "adore",
    "explain": "J’adore le théâtre."
  },
  {
    "id": "q095",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa: On se ___ samedi ? (nos vemos)",
    "answer": "voit",
    "explain": "On se voit samedi ?"
  },
  {
    "id": "q096",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa: Tu es ___ demain ? (libre)",
    "answer": "libre",
    "explain": "Tu es libre demain ?"
  },
  {
    "id": "q097",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa: J’ai ___ mes études en 2010. (terminado)",
    "answer": "terminé",
    "explain": "J’ai terminé mes études."
  },
  {
    "id": "q098",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa: J’ai ___ dans une école. (trabajado)",
    "answer": "travaillé",
    "explain": "J’ai travaillé dans une école."
  },
  {
    "id": "q099",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa: Je ___ rester chez moi. (prefiero)",
    "answer": "préfère",
    "explain": "Je préfère rester chez moi."
  },
  {
    "id": "q100",
    "cat": "comm",
    "mode": "text",
    "prompt": "Completa: Bonne ___ ! (buena idea)",
    "answer": "idée",
    "explain": "Bonne idée !"
  }
];
// Variantes equivalentes verificadas: no se infieren automáticamente sinónimos.
const VALID_ALTERNATIVES={
  q071:['une carrière professionnelle'],
  q072:['un entretien de recrutement'],
  q075:['une activité de plein air'],
  q097:['fini']
};
for(const q of QUESTIONS)if(VALID_ALTERNATIVES[q.id])q.alternatives=[...(q.alternatives||[]),...VALID_ALTERNATIVES[q.id]];
const CATEGORIES=[
  {id:'pc',name:'Passé composé',detail:'Auxiliares avoir/être, participios y concordancias',theory:'Para expresar una acción terminada: auxiliar avoir o être en presente + participio pasado. Con être, el participio concuerda normalmente con el sujeto: elle est allée, ils sont partis. Con avoir no concuerda con el sujeto; hay casos especiales con COD anterior que estudiaremos más adelante. Verbos como sortir o descendre cambian de auxiliar según su construcción.',example:'Hier, elles sont arrivées. Nous avons visité le musée.'},
  {id:'neg',name:'La négation',detail:'ne… pas, jamais, plus, rien, personne',theory:'En francés escrito, ne/n’ va antes del verbo conjugado. En passé composé: ne + auxiliar + pas/jamais/plus/rien + participio. Personne suele situarse después del participio como complemento: Je n’ai vu personne. Después de la negación de cantidad normalmente aparece de/d’ delante de un sustantivo.',example:'Je n’ai jamais visité Lyon. Je ne travaille plus ici.'},
  {id:'time',name:'Il y a · pendant · depuis',detail:'Tres expresiones temporales que no debes confundir',theory:'Depuis indica desde cuándo se mantiene una situación o cuánto tiempo lleva vigente. Il y a sitúa una acción en el pasado (hace…). Pendant expresa cuánto duró una actividad, generalmente ya terminada. Debes fijarte en el sentido completo de la frase.',example:'J’habite ici depuis 2020. Il est parti il y a trois jours. J’ai marché pendant une heure.'},
  {id:'vocab',name:'Parcours et loisirs',detail:'Estudios, trabajo, vida personal y ocio',theory:'Parcours significa trayectoria; métier, oficio; formation, formación; diplôme, título; retraite, jubilación; loisirs, ocio; sortie, salida; spectacle, espectáculo. Aprende el género y la ortografía de cada palabra, con especial atención a los acentos.',example:'J’ai suivi une formation. Pendant mon temps libre, je vais au théâtre.'},
  {id:'comm',name:'Communication',detail:'Experiencias, gustos, propuestas y respuestas',theory:'Para contar experiencias: J’ai travaillé…, J’ai étudié… Para hablar de gustos: J’aime, J’adore, Je préfère. Para proponer algo: Ça te dit de… ? On se voit samedi ? Para aceptar: Avec plaisir ! D’accord ! Para rechazar: Désolé, je ne peux pas.',example:'— Ça te dit d’aller au cinéma ? — Avec plaisir !'}
];
const UNITS=['Nouvelles vies','Je me souviens','Comme à la maison','Tous pareils, tous différents','En route vers le futur !','En cuisine','À votre santé !','Dans les médias','Consommer responsable','Envies d’ailleurs ?','De jolis parcours','Soif de nature'];
const KEY='frenchLab_v04_unite1_progress'; // Clave de 0.4: conserva los progresos de la misma ubicación/origen.
const Core=globalThis.FrenchLabCore;
if(!Core)throw new Error('No se ha cargado french-lab-core.js');
const app=document.getElementById('app');
let session=null, storageError=false;
const idToQuestion=new Map(QUESTIONS.map(q=>[q.id,q]));
function defaults(){return {seen:{},skip:false,attempts:[],completed:0,unitStatus:{1:'current'},unitNow:1,sessionHistory:[]}}
function sanitizeProgress(raw){
  const base=defaults();
  if(!raw||typeof raw!=='object'||Array.isArray(raw))return base;
  const attempts=Array.isArray(raw.attempts)?raw.attempts.filter(a=>a&&typeof a.id==='string'&&typeof a.ok==='boolean').slice(-20000).map(a=>({
    id:a.id,cat:typeof a.cat==='string'?a.cat:'',unit:Number.isInteger(Number(a.unit))?Number(a.unit):1,ok:a.ok,
    kind: ['correct','accent','other','empty'].includes(a.kind)?a.kind:(a.ok?'correct':'other'),
    at:typeof a.at==='string'?a.at:'',entered:typeof a.entered==='string'?a.entered.slice(0,240):'',
    expected:typeof a.expected==='string'?a.expected.slice(0,240):''
  })):[];
  const status={1:'current'};
  if(raw.unitStatus&&typeof raw.unitStatus==='object')for(const [k,v] of Object.entries(raw.unitStatus)){
    if(Number.isInteger(Number(k)) && Number(k)>=1 && Number(k)<=12 && ['current','studied','pending'].includes(v))status[k]=v;
  }
  const seen={};if(raw.seen&&typeof raw.seen==='object')for(const c of CATEGORIES)if(raw.seen[c.id])seen[c.id]=true;
  const now=Number(raw.unitNow)||1;
  return {seen,skip:!!raw.skip,attempts,completed:Number.isFinite(raw.completed)?Math.max(0,Math.floor(raw.completed)):0,
    unitStatus:status,unitNow:now>=1&&now<=12?now:1,
    sessionHistory:Array.isArray(raw.sessionHistory)?raw.sessionHistory.slice(-100).filter(x=>x&&typeof x==='object'):[]};
}
function load(){try{return sanitizeProgress(JSON.parse(localStorage.getItem(KEY)))}catch{return defaults()}}
let state=load();
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pct=(a,b)=>b?Math.round(a/b*100)+'%':'—';
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));storageError=false;return true}catch(e){storageError=true;console.warn('No se ha podido guardar el progreso',e);return false}}
function available(unit){return QUESTIONS.some(q=>Number(q.unit??1)===Number(unit))}
function normalizedStatuses(){
  const statuses={...state.unitStatus};for(let i=1;i<=12;i++)if(!available(i))statuses[i]='pending';
  if(!Object.entries(statuses).some(([k,v])=>v==='current'&&available(Number(k)))){
    const availableStudied=Object.entries(statuses).filter(([k,v])=>v==='studied'&&available(Number(k)));
    if(availableStudied.length)state.unitNow=Number(availableStudied.at(-1)[0]);
  }
  return statuses;
}
function currentUnit(){const statuses=normalizedStatuses();const active=Object.entries(statuses).find(([k,v])=>v==='current'&&available(Number(k)));return active?Number(active[0]):state.unitNow||1}
function summary(){return Core.summarize(state.attempts,QUESTIONS)}
function render(html){app.innerHTML=head()+html}
function head(){return `<header class="top"><div><div class="tag">Ton laboratoire de français</div><div class="brand">🇫🇷 French Lab <span class="pill">0.4.1</span></div></div><button class="btn outline smallbtn" data-act="home">Inicio</button></header>`}
function home(){
  session=null;
  const s=summary();
  const buttons=`<div class="grid practice-grid"><button class="practice" data-act="start" data-mode="mix-unit"><span class="practice-icon">🎯</span><strong>Mix de la unidad actual</strong><span>10 preguntas de distintas materias de la unidad en estudio</span></button><button class="practice" data-act="start" data-mode="mix-course"><span class="practice-icon">🔀</span><strong>Mix de todo lo estudiado</strong><span>10 preguntas de todas las unidades activas, repartidas de forma equilibrada</span></button><button class="practice" data-act="start" data-mode="review"><span class="practice-icon">🔁</span><strong>Repasar fallos (${s.pending.length})</strong><span>Repite errores ortográficos y gramaticales pendientes</span></button></div>`;
  render(`<section class="panel"><div class="tag">A2 · Unité ${currentUnit()} · ${esc(UNITS[currentUnit()-1])}</div><h1>Bonjour !</h1><p>La Unité 1 está en estudio. Las demás se incorporarán a medida que avances en clase.</p><div class="grid kpis"><div class="note"><div class="stat">${QUESTIONS.length}</div><small>Ejercicios disponibles</small></div><div class="note"><div class="stat">${state.completed}</div><small>Sesiones terminadas</small></div><div class="note"><div class="stat">${pct(s.correct,s.total)}</div><small>Aciertos completos</small></div><div class="note"><div class="stat">${s.accent}</div><small>Errores de acentuación</small></div></div><div class="actions"><button class="btn alt" data-act="evolution">Mi evolución y acentos</button></div>${storageError?'<p class="error">Atención: este navegador no está guardando el progreso. Exporta tus resultados.</p>':''}</section><section class="panel"><h2>¿Qué quieres practicar hoy?</h2>${buttons}</section><section class="panel"><h2>Materias de la Unité 1</h2><div class="grid">${CATEGORIES.map(c=>`<button class="topic" data-act="topic" data-cat="${c.id}"><span>20 ejercicios disponibles</span><strong>${esc(c.name)}</strong><span>${esc(c.detail)}</span></button>`).join('')}</div></section><section class="panel"><h2>Programa de las 12 unidades</h2><p class="muted">Los temas nuevos solo participarán en el mix acumulativo cuando tengan preguntas y estén marcados como «En curso» o «Estudiada».</p><div class="units">${UNITS.map((u,i)=>{const n=i+1,has=available(n),status=normalizedStatuses()[n]||'pending';return `<div class="unit"><span><strong>Unité ${n}</strong> · ${esc(u)}${has?'':'<br><small>Ejercicios aún no incorporados</small>'}</span>${has?`<select class="unit-select" data-unit="${n}" aria-label="Estado de la unidad ${n}"><option value="current" ${status==='current'?'selected':''}>En curso</option><option value="studied" ${status==='studied'?'selected':''}>Estudiada</option><option value="pending" ${status==='pending'?'selected':''}>Pendiente</option></select>`:'<span class="pill">Pendiente</span>'}</div>`}).join('')}</div></section><section class="panel"><h2>Guardar o recuperar progreso</h2><p>Los resultados se guardan únicamente en este navegador, sin sincronización entre ordenador y OPPO. Si pruebas otra carpeta o navegador, puedes exportar un JSON e importarlo.</p><div class="actions"><button class="btn alt" data-act="export">Exportar copia JSON</button><button class="btn outline" data-act="import">Importar copia JSON</button><button class="btn outline" data-act="reset">Borrar progreso</button></div><input hidden id="importFile" type="file" accept=".json,application/json"></section>`);
}
function topic(id){const c=CATEGORIES.find(c=>c.id===id);if(!c)return;if(!state.seen[id]||!state.skip)theory(id,false);else start(id)}
function theory(id,fromSession){
  const c=CATEGORIES.find(c=>c.id===id);if(!c)return;
  state.seen[id]=true;save();
  render(`<section class="panel"><span class="pill">Unité 1 · Explicación</span><h1>${esc(c.name)}</h1><p>${esc(c.theory)}</p><div class="note"><strong>Ejemplo</strong><p>${esc(c.example)}</p></div><label class="check"><input type="checkbox" id="skipTheory" ${state.skip?'checked':''}> Saltar automáticamente las explicaciones de temas ya vistos</label><div class="actions"><button class="btn" data-act="${fromSession?'back':'start'}" ${fromSession?'':`data-mode="${id}"`}>${fromSession?'Volver a la pregunta':'Empezar 10 ejercicios'}</button><button class="btn alt" data-act="home">Inicio</button></div></section>`);
}
function start(mode){
  let pool;
  if(mode==='mix-unit')pool=Core.selectMixedQuestions(QUESTIONS,normalizedStatuses(),'unit',currentUnit(),10);
  else if(mode==='mix-course')pool=Core.selectMixedQuestions(QUESTIONS,normalizedStatuses(),'course',currentUnit(),10);
  else if(mode==='mixed')pool=Core.selectMixedQuestions(QUESTIONS,normalizedStatuses(),'unit',currentUnit(),10); // Alias antiguo.
  else if(mode==='review')pool=Core.shuffle(summary().pending).slice(0,10);
  else pool=Core.shuffle(QUESTIONS.filter(q=>q.cat===mode && normalizedStatuses()[Number(q.unit??1)]!=='pending')).slice(0,10);
  if(!pool.length){render(`<section class="panel"><h2>Sin preguntas disponibles</h2><p>${mode==='review'?'Ahora mismo no tienes errores pendientes para repasar.':'Activa una unidad con preguntas para empezar esta sesión.'}</p><button class="btn" data-act="home">Volver al inicio</button></section>`);return}
  session={mode,pool,index:0,correct:0,accent:0,other:0,answered:false,selected:'',lastResult:null,choices:null};
  question(true);
}
function modeLabel(mode){return mode==='mix-course'?'Mix de todas las unidades':mode==='mix-unit'?'Mix de la unidad':mode==='review'?'Repasar mis fallos':CATEGORIES.find(c=>c.id===mode)?.name||'Practicar'}
function question(reset){
  if(!session)return;
  const q=session.pool[session.index],c=CATEGORIES.find(c=>c.id===q.cat);
  if(reset){session.answered=false;session.selected='';session.lastResult=null;session.choices=q.mode==='choice'?Core.shuffle(q.options):null;}
  const mixed=['mix-unit','mix-course','mixed'].includes(session.mode);
  render(`<section class="panel"><div class="row"><span class="pill">${mixed?esc(modeLabel(session.mode)):esc(c?.name||modeLabel(session.mode))}</span><small>${session.index+1} / ${session.pool.length}</small></div><div class="bar"><div style="width:${100*session.index/session.pool.length}%"></div></div><h2>${q.mode==='choice'?'Elige la respuesta correcta':'Escribe tu respuesta en francés'}</h2><h1 class="question">${esc(q.prompt)}</h1>${q.mode==='choice'?`<div id="choices">${session.choices.map((option,i)=>`<button class="choice" data-act="answer" data-index="${i}" ${session.answered?'disabled':''}>${esc(option)}</button>`).join('')}</div>`:`<form id="answerForm"><input class="textanswer" id="written" aria-label="Tu respuesta en francés" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe aquí" ${session.answered?'disabled':''} required><button class="btn" type="submit" ${session.answered?'disabled':''}>Comprobar</button></form>`}<div id="feedback" aria-live="polite"></div><div class="actions"><button class="btn outline" data-act="theory" data-cat="${q.cat}">Ver explicación</button><button class="btn alt" data-act="home">Salir</button></div></section>`);
  if(session.answered)showFeedback(q,session.selected,session.lastResult);
}
function answer(value){
  if(!session||session.answered)return;
  const q=session.pool[session.index];
  const selected=q.mode==='choice'?session.choices[Number(value)]:String(value);
  if(!selected||!selected.trim())return;
  const result=Core.evaluateAnswer(selected,[q.answer,...(q.alternatives||[])]);
  // La elección múltiple no presenta un diagnóstico de acentos; en ese modo se decide entre opciones.
  if(q.mode==='choice'&&!result.ok){result.kind='other';result.changes=[];}
  session.answered=true;session.selected=selected;session.lastResult=result;
  if(result.ok)session.correct++;else if(result.kind==='accent')session.accent++;else session.other++;
  state.attempts.push({id:q.id,cat:q.cat,unit:Number(q.unit??1),ok:result.ok,kind:result.kind,at:new Date().toISOString(),entered:q.mode==='text'?selected.slice(0,240):'',expected:result.expected});
  if(state.attempts.length>20000)state.attempts=state.attempts.slice(-20000);
  save();showFeedback(q,selected,result);
}
function highlightExpected(result){
  const letters=Array.from(result.expected);const changed=new Set(result.changes.map(c=>c.position));
  return letters.map((ch,i)=>changed.has(i)?`<mark class="accent-highlight">${esc(ch)}</mark>`:esc(ch)).join('');
}
function showFeedback(q,selected,result){
  if(!result)return;
  if(q.mode==='choice'){
    document.querySelectorAll('.choice').forEach((el,i)=>{el.disabled=true;const o=session.choices[i];if([q.answer,...(q.alternatives||[])].includes(o))el.classList.add('correct');else if(o===selected)el.classList.add('wrong')});
  }else{
    const input=document.getElementById('written');if(input){input.value=selected;input.disabled=true;document.querySelector('#answerForm button').disabled=true;}
  }
  const resultTitle=result.ok?'¡Correcto!':result.kind==='accent'?'Casi: hay un error de acentuación':'Respuesta que debemos revisar';
  let detail='';
  if(result.kind==='accent'){
    const changes=result.changes.map(c=>`En <strong>${esc(c.word)}</strong>: escribiste «${esc(c.typed)}» y debe ser «${esc(c.correct)}».`).join(' ');
    detail=`<p>Tu construcción coincide con la respuesta prevista si ignoramos los acentos, pero la escritura no es completamente correcta.</p><div class="comparison"><div><small>Has escrito</small><strong>${esc(selected)}</strong></div><div><small>Forma correcta</small><strong>${highlightExpected(result)}</strong></div></div><p>${changes||'Comprueba los acentos de la respuesta.'}</p><p class="muted"><small>Este descuido queda registrado para practicarlo de nuevo.</small></p>`;
  }else if(!result.ok){detail=`<p><strong>Respuesta prevista:</strong> ${esc(result.expected)}</p><p class="muted"><small>Puede tratarse de un error de conjugación, concordancia, vocabulario u ortografía. Solo se admiten las alternativas previstas para cada pregunta; revisaremos las respuestas válidas que falten.</small></p>`;}
  const c=CATEGORIES.find(c=>c.id===q.cat);
  const frameClass=result.ok?'is-correct':result.kind==='accent'?'is-accent':'is-other';
  document.getElementById('feedback').innerHTML=`<div class="feedback ${frameClass}"><strong>${resultTitle}</strong>${detail}<p><b>Explicación (${esc(c?.name||'francés')}):</b> ${esc(q.explain)}</p></div><div class="actions"><button class="btn" data-act="next">${session.index===session.pool.length-1?'Ver resultado':'Siguiente pregunta'}</button></div>`;
}
function next(){if(!session||!session.answered)return;session.index++;if(session.index>=session.pool.length)finish();else question(true)}
function finish(){
  if(!session)return;
  const s=session;state.completed++;
  state.sessionHistory.push({at:new Date().toISOString(),mode:s.mode,count:s.pool.length,correct:s.correct,accent:s.accent,other:s.other});
  if(state.sessionHistory.length>100)state.sessionHistory=state.sessionHistory.slice(-100);
  save();session=null;
  render(`<section class="panel"><span class="pill">Sesión completada</span><h1>Résultats</h1><div class="stat">${s.correct} / ${s.pool.length}</div><p>${pct(s.correct,s.pool.length)} de respuestas completamente correctas.</p><div class="grid"><div class="note"><div class="stat">${s.accent}</div><small>Errores de acentos</small></div><div class="note"><div class="stat">${s.other}</div><small>Otros errores</small></div></div><p>Las preguntas con acentos omitidos permanecen entre los errores pendientes hasta que las respondas correctamente.</p><div class="actions"><button class="btn" data-act="start" data-mode="${esc(s.mode)}">Otra sesión</button><button class="btn alt" data-act="evolution">Ver evolución</button><button class="btn outline" data-act="home">Inicio</button></div></section>`);
}
function evolution(){
  const s=summary();
  const rows=CATEGORIES.map(c=>{const r=s.byTopic.get(c.id)||{total:0,correct:0,accent:0,other:0};return `<tr><th scope="row">${esc(c.name)}</th><td>${r.total}</td><td>${pct(r.correct,r.total)}</td><td>${r.accent}</td></tr>`}).join('');
  render(`<section class="panel"><div class="row"><h1>Mi evolución</h1><button class="btn alt smallbtn" data-act="home">Inicio</button></div><p>Progreso acumulado en este navegador. Las preguntas de versiones anteriores ya registradas conservan sus aciertos, aunque no podamos clasificar retroactivamente el tipo de todos los errores antiguos.</p><div class="grid kpis"><div class="note"><div class="stat">${s.total}</div><small>Respuestas registradas</small></div><div class="note"><div class="stat">${pct(s.correct,s.total)}</div><small>Correctas del todo</small></div><div class="note"><div class="stat">${s.accent}</div><small>Errores de acentos detectados</small></div><div class="note"><div class="stat">${s.pending.length}</div><small>Preguntas para repasar</small></div></div><h2>Resultados por materia</h2><div class="tablewrap"><table><thead><tr><th>Materia</th><th>Hechos</th><th>Aciertos</th><th>Acentos</th></tr></thead><tbody>${rows}</tbody></table></div><h2>Palabras cuyos acentos debes repasar</h2>${s.accentWords.length?`<div class="chips">${s.accentWords.slice(0,12).map(([word,n])=>`<span class="chip">${esc(word)} · ${n} ${n===1?'vez':'veces'}</span>`).join('')}</div>`:'<p>Aún no hay errores de acentuación detectados por esta versión.</p>'}<p><small>Los errores escritos de la versión anterior no tienen información suficiente para clasificarlos automáticamente como errores de acentos.</small></p><div class="actions"><button class="btn" data-act="start" data-mode="review">Repasar fallos (${s.pending.length})</button><button class="btn outline" data-act="home">Volver</button></div></section>`);
}
function exportProgress(){
  const blob=new Blob([JSON.stringify({version:'0.4.1',exportedAt:new Date().toISOString(),progress:state},null,2)],{type:'application/json'});
  const uri=URL.createObjectURL(blob),a=document.createElement('a');a.href=uri;a.download='french-lab-041-progreso.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(uri),1000);
}
async function importProgress(file){
  try{
    if(!file||file.size>3000000)throw new Error('El archivo no es válido o es demasiado grande (máximo 3 MB).');
    const data=JSON.parse(await file.text());
    const imported=data?.progress;
    if(!imported || typeof imported!=='object' || !Array.isArray(imported.attempts)||typeof imported.completed!=='number')throw new Error('No es una exportación compatible de French Lab 0.4/0.4.1.');
    if(!confirm('Importar reemplazará los resultados locales de esta versión. ¿Has exportado una copia si quieres conservar los actuales?'))return;
    state=sanitizeProgress(imported);save();home();alert('Copia de progreso importada.');
  }catch(err){alert('No se pudo importar: '+err.message)}
}
function reset(){if(confirm('¿Borrar el progreso de French Lab 0.4/0.4.1 de este navegador? Esta acción no se puede deshacer sin una copia JSON.')){state=defaults();save();home()}}
function changeUnitStatus(number,value){
  const n=Number(number);if(!available(n)||!['studied','current','pending'].includes(value))return;
  if(value==='current')for(const [k,v] of Object.entries(state.unitStatus))if(v==='current'&&Number(k)!==n)state.unitStatus[k]='studied';
  state.unitStatus[n]=value;
  if(value!=='pending')state.unitNow=n;
  save();home();
}
app.addEventListener('click',event=>{
  const b=event.target.closest('[data-act]');if(!b)return;
  switch(b.dataset.act){
    case 'home':home();break;
    case 'topic':topic(b.dataset.cat);break;
    case 'start':start(b.dataset.mode);break;
    case 'answer':answer(b.dataset.index);break;
    case 'next':next();break;
    case 'theory':theory(b.dataset.cat,true);break;
    case 'back':question(false);break;
    case 'evolution':evolution();break;
    case 'export':exportProgress();break;
    case 'import':document.getElementById('importFile')?.click();break;
    case 'reset':reset();break;
  }
});
app.addEventListener('change',e=>{
  if(e.target.id==='skipTheory'){state.skip=e.target.checked;save()}
  else if(e.target.id==='importFile'){const f=e.target.files?.[0];if(f)importProgress(f);e.target.value='';}
  else if(e.target.matches('.unit-select'))changeUnitStatus(e.target.dataset.unit,e.target.value);
});
app.addEventListener('submit',e=>{if(e.target.id==='answerForm'){e.preventDefault();answer(document.getElementById('written').value)}});
if('serviceWorker' in navigator && /^https?:$/.test(location.protocol))navigator.serviceWorker.register('./sw.js').catch(()=>{});
home();
