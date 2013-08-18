'use strict';

angular.module('wamsApp')
	.controller('DevicesCtrl', ['$scope', '$route', '$resource', 'DeviceFactory',
		function ($scope, $route, $resource, DeviceFactory) {
			$scope.$route = $route;
			$scope.devices = DeviceFactory.query();
		}
	]);
