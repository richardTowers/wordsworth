"format es6";

import angular from 'angular';
import ProfileController from './profile-controller';
import UserService from './user-service';

export default angular.module('wordsworth.profile', [])
	.service(UserService.__name__, UserService)
	.controller(ProfileController.__name__, ProfileController);