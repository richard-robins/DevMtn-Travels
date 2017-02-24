angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })

            .state('home.adventurers',{
                url:'adventurers',
                //parent:'home'
                templateUrl: "../views/about-adventurers.html"
            })

            .state('home.contact',{
                url:'contact',
                //parent:'home'
                templateUrl: "../views/contact.html"
            })

            .state('packages',{
                url:'/packages',
                //parent:'home'
                templateUrl: "../views/packages.html",
                controller: 'packagesCtrl'
            })

            .state('booked',{
                url:'/booked/:id',
                //parent:'home'
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl'
            })

            .state('locations',{
                url:'/locations',
                //parent:'home'
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl'
            });

        $urlRouterProvider
            .otherwise('/');
    });
