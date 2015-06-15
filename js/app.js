var app = angular.module('portfolioApp', ['ngRoute', 'pascalprecht.translate', 'ngResource']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'pages/portfolio.html',
            controller  : 'ProjectCtrl'
        })

         // route for the portfolio page
        .when('/projects', {
            templateUrl : 'pages/portfolio.html',
            controller  : 'ProjectCtrl'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'ProjectCtrl'
        })

        // route for the contact page
        .when('/projects/:id', {
            templateUrl : 'pages/project.html',
            controller  : 'ProjectCtrl'/*,
            resolve: {
                projects: function(Project) {
                    return ProjectCtrl.
                }
            }*/
        })

        .otherwise({
            redirectTo: '/'
        });
});

app.config(function ($translateProvider) { //Configure i18n
    $translateProvider.translations('en', {
        ABOUT: 'About me',
        CONTACT: 'Contact',
        LANG: 'Language',
        BACK: 'Back',
        PROJECT_DESCRIPTION: 'Project description',
        TAGS: 'Tags',
        VIEW_ADDRESS: 'View my email address'
    })
    .translations('es', {
        ABOUT: 'Sobre mi',
        CONTACT: 'Contacto',
        LANG: 'Idioma',
        BACK: 'Atrás',
        PROJECT_DESCRIPTION: 'Descripción del proyecto',
        TAGS: 'Etiquetas',
        VIEW_ADDRESS: 'Ver mi dirección de correo'
    })
    .registerAvailableLanguageKeys(['en', 'es'], {
        'en_US': 'en',
        'en_UK': 'en',
        'es_ES': 'es',
        'ca_ES': 'es'
    })
    .determinePreferredLanguage();
});