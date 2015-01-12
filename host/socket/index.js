var io = require('socket.io-client')('http://localhost:5151/host');

io.on('connect', function(){});
io.on('event', function(data){

});
io.on('disconnect', function(){});

module.exports = io;