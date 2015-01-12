var socketClient = require('socket.io-client')('http://localhost:5151');
socketClient.on('connect', function(){});
socketClient.on('event', function(data){

});
socketClient.on('disconnect', function(){});

module.exports = socketClient;