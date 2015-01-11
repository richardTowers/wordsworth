"format es6";

import NewRoomController from './new-room-controller';

class RoomsController {
	constructor ($mdBottomSheet, UserService) {
		this.$mdBottomSheet = $mdBottomSheet;
		this.user = UserService.getCurrentUser();
	}
	showAddRoomSheet() {
		this.$mdBottomSheet.show({
			templateUrl: 'src/rooms/new-room-sheet.html',
			controller: NewRoomController.__name__,
			controllerAs: 'room'
		});
	}
}
RoomsController.__name__ = 'RoomsController';

export default RoomsController;