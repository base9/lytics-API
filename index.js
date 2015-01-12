var onFinished = require('on-finished');
var Request    = require('./db.js');
// var Promise    = require('bluebird');

module.exports = function(options) {

  // wont need this, can handle in midw stack
  // var app = options.app;

  // app.get('/lytics', function(req, res, next) {
  //   // code for sending lytics dashboard to client
  //   res.sendStatus(200);
  // });

  // var db = [];

  return function (req, res, next) {
    req._startAt = process.hrtime();
    req._startTime = new Date;
    req._remoteAddress = getIp(req);
    
    function logRequest() {
      var request = new Request({
        url: req.url,
        method: req.method,
        requestTime: req._startTime,
        duration: getElapsedInMs(req._startAt),
        ip: "" + getIp(req),
        body: req.body,
        query: req.query
      })
      .save(function(err) {
        if (err) return console.error(err);
      });

    }

    onFinished(res, logRequest);
    next();
  }

  function getElapsedInMs(hrTime) {
    var elapsedHrTime = process.hrtime(hrTime);
    return elapsedHrTime[0] * 1e9 + elapsedHrTime[1];
  }

  function getIp(req) {
    return req.ip
      || req._remoteAddress
      || (req.connection && req.connection.remoteAddress)
      || undefined;
  }

}
