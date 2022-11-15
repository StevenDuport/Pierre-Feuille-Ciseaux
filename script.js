const buttons = document.querySelectorAll('button');
const phrasesWin = [
    'Gagné !',
    'Mais t\'es trop fort ! Gagné !',
    'Gagné ! T\'es le roi de ce jeu.',
    'C\'est que la WIN avec toi !',
    'BUUUUT du joueur français !!!',
]

const phraseLoose = [
    "Nop.",
    "Je croyais en toi.",
    "Looser !!",
    "Perdu !",
    "Les Robots vont prendre le pouvoir..",
    'Pas ça, Zinédine, pas aujourd’hui, pas maintenant, pas après tout ce que tu as fait.',
]


function jeu(event){
    //Cible le bouton cliqué 
    const joueur = event.currentTarget.innerHTML;
    //Génère un clique aléatoire entre les boutons
    const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
    //On cible la zone d'affichage et on la stock dans la variable resultat
    let affichage = document.querySelector('.resultat');
    let resultat = '';

    //Script pour vérifier qui a gagné 
    if (joueur === robot){
        resultat = "Egalité";
    }
    else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille")){
        //On affiche une phrases aléatoire parmis le tableau phrasesWin
        const phrasesW = phrasesWin[Math.floor(Math.random() * phrasesWin.length)];
        resultat = phrasesW;
    }
    else {
        //On affiche une phrases aléatoire parmis le tableau phraseLoose
        const phrasesL = phraseLoose[Math.floor(Math.random() * phraseLoose.length)];
        resultat = phrasesL;
    };

    affichage.innerHTML = `Joueur: ${joueur} <br>VS<br> Robot: ${robot} <br>
    <br> ${resultat}`;

    //Changement d'icone pour Joueur 
    let joueurIcone = document.querySelector('.icone-joueur');
    if (joueur === "Feuille"){
        joueurIcone = document.querySelector('.icone-joueur').src='image/feuille.png';
    }
    else if (joueur === "Pierre"){
        joueurIcone = document.querySelector('.icone-joueur').src='image/pierre.png';
    }
    else {
        joueur === "Ciseaux"
        joueurIcone = document.querySelector('.icone-joueur').src='image/ciseaux.png';
    }   

    //Changement d'icone pour Robot
    let robotIcone = document.querySelector('.icone-robot');
    if (robot === "Feuille"){
        robotIcone = document.querySelector('.icone-robot').src='image/feuille.png';
    }
    else if (robot === "Pierre"){
        robotIcone = document.querySelector('.icone-robot').src='image/pierre.png';
    }
    else {
        robot === "Ciseaux"
        robotIcone = document.querySelector('.icone-robot').src='image/ciseaux.png';
    }  
    
    //console.log(`Joueur : ${joueur} VS Robot: ${robot}`);
    //console.log(resultat);
}


// A chaque click sur un des trois boutons on lance la fonction Jeu
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", jeu)
}

