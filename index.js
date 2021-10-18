//inject angular file upload directives and services.

// Declare app level module which depends on views, and components
var app = angular.module('timelapsemonitor', [
    'ngRoute',
    'timelapsemonitor.dashboard'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/dashboard'});
  }]);

// Configuration
app.apiUrl = 'https://api-monitor.autotimelapse.com/';
// app.apiUrl = 'http://localhost:5000/';