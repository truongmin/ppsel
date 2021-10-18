'use strict';
angular.module('timelapsemonitor.dashboard', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'views/dashboard/dashboard.html',
            controller: 'DashboardCtrl'
        });
    }])
    .controller('DashboardCtrl', ['$scope', '$http', '$timeout', '$interval', '$routeParams', function ($scope, $http, $timeout, $interval, $routeParams) {
        // ************** CONFIGURATION ************************************
        var apiUrl = angular.module('timelapsemonitor').apiUrl;
        var pprate = $routeParams.rate;

        var ppamount = $routeParams.amount;
        var fee = 75000; // static fee for every transfer
        if (!pprate) {
            pprate = "22650"; // default rate for wholesale, sale at once
        }
        $scope.ppactualrate = pprate;

        if (!ppamount) {
            ppamount = "199";
        }
        $scope.amount = parseInt(ppamount);
        $scope.total = 0;

        $scope.Calculate = function() {
            $scope.total = $scope.amount * pprate + fee;
            $scope.ppactualrate = $scope.total / $scope.amount;
        }

        $scope.Calculate();

    }]);