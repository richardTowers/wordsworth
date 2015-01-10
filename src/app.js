"format es6";

import angular from 'angular';
import { MainController } from 'Wordsworth/main/main-controller';

angular.module('wordsworth', [])
	.controller(MainController.__name__, MainController);
