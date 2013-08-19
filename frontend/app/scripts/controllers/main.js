'use strict';

angular.module('wamsApp')
  .controller('MainCtrl', ['$scope', '$route', 'appLoading', 
  	function ($scope, $route, appLoading) {
  		$scope.$route = $route;
  		appLoading.ready();
	  }
  ]);
