'use strict';

angular.module('wamsApp')
	.controller('LoginCtrl', ['$scope', '$route',  '$location', 'Auth', 'appLoading',
		function ($scope, $route, $location, Auth, appLoading) {
			appLoading.loading();
			$scope.$route = $route;

			$scope.login = function() {
				Auth.login($scope.email, $scope.password, function() {
					$location.path('/');
				}, function() {
					console.log('error');
				});
			};

			appLoading.ready();
		}
	]);
