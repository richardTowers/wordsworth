"format es6";

class NewRoomController {
	constructor ($location, $mdBottomSheet) {
		this.$location = $location;
		this.$mdBottomSheet = $mdBottomSheet;
	}
	create() {
		this.$location.path('/rooms/' + this.name);
		this.$mdBottomSheet.hide();
	}
}
NewRoomController.__name__ = 'NewRoomController';

export default NewRoomController;