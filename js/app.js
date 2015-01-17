var app = angular.module('portfolioApp', ['ngRoute', 'pascalprecht.translate', 'ngResource']);

app.config(function($routeProvider) {
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
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'ProjectCtrl'
        })

        // route for the contact page
        .when('/projects/:id', {
            templateUrl : 'pages/project.html',
            controller  : 'ProjectCtrl'
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
        BACK: 'Back'
    })
    .translations('es', {
        ABOUT: 'Sobre mi',
        CONTACT: 'Contacto',
        LANG: 'Idioma',
        BACK: 'Atrás'
    })
    .registerAvailableLanguageKeys(['en', 'es'], {
        'en_US': 'en',
        'en_UK': 'en',
        'es_ES': 'es',
        'ca_ES': 'es'
    })
    .determinePreferredLanguage();
});