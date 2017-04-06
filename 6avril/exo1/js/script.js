// Attendre le chargement du DOM
$(document).ready(function(){

    // Créer une fonction pour l'animation d'une compétence
    function mySkills( paramEq, paramWidth ){

        // Animation des balise p des skils
        $('h3 + ul').children('li').eq(paramEq).find('p').animate({
            width: paramWidth
        });
        
    };

    // Créer une fonction pour ouvrir la modal
    function openModal(){

        // Ouvrir la modal au click sur les boutons
        $('button').click(function(){

            // Afficher le titre du projet
            var modalTitle = $(this).prev().text()
            $('#modal span').text( modalTitle );

            // Afficher l'image du projet
            var modalImage = $(this).parent().prev().attr('src');
            $('#modal img').attr('src', modalImage).attr('alt', modalTitle)

            // Afficher la modal
            $('#modal').fadeIn();
        });

        // Fermer la modal au click sur .fa-times
        $('.fa-times').click(function(){
            $('#modal').fadeOut();
        });

    };

    // Créer une fonction pour la gestion du formulaire
    function contactForm(){

        // Capter le focus sur les inputs et le textarea
        $('input, textarea').focus(function(){

            // Sélection la balise précédente pour y ajouter la class openedLabel
            $(this).prev().addClass('openedLabel');

        });

        // Capter le blur sur les inputs et le textarea
        $('input, textarea').blur(function(){


            // Vérifier si il n'y à pas de caractère dans le input
            if( $(this).val().length == 0 ){

                // Sélectionner la balise précédente pour supprimer la class openedLabel
                $(this).prev().removeClass();

            };

            
        });

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

            // Créer une variable pour récupérer la valeur de l'attribut href
            var viewToLoad = $(this).attr('href');

            // Fermer le burger menu
            $('nav').slideUp(function(){

                // Charger la bonne vue puis afficher le main (callBack)
                $('main').load( 'views/' + viewToLoad, function(){

                    $('main').fadeIn(function(){

                        // Vérifier si l'utilisateur veut voir la page about.html
                        if( viewToLoad == 'about.html' ){

                            // Appler le fonction mySkills
                            mySkills( 0, '84%' );
                            mySkills( 1, '25%' );
                            mySkills( 2, '50%' );

                        };

                        // Vérifier si l'utilisateur est sur la page portfolio.html
                        if( viewToLoad == 'portfolio.html' ){

                            // Appeler la fonction pouur ouvrir la modal
                            openModal();

                        };

                        // Vérifier si l'utilisateur est sur la page contacts.html
                        if( viewToLoad == 'contacts.html' ){

                            // Déclencher la fonction de gestion du formulaire
                            contactForm();

                        };

                    });

                });

            });

        });

}); // Fin de la fonction d'attente de chargement du DOM