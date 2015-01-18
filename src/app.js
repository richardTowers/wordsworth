"format es6";

import angular from 'angular';
import angularRoute from 'angular-route';
import Hammer from 'hammer';

// Hack: Hammer must be declared in global scope
// for ngMaterial to work...
window.Hammer = Hammer;

import angularMaterial from 'angular-material';

import profileModule from 'Wordsworth/profile/';
import roomsModule from 'Wordsworth/rooms/';
import roomModule from 'Wordsworth/room/';
import notificationsModule from 'Wordsworth/notifications/';

angular.module('wordsworth', ['ngRoute', 'ngMaterial', profileModule.name, roomsModule.name, roomModule.name, notificationsModule.name])
	.config(($routeProvider) => {
		$routeProvider.when('/profile', {
			name: 'profile',
			templateUrl: 'src/profile/profile.html',
			controller: 'ProfileController',
			controllerAs: 'profile'
		}).when('/rooms', {
			templateUrl: 'src/rooms/rooms.html',
			controller: 'RoomsController',
			controllerAs: 'rooms'
		}).when('/rooms/:name', {
			templateUrl: 'src/room/room.html',
			controller: 'RoomController',
			controllerAs: 'room'
		}).otherwise({
			redirectTo: '/rooms'
		});
	})
	.run(($rootScope, $location, UserService) => {
		$rootScope.$on('$routeChangeStart', (e, next) => {
			if (next.name === 'profile') {
				// Do nothing...
				return;
			}
			var user = UserService.getCurrentUser();
			if (!user) {
				$location.path('/profile');
			}
		});

	});
