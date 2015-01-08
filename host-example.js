var express = require('express');
var lytics = require('./');

var app = express();

app.use(lytics());

app.listen(5151);