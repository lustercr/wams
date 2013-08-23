'use strict';

angular.module('wamsApp')
	.service('Utils', [ '$translate',
		function($translate) {
		    this.alert = function(text, callback) {
		    	callback = callback || function() {};
		        return bootbox.dialog(text, 
				        [{
						    "label" : "Ok",
						    "class" : "btn-primary",
						    "callback": function() {
						        callback();
						    }
						}],
						{
							'header': $translate('TITLE')
						}
				);
		    };

		    this.translate = function(string) {
		    	return $translate(string);
		    }
		}
	]);