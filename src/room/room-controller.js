"format es6";

import io from 'socket.io-client';

class RoomController {
	constructor ($routeParams, $scope, UserService, roomsResource, messagesResource, NotificationService) {

		this.$scope = $scope;
		this.room = roomsResource.get({id: $routeParams.name});

		this.user = UserService.getCurrentUser();
		this.messages = messagesResource.query({id: $routeParams.name});

		this.room.$promise.then(() => {
			this.socket = io();

			this.socket.on('chat message', (msg) => {
				var notification;
				if (msg.room === this.room._id) {
					$scope.$broadcast('newMessage');

					$scope.$apply(() => this.messages.push(msg));
					
					if (!document.hasFocus()) {
						notification = NotificationService.sendNotification(msg.user.nickname + ' (' + this.room.name + ')', { icon: msg.user.avatar, body: msg.text });
						if (notification) {
							setTimeout(() => notification.close(), 4000);
						}
					}
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
			this.$scope.$broadcast('newMessage');
		}
	}
}
RoomController.__name__ = 'RoomController';

export default RoomController;