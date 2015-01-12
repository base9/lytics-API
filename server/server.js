var Request = require('./request.model');

var express = require('express');
var app = express();

app.use('/', function (req, res, next) {
  res.sendStatus(200);
});

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