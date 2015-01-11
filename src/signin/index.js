"format es6";

import angular from 'angular';
import SignInController from './signin-controller';
import UserService from './user-service';

export default angular.module('wordsworth.signin', [])
	.service(UserService.__name__, UserService)
	.controller(SignInController.__name__, SignInController);