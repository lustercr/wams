// Configuration bootstrap
var environment = 'development',
	EnvConfig   = {
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
       			devices: apiEndPoint + 'devices'
       		}
       	})