// Configuration bootstrap
var environment = 'development',
	EnvConfig   = {
		// skip use "default", 
		// it is a recerved word that wont work on older js engines such as android 2.3
		// use defaultConfig keyword instead
		defaultConfig: {
			apiEndPoint: '/'
		}, 
		development: {
			apiEndPoint: 'http://localhost\\:3000/'
		},
		staging: {},
		production: {}
	},
	apiEndPoint = EnvConfig[environment].apiEndPoint || EnvConfig['development'].apiEndPoint; 

angular.module('wamsApp')
	   .constant('API_URL', apiEndPoint)
       .constant('CONFIGURATIONS', {
       		apiUrls: {
       			devices: apiEndPoint + 'devices',
       			users: apiEndPoint + 'users',
       			session: apiEndPoint + 'login'
       		}
       	})