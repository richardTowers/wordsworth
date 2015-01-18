"format es6";

import angular from 'angular';
import ngResource from 'angular-resource';
import profileModule from '../profile/';
import roomsResource from './rooms-service';
import NewRoomController from './new-room-controller';
import RoomsController from './rooms-controller';

export default angular.module('wordsworth.rooms', ['ngMaterial', 'ngResource', profileModule.name])
	.factory(roomsResource.__name__, roomsResource)
	.controller(NewRoomController.__name__, NewRoomController)
	.controller(RoomsController.__name__, RoomsController);