'use strict';

angular.module('wamsApp')
	.controller('DevicesCtrl', ['$scope', '$resource', 'DeviceFactory',
		function ($scope, $resource, DeviceFactory) {
			$scope.devices = DeviceFactory.query();
		}
	]);
