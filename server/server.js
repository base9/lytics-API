var path = require('path');
var Request = require('./request.model');
var express = require('express');
var app = express();

var rootPath = path.normalize(__dirname + '/..');

app.use('/bower_components', express.static(path.join(rootPath, '/bower_components')));
app.use(express.static(path.join(rootPath, '/client')));

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('socket connected to lytics');

  socket.on('request:log', function (data) {
    logRequest(data);
  });
});

server.listen(5151, function () {
  console.log('Lytics listening on port 5151');
});

function logRequest (request) {
  request = new Request(request);
  request.save(function(err){
    if (err) throw err;
    console.log('lytics reporting', request);
  })
}