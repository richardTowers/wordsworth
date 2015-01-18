"format es6";

import angular from 'angular';
import profileModule from '../profile/';
import messagesResource from './messages-resource';
import roomsModule from '../rooms/';
import RoomController from './room-controller';

export default angular.module('wordsworth.room', [profileModule.name, roomsModule.name])
	.factory(messagesResource.__name__, messagesResource)
	.controller(RoomController.__name__, RoomController);