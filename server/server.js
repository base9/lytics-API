var path = require('path');
var Request = require('./request.model');
var express = require('express');
var app = express();

var rootPath = path.normalize(__dirname + '/..');

app.use('/bower_components', express.static(path.join(rootPath, '/bower_components')));
app.use(express.static(path.join(rootPath, '/client')));

var server = require('http').createServer(app);
var io = require('socket.io')(server);

var host = io.of('/host');
var client = io.of('/client');

host.on('connection', function(socket){
  console.log('socket connected to lytics');

  socket.on('request:log', function (data) {
    logRequest(data);
  });
});


client.on('connection', function(socket) {
  console.log('client connected to lytics');
})

server.listen(5151, function () {
  console.log('Lytics listening on port 5151');
});

function logRequest (request) {
  request = new Request(request);
  client.emit('request:log', request);
  
  request.save(function(err){
    if (err) throw err;
    console.log('lytics reporting', request);
  })
}