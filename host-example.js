var express = require('express');
var lytics = require('./');

var app = express();

app.use(lytics());

app.use(function(req, res) {
  res.send(200);
})

app.listen(5151);