var express = require('express'),
	bodyParser = require('body-parser'),
	socketio = require('socket.io'),
	Datastore = require('nedb'),
	db = new Datastore({ filename: __dirname + '/wordsworth-data', autoload: true }),
	app = express();

app.use(bodyParser.json());

app.post('/api/rooms', function (req, res) {
	var body = req.body,
		doc = {
			_id: body.name.toLowerCase().replace(/[^a-z]/g, ''),
			name: body.name,
			description: body.description
		};

	db.insert(doc, function (err, newDoc) {
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
	db.find({}, function (err, docs) {
		res.send(docs);
	});
});

app.get('/api/rooms/:id', function (req, res) {
	db.find({_id: req.params.id}, function (err, docs) {
		if (!docs) {
			res.sendStatus(404);
		}
		else if (docs.length === 1) {
			res.send(docs[0]);
		}
		else {
			res.sendStatus(500);
		}
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
		console.log('message: ', msg);
		socket.broadcast.emit('chat message', msg);
	});
});