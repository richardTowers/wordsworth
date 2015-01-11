"format es6";

class UserService {
	constructor($window) {
		this.localStorage = $window.localStorage;
		this.key = 'currentUser';
	}

	getCurrentUser() {
		var userJson = this.localStorage.getItem(this.key);
		if (userJson) {
			return angular.fromJson(userJson);
		}
		return null;
	}

	createUser(user) {
		this.localStorage.setItem(this.key, angular.toJson(user));
	}
}
UserService.__name__ = 'UserService';

export default UserService;