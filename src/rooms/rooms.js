"format es6";

import angular from 'angular';
import profileModule from '../profile/';
import NewRoomController from './new-room-controller';
import RoomsController from './rooms-controller';

export default angular.module('wordsworth.rooms', ['ngMaterial', profileModule.name])
	.controller(NewRoomController.__name__, NewRoomController)
	.controller(RoomsController.__name__, RoomsController);