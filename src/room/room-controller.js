"format es6";

class RoomController {
	constructor ($routeParams) {
		this.name = $routeParams.name;
	}
}
RoomController.__name__ = 'RoomController';

export default RoomController;