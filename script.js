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
        .when('/jasmine', {
            templateUrl : 'pages/jasmine.html',
            controller  : 'jasmineController'
        })

        // server http
        .when('/server', {
            templateUrl : 'pages/server.html',
            controller  : 'serverController'
        });
});

myApp.controller('mainController', function($scope) {
    $scope.title = 'Single Page Application';
    $scope.subTitle = '...about IT issues';
});

myApp.controller('aboutController', function($scope) {
    $scope.title = 'About page';
});

myApp.controller('jasmineController', function($scope) {
    $scope.title = 'Jasmine - install';
});

myApp.controller('serverController', function($scope) {
    $scope.title = 'Npm http server';
});

