"format es6";

import angular from 'angular';
import profileModule from '../profile/';
import messagesResource from './messages-resource';
import roomsModule from '../rooms/';
import RoomController from './room-controller';
import notificationsModule from '../notifications/';

export default angular.module('wordsworth.room', [profileModule.name, roomsModule.name, notificationsModule.name])
	.factory(messagesResource.__name__, messagesResource)
	.controller(RoomController.__name__, RoomController);