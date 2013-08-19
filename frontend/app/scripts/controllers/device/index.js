'use strict';

angular.module('wamsApp')
	.controller('DevicesCtrl', ['$scope', '$route', '$resource', 'DeviceFactory', 'appLoading',
		function ($scope, $route, $resource, DeviceFactory, appLoading) {
			appLoading.loading();
			$scope.$route = $route;
			$scope.devices = DeviceFactory.query();
			appLoading.ready();
		}
	]);
