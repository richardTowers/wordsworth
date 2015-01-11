"format es6";

class RoomController {
	constructor ($routeParams, UserService) {
		this.name = $routeParams.name;
		this.user = UserService.getCurrentUser();
		this.messages = [];
	}
	sendMessage() {
		if (this.message) {
			this.messages.push({
				user: this.user,
				text: this.message
			});
			this.message = '';
		}
	}
}
RoomController.__name__ = 'RoomController';

export default RoomController;