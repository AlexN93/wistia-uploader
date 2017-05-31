var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

app.use('/', express.static('app/'));
app.use('/bower_components', express.static('bower_components/'));

var port = Number(process.env.PORT || 8080);

server.listen(port, function () {
    'use strict';
    console.log('listening on *:8080');
});