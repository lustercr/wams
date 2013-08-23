'use strict';

angular.module('wamsApp')
    .factory('UserFactory', ['$resource', 'CONFIGURATIONS', 
        function($resource, config) {
            return $resource(config.apiUrls.users + '/:id', {
                id: '@id'
            }, {
                update: {
                    method: 'PUT',
                    data: {},
                    isArray: false
                }
            });
        }
    ]);