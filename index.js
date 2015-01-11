var express = require('express'),
	app = express(),
	socketio = require('socket.io');

app.use('/', express.static(__dirname));

var server = app.listen(3000, function () {
	var port = server.address().port;
	console.log('Listening on port %s', port);
});

var io = socketio(server);

io.on('connection', function (socket) {
	console.log('a user connected');
	socket.on('disconnect', function() {
		console.log('user disconnected');
	});

	socket.on('chat message', function(msg){
		console.log('message: ', msg);
		socket.broadcast.emit('chat message', msg);
	});
});