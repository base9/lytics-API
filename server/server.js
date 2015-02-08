var Request = require('./request.model');
var express = require('express');

var app = express();

app.listen(5151, function () {
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