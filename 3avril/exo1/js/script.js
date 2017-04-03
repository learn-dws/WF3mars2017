// Attendre le chargement du DOM
$(document).ready(function(){

    // Vérifier le genre de l'avatar
        var avatarWoman = $('#avatarWoman');
        var avatarMan = $('#avatarMan');
        var avatarGender;
        
        // => avatarWoman capter le click
        avatarWoman.click(function(){

            // Désactiver avatarMan 
            avatarMan.prop('checked', false);
            
            // Modifier la valeur de avatarGender
            avatarGender = avatarWoman.val();  
        });

        // => avatarMan capter le click
        avatarMan.click(function(){

            // Désactiver avatarWoman
            avatarWoman.prop('checked', false);

            // Modifier la valeur de avatarGender
            avatarGender = avatarMan.val(); 
        });

    

    // Capter la soumission du formulaire
    $('form').submit(function(evt){

        // Bloquer le comportement par defaut du formulaire
            evt.preventDefault();

        // Définir une variable pour la validation finale du formulaire
        var formScore = 0;


        // Variables globales du formulaire
            var avatarName = $('#avatarName').val();
            var avatarAge = $('#avatarAge').val();
            var avatarStyleTop = $('#avatarStyleTop').val();
            var avatarStyleBottom = $('#avatarStyleBottom').val();


        // Vérifier les champs du formulaire
            // => avatarName minimum 5 caractères
            if( avatarName.length < 5 ){
                console.log('Min. 5 carctères');

            } else{
                console.log('avatarName OK');

                // Incrémenter la variable formScore
                formScore++;
            };

            // => avatarAge entre 1 et 100
            if( avatarAge == 0 || avatarAge > 100 || avatarAge.length == 0 ){
                console.log('avatarAge entre 1 et 100 ans');

            } else{
                console.log('avatarAge OK');

                // Incrémenter la variable formScore
                formScore++;
            };


            // => avatarStyleTop obligatoire
            if( avatarStyleTop == 'null' ){
                console.log('Vous devez choisir un avatarStyleTop');

            } else{
                console.log('avatarStyleTop OK');

                // Incrémenter la variable formScore
                formScore++;
            };

            // => avatarStyleBottom obligatoire
            if( avatarStyleBottom == 'null' ){
                console.log('Vous devez choisir une avatarStyleBottom');

            } else{
                console.log('avatarStyleBottom OK');

                // Incrémenter la variable formScore
                formScore++;
            };


            // => avatarGender vérifier la valeur
            if( avatarGender == undefined ){
                console.log('Vous devez choisir un genre');

            } else{
                console.log('avatarGender OK');

                // Incrémenter la variable formScore
                formScore++;
            };


            // Vérifier la valeur de la variable formScore
            console.log(formScore);

    });





}); // Fin de la fonction d'attente de chargement du DOM