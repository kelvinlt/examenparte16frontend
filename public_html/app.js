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
                    'header@': {
                        templateUrl: 'header/bottones/bot_misdatos.html',
                        controller: 'headercontroller'
                    },
                    'content@': {
                        templateUrl: 'pages/misdatos/misdatos.html',
                        controller: 'contactoscontroller'
                    }
                }
            })
            .state('app.mislistas', {
                url: 'misListas',
                views: {
                    'header@': {
                        templateUrl: 'header/bottones/bot_mislistas.html',
                        controller: 'headercontroller'
                    },
                    'content@': {
                        templateUrl: 'pages/mislistas/mislistas.html',
                        controller: 'mislistascontroller'
                    }
                }
            })
            .state('app.listacompra', {
                url: 'lista/Lista de la Compra',
                views: {
                'header@': {
                        templateUrl: 'header/bottones/bot_listacompra.html',
                        controller: 'headercontroller'
                    },
                    'content@': {
                        templateUrl: 'pages/lista/listadelacompra/listacompra.html',
                        controller: 'listacompracontroller'
                    }
                }
            })
            .state('app.suscritas', {
                url: 'misSuscritas',
                views: {
                    'header@': {
                        templateUrl: 'header/bottones/bot_suscritas.html',
                        controller: 'headercontroller'
                    },
                    'content@': {
                        templateUrl: 'pages/suscritas/suscritas.html',
                        controller: 'suscritascontroller'
                    }
                }
            })
            .state('app.buscar', {
                url: 'buscar',
                views: {
                        'header@': {
                        templateUrl: 'header/bottones/bot_buscar.html',
                        controller: 'headercontroller'
                    },
                    'content@': {
                        templateUrl: 'pages/buscar/buscar.html',
                        controller: 'buscarcontroller'
                    }
                }
            });
    $urlRouterProvider.otherwise('/');
});