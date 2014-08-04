/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

var active_zone;

// Used by mobile app to tell which zone to connect to
app.get('/connect', function(req, res) {
  var uuid = req.query.uuid;
  console.log(uuid);
});

app.get('/gesture', function(req, res) {
  var gesture = req.query.gesture;
  console.log(gesture);
});

var server = http.createServer(app);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

  socket.on('connected', function(uuid) {
    console.log('uuid ' + uuid);
    socket.join(uuid);
    active_zone = uuid;
    io.sockets.emit('someoneConnected', uuid);
  });

  socket.on('gesture', function(gesture) {
    io.sockets.emit(gesture, active_zone);
  });

  console.log("client connected");
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
