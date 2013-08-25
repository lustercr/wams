'use strict';

angular.module('wamsApp')
	.factory('httpRequestInterceptor', 
		function () {
			return {
				request: function (config) {
					var currentUser = store.get('currentUser');
					if (currentUser) {
 						config.headers.auth_token = currentUser.auth_token;
					}
					return config;
				}
			};
		});
 
angular.module('wamsApp')
	.config(['$httpProvider',
		function ($httpProvider) {
	  		$httpProvider.interceptors.push('httpRequestInterceptor');
		}
	]);