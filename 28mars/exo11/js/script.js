/*
    Créer une applicatin pour calculer une moyenne
    - l'utilisateur à la possibilité d'ajouter autant de notes qu'il le souhaite
    - lorsqu'il le souhaite, il peut calculer la moyenne des notes
*/

// Variables globales
var notesArray = []; // => tableau vide
var notesAmount = 0;

// Fonctions
function addNote(){

    // Demander à l'utilisateur d'ajouter une note
    var newNote = prompt('Ajouter une note de 0 à 20');

    // Convertire newNote en variable de type number
    var newNoteNumber = parseInt(newNote);

    // Ajouter la note dans le tableau
    notesArray.push( newNoteNumber );
    console.log(notesArray);

    // Additionner notesAmount et newNote
    notesAmount += newNoteNumber;
    console.log( notesAmount );
};

function average(){

    // La somme de toutes les notes divisée par le nombre de note
    var averageNote = notesAmount / notesArray.length;

    // Arrondir le résultat
    var roundAverage = Math.round( averageNote );

    console.log('La moyenne est de ' + roundAverage + '/20');
    
};
 