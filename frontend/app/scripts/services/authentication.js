angular.module('wamsApp')
	.service('Auth', ['$rootScope', 'SessionResource', 
		function($rootScope, SessionResource) {

			this.isLoggedIn = function() {
				return $rootScope.user.id != undefined;
			};

			this.currentUser = function() {

			};

			this.login = function(email, password, success, error) {
				var session = new SessionResource({email: email, password: password});

				session.$save(function() {
					store.set('currentUser', session);
					$rootScope.user = session;
					success.call(session);
				}, function(){
					error.call();
				});
			};
		}
	]);