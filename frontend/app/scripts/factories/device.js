'use strict';

angular.module('wamsApp')
    .factory('DeviceFactory', ['$resource', 'CONFIGURATIONS', 
        function($resource, config) {
            return $resource(config.apiUrls.devices + '/:id', {
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