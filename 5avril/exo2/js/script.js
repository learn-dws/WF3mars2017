// Attendre le chargement du DOM
$(document).ready(function(){

    // Créer une fonction pour l'animation des compétences
    function mySkills(){

        console.log( $('h3 + ul') );

    };


    // Charger le contenu de home.html dans le main
    $('main').load( 'views/home.html' );
            


    /*
    BurgerMenu
    */
        // Burger menu : ouverture
        $('h1 + a').click(function(evt){

            // Bloquer le comportement naturel de la balise A
            evt.preventDefault();

            // Appliquer la fonction slideToggle sur la nav
            $('nav').slideToggle();

        });

        // Burger menu : navigation
        $('nav a').click(function(evt){

            // Bloquer le comportement naturel de la balise A
            evt.preventDefault();

            // Masquer le main
            $('main').fadeOut();

            var viewToLoad = $(this).attr('href');

            // Fermer le burger menu
            $('nav').slideUp(function(){

                // Charger la bonne vue puis afficher le main (callBack)
                $('main').load( 'views/' + viewToLoad, function(){

                    $('main').fadeIn(function(){

                        // Vérifier si l'utilisateur veut voir la page about.html
                        if( viewToLoad == 'about.html' ){

                            // Appler le fonction mySkills
                            mySkills();
                            
                        };

                    });

                });

            });

        });



     



}); // Fin de la fonction d'attente de chargement du DOM