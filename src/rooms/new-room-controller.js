"format es6";

class NewRoomController {
	constructor ($location, $mdBottomSheet, roomsResource) {
		this.roomsResource = roomsResource;
		this.$location = $location;
		this.$mdBottomSheet = $mdBottomSheet;
	}
	create() {
		this.roomsResource.save({
			name: this.name,
			description: this.description
		}).$promise.then((result) => {
			this.$location.path('/rooms/' + result._id);
			this.$mdBottomSheet.hide();
		});
	}
}
NewRoomController.__name__ = 'NewRoomController';

export default NewRoomController;