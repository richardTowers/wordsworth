"format es6";

import angular from 'angular';
import NotificationService from './notificationService';

export default angular.module('notifications', [])
	.service(NotificationService.__name__, NotificationService)
	.run([NotificationService.__name__, notificationService => notificationService.requestPermission() ]);