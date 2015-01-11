"format es6";

import angular from 'angular';
import Hammer from 'hammer';

// Hack: Hammer must be declared in global scope
// for ngMaterial to work...
window.Hammer = Hammer;

import angularMaterial from 'angular-material';
import SignInController from 'Wordsworth/signin/signin-controller';

angular.module('wordsworth', ['ngMaterial'])
	.controller(SignInController.__name__, SignInController);
