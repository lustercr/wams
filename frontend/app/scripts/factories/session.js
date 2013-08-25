'use strict';

angular.module('wamsApp')
    .factory('SessionResource', ['$resource', 'CONFIGURATIONS', 
        function($resource, config) {
            return $resource(config.apiUrls.session);
        }
    ]);