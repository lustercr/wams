'use strict';

angular.module('wamsApp')
	.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('en', {
	    'TITLE': 'Wams',
	    'HOME': 'Home',
	    'DEVICES': 'Devices',

	    'LOGIN': 'Login',
	    'USER_SUCESS_CREATE': 'User created successfully',
	    'REGISTER_LINK': 'Don\'t you have an account',

	    /* validations */
	    'REQUIRED_EMAIL_FIELD': 'The email is required',
	    'INVALID_EMAIL_FIELD': 'Invalid email format'
	  });
	 
	  $translateProvider.translations('es', {
	    'TITLE': 'Wams',
	    'HOME': 'Inicio',
	    'DEVICES': 'Dispositivos',

	    'LOGIN': 'Inicio de sessión',
	    'USER_SUCESS_CREATE': 'Usuario creado exitosamente',
	    'REGISTER_LINK': 'No tienes cuenta?',

	    /* validations */
	    'REQUIRED_EMAIL_FIELD': 'El email es requerido',
	    'INVALID_EMAIL_FIELD': 'Formato de correo invalido'
	  });
	 
	  $translateProvider.preferredLanguage('es');
	}]);