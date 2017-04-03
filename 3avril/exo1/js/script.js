// Attendre le chargement du DOM
$(document).ready(function(){

    // Vérifier le genre de l'avatar
        var avatarWoman = $('#avatarWoman');
        var avatarMan = $('#avatarMan');
        
        // => avatarWoman capter le click
        avatarWoman.click(function(){

            console.log( 'Je suis une ' + avatarWoman.val() );
            
            // Désactiver avatarMan 
            avatarMan.prop('checked', false);

        });

        // => avatarMan capter le click
        avatarMan.click(function(){

            console.log( 'Je suis un ' + avatarMan.val() );

            // Désactiver avatarWoman
            avatarWoman.prop('checked', false);

        });

    

    // Capter la soumission du formulaire
    $('form').submit(function(evt){

        // Bloquer le comportement par defaut du formulaire
            evt.preventDefault();


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
            };

            // => avatarAge entre 1 et 100
            if( avatarAge == 0 || avatarAge > 100 || avatarAge.length == 0 ){
                console.log('avatarAge entre 1 et 100 ans');

            } else{
                console.log('avatarAge OK');
            };


            // => avatarStyleTop obligatoire
            if( avatarStyleTop == 'null' ){
                console.log('Vous devez choisir un avatarStyleTop');

            } else{
                console.log('avatarStyleTop OK');
            };

            // => avatarStyleBottom obligatoire
            if( avatarStyleBottom == 'null' ){
                console.log('Vous devez choisir une avatarStyleBottom');

            } else{
                console.log('avatarStyleBottom OK');
            };

    });





}); // Fin de la fonction d'attente de chargement du DOM