'use strict';

angular.module('wamsApp')
	.controller('LoginCtrl', ['$scope', '$route', '$resource', 'DeviceFactory', 'appLoading',
		function ($scope, $route, $resource, DeviceFactory, appLoading) {
			appLoading.loading();
			$scope.$route = $route;
			appLoading.ready();
		}
	]);
