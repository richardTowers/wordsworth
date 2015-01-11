"format es6";

import angular from 'angular';
import RoomController from './room-controller';

export default angular.module('wordsworth.room', [])
	.controller(RoomController.__name__, RoomController);