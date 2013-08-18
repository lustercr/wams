'use strict';

angular.module('wamsApp')
  .controller('MainCtrl', ['$scope', '$route', 
  	function ($scope, $route) {
  		$scope.$route = $route;
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];
	  }
  ]);
