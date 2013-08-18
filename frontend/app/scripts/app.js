'use strict';

angular.module('wamsApp', ['ngResource'])
  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/devices', {
          templateUrl: 'views/devices.html',
          controller: 'DevicesCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  ]);
