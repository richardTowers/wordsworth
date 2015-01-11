"format es6";

import io from 'socket.io-client';

class RoomController {
	constructor ($routeParams, $scope, UserService) {
		this.name = $routeParams.name;
		this.user = UserService.getCurrentUser();
		this.messages = [];

		this.socket = io();
		this.socket.on('chat message', (msg) => {
			$scope.$apply(() => {
				this.messages.push(msg);
			});
		});
	}
	sendMessage() {
		var messageDetails;
		if (this.message) {
			messageDetails = {
				user: this.user,
				text: this.message
			};
			this.messages.push(messageDetails);
			this.message = '';

			this.socket.emit('chat message', messageDetails);
		}
	}
}
RoomController.__name__ = 'RoomController';

export default RoomController;