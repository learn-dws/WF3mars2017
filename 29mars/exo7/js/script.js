/*

    Le Chifoumy
    - l'utilisateur doit choisir entre pierre, feuille et ciseaux
    - l'ordinateur doit choisir entre pierre, feuille et ciseaux
    - nous comparons le choix de l'utilisateur et de l'ordinateur
    - selon le résultat, l'utilisateur a gagné ou l'ordinateur a gagner
    - une partie se joue en 3 manches

*/


// Variable globale pour le choix de l'utilisateur
var userBet = '';


/*
    1# L'utilisateur doit choisir entre pierre, feuille et ciseaux
    - Créer une fonction qui prend en paramètre le choix de l'utilisateur
    - Appeler la fonction au clique sur les buttons du DOM en précisant le paramètre
    - Afficher le résultat dans la console
*/

function userChoice( paramChoice ){
    
    // Assigner à la variable userBet la valeur de paramChoice
    userBet = paramChoice;

};

/*
    2# L'ordinateur doit choisir entre pierre, feuille et ciseaux
    - Faire une fonction pour déclencher le choix au clique sur un bouton
    - Créer un tableau contenant 'pierre', 'feuille' et 'ciseaux'
    - Faire en sorte de choisir aléatoirement l'un de 3 index du tableau
    - Afficher le résultat dans la console
*/

function computerChoice(){

    // Afficher dans la console la valeur de userBet
    console.log( 'user : ' + userBet );

    var computerMemory = [ 'pierre', 'feuille', 'ciseaux' ];

    // Choisir aléatoirement l'un de 3 index du tableau
    var computerBet = computerMemory[Math.floor(Math.random() * computerMemory.length)];
    console.log( 'Computer : ' + computerBet );



    


    // Vérifier si userBet est vide
    if( userBet == '' ){
        document.querySelector('h2').innerHTML = 'Choisi ton <i>arme<i>';

    } else{

        // Afficher les deux choix dans la balise H2
        document.querySelector('h2').textContent = userBet + ' vs. ' + computerBet;

        // Comparer les variables
        if( userBet == computerBet ){
            document.querySelector('p').textContent = 'Egalité';

        } else if( userBet == 'pierre' && computerBet == 'ciseaux' ){
            document.querySelector('p').textContent = 'Gagné';

        } else if( userBet == 'feuille' && computerBet == 'pierre' ){
            document.querySelector('p').textContent = 'Gagné';

        } else if( userBet == 'ciseaux' && computerBet == 'feuille' ){
            document.querySelector('p').textContent = 'Gagné';

        } else{
            document.querySelector('p').textContent = 'Perdu...';
        };

    };

};