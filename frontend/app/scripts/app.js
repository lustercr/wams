'use strict';

angular.module('wamsApp', ['ngResource', 'pascalprecht.translate'])
     .config(['$routeProvider', '$locationProvider',
          function($routeProvider, $locationProvider ) {
               $routeProvider
               .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    activeMenu: 'dashboard'
               })
               .when('/devices', {
                    templateUrl: 'views/devices/index.html',
                    controller: 'DevicesCtrl',
                    activeMenu: 'devices'
               }).when('/register', {
                    templateUrl: 'views/users/new.html',
                    controller: 'CreateUserCtrl'
               }).when('/login', {
                    templateUrl: 'views/users/login.html',
                    controller: 'LoginCtrl',
                    activeMenu: 'dashboard'
               })
               .otherwise( {
                    redirectTo: '/'
               });
          }
     ]);
