"format es6";

import angular from 'angular';
import profileModule from '../profile/';
import roomsModule from '../rooms/';
import RoomController from './room-controller';

export default angular.module('wordsworth.room', [profileModule.name, roomsModule.name])
	.controller(RoomController.__name__, RoomController);