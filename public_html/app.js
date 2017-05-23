var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/',
            views: {
                'header': {
                    templateUrl: 'header/header.html',
                    controller: 'headercontroller'
                },
                'content': {
                    templateUrl: 'home/home.html',
                    controller: 'homecontroller'
                },
                'footer': {
                    templateUrl: 'footer/footer.html',
                    controller: 'footercontroller'
                }
            }
        })
        .state('app.contactos', {
            url: 'contactos',
            views: {
                'content@': {
                templateUrl: 'pages/contactos/contactos.html',
                controller: 'contactoscontroller'
                }
            }
        })
        .state('app.misdatos', {
            url: 'misDatos',
            views: {
                'content@': {
                templateUrl: 'pages/misdatos/misdatos.html',
                controller: 'contactoscontroller'
                }
            }
        });
        $urlRouterProvider.otherwise('/');
});