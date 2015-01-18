"format es6";

function roomsResource ($resource) {
	return $resource('/api/rooms/:id');
}
roomsResource.__name__ = 'roomsResource';

export default roomsResource;