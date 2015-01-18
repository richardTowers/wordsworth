"format es6";

class NotificationService {
	constructor($q) {
		this.$q = $q;
		this.notificationsSupported = !!window.Notification;
	}
	permissionGranted() {
		return this.notificationsSupported && Notification.permission === 'granted';
	}
	requestPermission() {
		var deferred = this.$q.defer(),
			promise = deferred.promise;

		if (!this.notificationsSupported) {
			deferred.reject('unsupported');
		}
		else {
			Notification.requestPermission((status) => {
				if (Notification.permission !== status) {
					Notification.permission = status;
				}
				if (status == 'granted') {
					deferred.resolve(status);
				}
				else {
					deferred.reject(status);
				}
			});
		}

		return promise;
	}
	sendNotification(title, options) {
		if (this.permissionGranted()) {
			return new Notification(title, options);
		}
	}
}
NotificationService.__name__ = 'NotificationService';

export default NotificationService;