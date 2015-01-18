"format es6";

function messagesResource ($resource) {
	return $resource('/api/rooms/:id/messages');
}
messagesResource.__name__ = 'messagesResource';

export default messagesResource;