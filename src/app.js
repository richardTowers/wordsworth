"format es6";

import angular from 'angular';
import angularRoute from 'angular-route';
import Hammer from 'hammer';

// Hack: Hammer must be declared in global scope
// for ngMaterial to work...
window.Hammer = Hammer;

import angularMaterial from 'angular-material';
import SignInController from 'Wordsworth/signin/signin-controller';

angular.module('wordsworth', ['ngRoute', 'ngMaterial'])
	.controller(SignInController.__name__, SignInController)
	.config(($routeProvider) => {
		$routeProvider.when('/signin', {
			templateUrl: 'src/signin/sign-in.html',
			controller: SignInController.__name__,
			controllerAs: 'signin'
		}).otherwise({
			redirectTo: '/signin'
		});
	});
