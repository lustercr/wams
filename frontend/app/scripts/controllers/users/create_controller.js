'use strict';

angular.module('wamsApp')
	.controller('CreateUserCtrl', ['$scope', '$route', '$resource', '$location', 'UserFactory', 'Utils', 'appLoading',
		function ($scope, $route, $resource, $location, UserFactory, Utils, appLoading) {
			appLoading.loading();
			$scope.$route = $route;

			$scope.createUser = function(user) {
				appLoading.loading();
				var user = new UserFactory({User: $scope.user});

				user.$save(function() {
					Utils.alert(Utils.translate('USER_SUCESS_CREATE'));
					return $location.path('/');
				});
			};

			appLoading.ready();
		}
	]);
