"format es6";

import angular from 'angular';
import profileModule from '../profile/';
import RoomController from './room-controller';

export default angular.module('wordsworth.room', [profileModule.name])
	.controller(RoomController.__name__, RoomController);