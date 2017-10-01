var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});

myApp.controller('mainController', function($scope) {
    $scope.message = 'Home page';
});

myApp.controller('aboutController', function($scope) {
    $scope.message = 'About page';
});

myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us';
});

