'use strict';

angular.module('wamsApp')
	.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('en', {
	    'TITLE': 'Where are my trucks ?',
	    'HOME': 'Home',
	    'DEVICES': 'Devices'
	  });
	 
	  $translateProvider.translations('es', {
	    'TITLE': 'Donde estan mis camiones ?',
	    'HOME': 'Inicio',
	    'DEVICES': 'Dispositivos'
	  });
	 
	  $translateProvider.preferredLanguage('es');
	}]);