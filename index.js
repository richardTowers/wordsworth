var express = require('express'),
	bodyParser = require('body-parser'),
	socketio = require('socket.io'),
	Datastore = require('nedb'),
	roomsDb = new Datastore({ filename: __dirname + '/db/wordsworth-rooms', autoload: true }),
	messagesDb = new Datastore({ filename: __dirname + '/db/wordsworth-messages', autoload: true }),
	app = express();

app.use(bodyParser.json());

app.post('/api/rooms', function (req, res) {
	var body = req.body,
		doc = {
			_id: body.name.toLowerCase().replace(/[^a-z]/g, ''),
			name: body.name,
			description: body.description
		};

	roomsDb.insert(doc, function (err, newDoc) {
		if (err) {
			// Assume its the user's fault (400 - bad request)
			res.status(400).send(err);
		}
		else {
			res.status(201).send(newDoc);
		}
	});
});

app.get('/api/rooms', function (req, res) {
	roomsDb.find({}, function (err, docs) {
		res.send(docs);
	});
});

app.get('/api/rooms/:id', function (req, res) {
	roomsDb.findOne({_id: req.params.id}, function (err, doc) {
		if (err) {
			res.sendStatus(500);
			return;
		}
		if (!doc) {
			res.sendStatus(404);
		}
		else {
			res.send(doc);
		}
	});
});

app.get('/api/rooms/:id/messages', function (req, res) {
	messagesDb.find({room: req.params.id}, function (err, docs) {
		if (err) {
			res.sendStatus(500);
		}
		res.send(docs.reverse());
	});
});

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
		messagesDb.insert(msg);
		socket.broadcast.emit('chat message', msg);
	});
});