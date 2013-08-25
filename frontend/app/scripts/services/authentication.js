angular.module('wamsApp')
	.service('Auth', ['SessionResource', 
		function(SessionResource) {

			this.isLoggedIn = function() {
				return typeof this.currentUser() != "undefined";
			};

			this.currentUser = function() {
				return store.get('currentUser');
			};

			this.login = function(email, password, success, error) {
				var session = new SessionResource({email: email, password: password});

				session.$save(function() {
					store.set('currentUser', session);
					success.call(session);
				}, function(){
					error.call();
				});
			};
		}
	]);