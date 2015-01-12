var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lytics');

var RequestSchema = new mongoose.Schema({
  url: String,
  method: String,
  requestTime: Date,
  duration: Number,
  ip: String,
  body: String, //if this does not work, then try stringifying 
  query: String
});

module.exports = mongoose.model("Request", RequestSchema);
