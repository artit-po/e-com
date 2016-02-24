angular.module('application', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html'
            })
            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html'
            })
            .state('slide', {
                url: '/slide',
                templateUrl: 'templates/slide.html'
            })
        .state('contact',{
            url:'/contact',
            templateUrl: 'templates/contact.html'
        });
    });

