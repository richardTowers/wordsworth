"format es6";

import io from 'socket.io-client';

class RoomController {
	constructor ($routeParams, $scope, UserService, roomsResource, messagesResource) {

		this.room = roomsResource.get({id: $routeParams.name});

		this.user = UserService.getCurrentUser();
		this.messages = messagesResource.query({id: $routeParams.name});

		this.room.$promise.then(() => {
			this.socket = io();

			this.socket.on('chat message', (msg) => {
				if (msg.room === this.room._id) {
					$scope.$apply(() => this.messages.push(msg));
				}
			});
		});
	}
	sendMessage() {
		var messageDetails;
		if (this.message) {
			messageDetails = {
				room: this.room._id,
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