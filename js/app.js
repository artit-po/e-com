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
            .state('contact', {
                url: '/contact',
                templateUrl: 'templates/contact.html'
            })
            //Prodect shoe 
            //รองเท้าผ้าใบ
            .state('sneakers', {
                url: '/sneakers',
                templateUrl: 'shoes/sneakers.html'
            })
            //รองเท้าหนัง
            .state('leather', {
                url: '/leather',
                templateUrl: 'shoes/leather.html'
            })
            //รองเท้ากีฬา
            .state('sports', {
                url: '/sports',
                templateUrl: 'shoes/sports.html'
            });
    });