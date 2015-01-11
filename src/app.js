"format es6";

import angular from 'angular';
import angularRoute from 'angular-route';
import Hammer from 'hammer';

// Hack: Hammer must be declared in global scope
// for ngMaterial to work...
window.Hammer = Hammer;

import angularMaterial from 'angular-material';
import signInModule from 'Wordsworth/signin/index';

angular.module('wordsworth', ['ngRoute', 'ngMaterial', signInModule.name])
	.config(($routeProvider) => {
		$routeProvider.when('/signin', {
			name: 'signin',
			templateUrl: 'src/signin/sign-in.html',
			controller: 'SignInController',
			controllerAs: 'signin'
		}).when('/rooms', {
			name: 'rooms',
			templateUrl: 'src/rooms/rooms.html',
			controller: 'SignInController',
			controllerAs: 'signin'
		}).otherwise({
			redirectTo: '/rooms'
		});
	})
	.run(($rootScope, $location, UserService) => {
		$rootScope.$on('$routeChangeStart', (e, next) => {
			if (next.name === 'signin') {
				// Do nothing...
				return;
			}
			var user = UserService.getCurrentUser();
			if (!user) {
				$location.path('/signin');
			}
		});

	});
