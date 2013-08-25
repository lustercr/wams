'use strict';

angular.module('wamsApp', ['ngResource', 'pascalprecht.translate'])
     .config(['$routeProvider', '$locationProvider',
          function($routeProvider, $locationProvider ) {
               $routeProvider
               .when('/', {
                    templateUrl: 'views/main.html',
                    controller: 'MainCtrl',
                    activeMenu: 'dashboard',
                    authReq: true
               })
               .when('/devices', {
                    templateUrl: 'views/devices/index.html',
                    controller: 'DevicesCtrl',
                    activeMenu: 'devices',
                    authReq: true
               }).when('/register', {
                    templateUrl: 'views/users/new.html',
                    controller: 'CreateUserCtrl',
                    authReq: false
               }).when('/login', {
                    templateUrl: 'views/users/login.html',
                    controller: 'LoginCtrl',
                    activeMenu: 'dashboard',
                    authReq: false
               })
               .otherwise( {
                    redirectTo: '/'
               });
          }
     ]).run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {

          $rootScope.user = store.get('currentUser') || {};
          $rootScope.$on("$routeChangeStart", function (event, next, current) {
               if (next.authReq && !Auth.isLoggedIn()) {
                    $location.path('/login');
               }
          });
     }]);
