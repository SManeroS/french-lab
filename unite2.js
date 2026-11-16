/* French Lab 0.5: preguntas originales de Unité 2. No se activan hasta que el usuario lo indique. */
(function (root) {
  'use strict';
  const unit = 2;
  const questions = [
    // L'imparfait: 8 elecciones y 8 respuestas escritas.
    {id:'u2_001',unit,cat:'imparfait',mode:'choice',prompt:'Quand j’étais enfant, j’___ à la campagne. (habiter)',answer:'habitais',options:['habitais','habitait','habitions'],explain:'El imparfait describe una situación habitual o de fondo: j’habitais.'},
    {id:'u2_002',unit,cat:'imparfait',mode:'choice',prompt:'Quand nous étions petits, nous ___ à la mer chaque été. (aller)',answer:'allions',options:['allions','allons','allaient'],explain:'Nous allions: imparfait de aller, para una costumbre pasada.'},
    {id:'u2_003',unit,cat:'imparfait',mode:'choice',prompt:'À cette époque, ils ___ très jeunes. (être)',answer:'étaient',options:['étaient','était','étiez'],explain:'Être en imparfait: ils étaient.'},
    {id:'u2_004',unit,cat:'imparfait',mode:'choice',prompt:'À cette époque, chaque matin, elle ___ le bus. (prendre)',answer:'prenait',options:['prenait','prenais','prenaient'],explain:'Prendre: elle prenait, hábito en el pasado.'},
    {id:'u2_005',unit,cat:'imparfait',mode:'choice',prompt:'Quand j’habitais à Brest, en novembre, il ___ souvent. (pleuvoir)',answer:'pleuvait',options:['pleuvait','pleuvaient','pleuvais'],explain:'Verbo impersonal pleuvoir: il pleuvait.'},
    {id:'u2_006',unit,cat:'imparfait',mode:'choice',prompt:'Avant, vous ___ un chien. (avoir)',answer:'aviez',options:['aviez','avaient','avais'],explain:'Vous aviez: imparfait de avoir.'},
    {id:'u2_007',unit,cat:'imparfait',mode:'choice',prompt:'Quand tu étais petit, tu ___ beaucoup. (lire)',answer:'lisais',options:['lisais','lisait','lisions'],explain:'Tu lisais: la terminación del imparfait para tu es -ais.'},
    {id:'u2_008',unit,cat:'imparfait',mode:'choice',prompt:'Quand nous étions enfants, après le dîner, nous ___ nos devoirs. (faire)',answer:'faisions',options:['faisions','faisaient','faisais'],explain:'Nous faisions: raíz fais- más -ions.'},
    {id:'u2_009',unit,cat:'imparfait',mode:'text',prompt:'Completa: Je ___ (être) timide à dix ans.',answer:'étais',explain:'Être tiene la raíz irregular ét- en imparfait: j’étais.'},
    {id:'u2_010',unit,cat:'imparfait',mode:'text',prompt:'Completa: Autrefois, nous ___ (avoir) une petite maison.',answer:'avions',explain:'Nous avions: raíz av- más -ions.'},
    {id:'u2_011',unit,cat:'imparfait',mode:'text',prompt:'Completa: À cette époque, elle ___ (venir) chaque dimanche.',answer:'venait',explain:'Venir en imparfait: elle venait.'},
    {id:'u2_012',unit,cat:'imparfait',mode:'text',prompt:'Completa: Quand ils étaient petits, ils ___ (jouer) souvent dans le jardin.',answer:'jouaient',explain:'Jouer: ils jouaient, con -aient.'},
    {id:'u2_013',unit,cat:'imparfait',mode:'text',prompt:'Completa: À cette époque, vous ___ (finir) l’école à 16 h.',answer:'finissiez',explain:'Finir: raíz finiss- y terminación -iez.'},
    {id:'u2_014',unit,cat:'imparfait',mode:'text',prompt:'Completa: Avant, tu ___ (aller) à pied.',answer:'allais',explain:'Aller: tu allais.'},
    {id:'u2_015',unit,cat:'imparfait',mode:'text',prompt:'Completa: Quand nous étions enfants, nous ___ (prendre) le train chaque été.',answer:'prenions',explain:'Prendre en imparfait: nous prenions.'},
    {id:'u2_016',unit,cat:'imparfait',mode:'text',prompt:'Completa: Il ___ (faire) très froid cet hiver-là.',answer:'faisait',explain:'Faire en imparfait: il faisait très froid.'},
    // Los pronombres y/en sustituyen lugares/à quelque chose y de/quantidades.
    {id:'u2_017',unit,cat:'yen',mode:'choice',prompt:'— Tu vas à la bibliothèque ? — Oui, j’___ vais.',answer:'y',options:['y','en','le'],explain:'Y sustituye à la bibliothèque (lugar de destino).'},
    {id:'u2_018',unit,cat:'yen',mode:'choice',prompt:'— Tu as du pain ? — Oui, j’___ ai.',answer:'en',options:['en','y','le'],explain:'En sustituye du pain, una cantidad no especificada.'},
    {id:'u2_019',unit,cat:'yen',mode:'choice',prompt:'— Elle pense à son examen ? — Oui, elle ___ pense.',answer:'y',options:['y','en','la'],explain:'Penser à une chose → y penser.'},
    {id:'u2_020',unit,cat:'yen',mode:'choice',prompt:'— Il parle de son voyage ? — Oui, il ___ parle.',answer:'en',options:['en','y','le'],explain:'Parler de quelque chose → en parler.'},
    {id:'u2_021',unit,cat:'yen',mode:'choice',prompt:'— Vous allez au cinéma ? — Oui, nous ___ allons.',answer:'y',options:['y','en','les'],explain:'Aller à un endroit → y aller.'},
    {id:'u2_022',unit,cat:'yen',mode:'choice',prompt:'— Tu veux trois pommes ? — Oui, j’___ veux trois.',answer:'en',options:['en','y','les'],explain:'En sustituye pommes; la cantidad trois se mantiene.'},
    {id:'u2_023',unit,cat:'yen',mode:'choice',prompt:'— Tu reviens de Lyon ? — Oui, j’___ reviens.',answer:'en',options:['en','y','le'],explain:'Revenir de quelque part → en revenir.'},
    {id:'u2_024',unit,cat:'yen',mode:'choice',prompt:'— Tu participes à cette réunion ? — Oui, j’___ participe.',answer:'y',options:['y','en','la'],explain:'Participer à une réunion → y participer.'},
    {id:'u2_025',unit,cat:'yen',mode:'text',prompt:'Completa: J’ai visité Lille. Maintenant, j’___ habite.',answer:'y',explain:'Y sustituye à Lille.'},
    {id:'u2_026',unit,cat:'yen',mode:'text',prompt:'Completa: Il a beaucoup de livres. Il ___ a beaucoup.',answer:'en',explain:'En sustituye de livres; beaucoup permanece.'},
    {id:'u2_027',unit,cat:'yen',mode:'text',prompt:'Completa: Nous allons à la piscine. Nous ___ allons le mercredi.',answer:'y',explain:'Y sustituye à la piscine.'},
    {id:'u2_028',unit,cat:'yen',mode:'text',prompt:'Completa: Elle a besoin de repos. Elle ___ a besoin.',answer:'en',explain:'Avoir besoin de quelque chose → en avoir besoin.'},
    {id:'u2_029',unit,cat:'yen',mode:'text',prompt:'Completa: Tu penses à tes vacances ? Tu ___ penses souvent ?',answer:'y',explain:'Penser à quelque chose → y penser.'},
    {id:'u2_030',unit,cat:'yen',mode:'text',prompt:'Completa: Vous avez des cousins ? Vous ___ avez ?',answer:'en',explain:'En sustituye des cousins.'},
    {id:'u2_031',unit,cat:'yen',mode:'text',prompt:'Completa: Ils sont partis à Paris. Ils ___ reviennent demain.',answer:'en',explain:'En sustituye de Paris.'},
    {id:'u2_032',unit,cat:'yen',mode:'text',prompt:'Completa: Je m’intéresse à la photographie. Je m’___ intéresse.',answer:'y',explain:'S’intéresser à quelque chose → s’y intéresser.'},
    // Posición de adjetivos: consignas precisan el orden habitual en francés.
    {id:'u2_033',unit,cat:'adjectifs',mode:'choice',prompt:'¿Cómo se dice habitualmente «un coche rojo»?',answer:'une voiture rouge',options:['une voiture rouge','une rouge voiture','un voiture rouge'],explain:'Los adjetivos de color suelen ir después del nombre; voiture es femenino.'},
    {id:'u2_034',unit,cat:'adjectifs',mode:'choice',prompt:'¿Cómo se dice «una buena idea»?',answer:'une bonne idée',options:['une bonne idée','une idée bon','un bonne idée'],explain:'Bon/bonne suele ir antes del nombre; idée es femenino.'},
    {id:'u2_035',unit,cat:'adjectifs',mode:'choice',prompt:'¿Cuál es el orden habitual para «un apartamento pequeño»?',answer:'un petit appartement',options:['un petit appartement','une petit appartement','un petite appartement'],explain:'Petit suele ir antes del nombre. Appartement es masculino.'},
    {id:'u2_036',unit,cat:'adjectifs',mode:'choice',prompt:'¿Cuál es el orden habitual para «una falda verde»?',answer:'une jupe verte',options:['une jupe verte','une verte jupe','un jupe vert'],explain:'Los colores suelen ir detrás del sustantivo; jupe es femenino.'},
    {id:'u2_037',unit,cat:'adjectifs',mode:'choice',prompt:'¿Cómo se dice habitualmente «un libro interesante»?',answer:'un livre intéressant',options:['un livre intéressant','un intéressant livre','une livre intéressant'],explain:'Intéressant suele colocarse después del nombre.'},
    {id:'u2_038',unit,cat:'adjectifs',mode:'choice',prompt:'¿Cómo se dice habitualmente «un niño pequeño»?',answer:'un petit garçon',options:['un petit garçon','une petit garçon','un petite garçon'],explain:'Petit va normalmente delante de garçon.'},
    {id:'u2_039',unit,cat:'adjectifs',mode:'choice',prompt:'¿Cómo se expresa habitualmente «un jardín grande» (tamaño)?',answer:'un grand jardin',options:['un grand jardin','une grand jardin','un grande jardin'],explain:'Grand delante de jardin expresa el tamaño; jardin es masculino.'},
    {id:'u2_040',unit,cat:'adjectifs',mode:'choice',prompt:'¿Cuál es la forma correcta de «una casa vieja»?',answer:'une vieille maison',options:['une vieille maison','une vieux maison','un vieil maison'],explain:'Vieux concuerda en femenino: vieille. La forma habitual aquí va delante del nombre.'},
    {id:'u2_041',unit,cat:'adjectifs',mode:'text',prompt:'Traduce al francés (orden habitual): un jardín grande',answer:'un grand jardin',explain:'Grand suele ir delante del nombre; jardin es masculino.'},
    {id:'u2_042',unit,cat:'adjectifs',mode:'text',prompt:'Traduce al francés: un coche negro',answer:'une voiture noire',explain:'Voiture es femenino y el color noir va detrás, en femenino: noire.'},
    {id:'u2_043',unit,cat:'adjectifs',mode:'text',prompt:'Traduce al francés: una película interesante',answer:'un film intéressant',explain:'Film es masculino; intéressant normalmente va detrás.'},
    {id:'u2_044',unit,cat:'adjectifs',mode:'text',prompt:'Traduce al francés: una buena idea',answer:'une bonne idée',explain:'Bonne se coloca delante de idée.'},
    {id:'u2_045',unit,cat:'adjectifs',mode:'text',prompt:'Traduce al francés: un vestido azul',answer:'une robe bleue',explain:'Robe es femenino, bleu concuerda (bleue) y va detrás.'},
    {id:'u2_046',unit,cat:'adjectifs',mode:'text',prompt:'Traduce al francés: un apartamento pequeño',answer:'un petit appartement',explain:'Petit va delante de appartement, masculino.'},
    {id:'u2_047',unit,cat:'adjectifs',mode:'text',prompt:'Traduce al francés: una historia bonita',answer:'une belle histoire',alternatives:['une jolie histoire'],explain:'Belle y jolie suelen ir delante del nombre: une belle/jolie histoire.'},
    {id:'u2_048',unit,cat:'adjectifs',mode:'text',prompt:'Traduce al francés: un ejercicio difícil',answer:'un exercice difficile',explain:'Difficile se coloca normalmente después de exercice.'},
    // Léxico de recuerdos, infancia y meteorología.
    {id:'u2_049',unit,cat:'souvenirs',mode:'choice',prompt:'Quand j’étais enfant, j’allais à l’___ primaire.',answer:'école',options:['école','orage','hiver'],explain:'École primaire: escuela primaria.'},
    {id:'u2_050',unit,cat:'souvenirs',mode:'choice',prompt:'«Un souvenir» significa…',answer:'un recuerdo',options:['un recuerdo','un examen','un paraguas'],explain:'Souvenir en francés significa recuerdo.'},
    {id:'u2_051',unit,cat:'souvenirs',mode:'choice',prompt:'¿Cómo se dice «hace viento»?',answer:'Il y a du vent.',options:['Il y a du vent.','Il neige.','Il fait chaud.'],explain:'Il y a du vent expresa que hace viento.'},
    {id:'u2_052',unit,cat:'souvenirs',mode:'choice',prompt:'¿Cómo se dice «hace sol»?',answer:'Il y a du soleil.',options:['Il y a du soleil.','Il pleut.','Il neige.'],explain:'Il y a du soleil: hace sol.'},
    {id:'u2_053',unit,cat:'souvenirs',mode:'choice',prompt:'«L’enfance» significa…',answer:'la infancia',options:['la infancia','el otoño','la jubilación'],explain:'L’enfance = la infancia.'},
    {id:'u2_054',unit,cat:'souvenirs',mode:'choice',prompt:'On utilise un ___ pour se protéger de la pluie.',answer:'parapluie',options:['parapluie','soleil','souvenir'],explain:'Un parapluie es un paraguas.'},
    {id:'u2_055',unit,cat:'souvenirs',mode:'choice',prompt:'«Un orage» significa…',answer:'una tormenta',options:['una tormenta','una semana','una estación'],explain:'Orage: tormenta (normalmente con rayos/truenos).'},
    {id:'u2_056',unit,cat:'souvenirs',mode:'choice',prompt:'¿Qué frase significa «nieva mucho»?',answer:'Il neige beaucoup.',options:['Il neige beaucoup.','Il pleut beaucoup.','Il y a du soleil.'],explain:'Neiger es nevar: il neige beaucoup.'},
    {id:'u2_057',unit,cat:'souvenirs',mode:'text',prompt:'Traduce al francés: la infancia',answer:'l’enfance',explain:'L’enfance lleva artículo elidido delante de vocal.'},
    {id:'u2_058',unit,cat:'souvenirs',mode:'text',prompt:'Traduce al francés: un recuerdo',answer:'un souvenir',explain:'Souvenir es masculino: un souvenir.'},
    {id:'u2_059',unit,cat:'souvenirs',mode:'text',prompt:'Traduce al francés: llueve',answer:'il pleut',explain:'Pleuvoir es impersonal: il pleut.'},
    {id:'u2_060',unit,cat:'souvenirs',mode:'text',prompt:'Traduce al francés: hace frío',answer:'il fait froid',explain:'Il fait froid: hace frío.'},
    {id:'u2_061',unit,cat:'souvenirs',mode:'text',prompt:'Traduce al francés: un paraguas',answer:'un parapluie',explain:'Parapluie es masculino: un parapluie.'},
    {id:'u2_062',unit,cat:'souvenirs',mode:'text',prompt:'Traduce al francés: está nevando',answer:'il neige',explain:'Il neige: nieva o está nevando.'},
    {id:'u2_063',unit,cat:'souvenirs',mode:'text',prompt:'Traduce al francés: una tormenta',answer:'un orage',explain:'Orage es masculino: un orage.'},
    {id:'u2_064',unit,cat:'souvenirs',mode:'text',prompt:'Traduce al francés (habla un hombre): cuando era pequeño',answer:'quand j’étais petit',explain:'Imparfait de être: j’étais; petit concuerda con quien habla.'}
  ];
  const categories=[
    {id:'imparfait',unit,name:'L’imparfait',detail:'Describir situaciones y hábitos del pasado',theory:'Para formar el imparfait, parte de la forma nous del presente, elimina -ons y añade -ais, -ais, -ait, -ions, -iez, -aient. Excepción: être utiliza la raíz ét-. Se usa para hábitos repetidos, descripciones y circunstancias del pasado. Ejemplo: quand j’étais petit, je jouais dehors.',example:'Avant, nous habitions à la campagne et nous allions à l’école à pied.'},
    {id:'yen',unit,name:'Les pronoms y et en',detail:'Sustituir lugares, ideas y cantidades',theory:'Y sustituye normalmente à + lugar o à + cosa: Tu vas au musée ? Oui, j’y vais. En sustituye de + cosa o cantidades: Tu as du pain ? Oui, j’en ai. Con cantidades expresadas se mantiene la cifra: j’en ai trois. No apliques estas reglas mecánicamente a personas.',example:'Elle pense à son examen → elle y pense. Il parle de son voyage → il en parle.'},
    {id:'adjectifs',unit,name:'La place des adjectifs',detail:'Posición y concordancia de los adjetivos',theory:'Los colores y muchos adjetivos descriptivos suelen ir después del sustantivo: une voiture rouge, un exercice difficile. Algunos frecuentes como petit, grand, bon, beau, jeune, vieux suelen ir antes: un petit jardin, une belle histoire. El adjetivo concuerda en género y número y su posición puede cambiar el significado en ciertos casos.',example:'Une petite maison, une voiture noire, un film intéressant.'},
    {id:'souvenirs',unit,name:'Souvenirs et météo',detail:'Infancia, recuerdos y tiempo atmosférico',theory:'Para hablar de recuerdos: quand j’étais enfant, dans mon enfance, je me souviens de… Para describir el tiempo: il pleut (llueve), il neige (nieva), il fait froid (hace frío), il y a du vent (hace viento), un orage (tormenta). Conviene aprender las expresiones completas y sus acentos.',example:'Quand j’étais enfant, il neigeait souvent en hiver.'}
  ];
  root.FrenchLabUnite2={questions,categories};
})(typeof globalThis!=='undefined'?globalThis:this);
