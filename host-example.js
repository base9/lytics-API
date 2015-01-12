var express = require('express');

// step 1: require lytics using this command
// var lytics = require('lytics');

var lytics = require('./');

var app = express();

// step 2: use middleware returned by lytics
app.use(lytics({
  app: app,
  db: ''
}));

app.use(function(req, res) {
  res.send(200);
});

app.listen(5151, function() {
  console.log("Now listening to post 5151");
});
