var onFinished = require('on-finished');

// sets up lyticsServer listening on 5151
var lyticsServer = require('./server/server');

// set up  socket from host app to 5151
var socketClient = require('./host/socket');

module.exports = function(options) {


  return function (req, res, next) {
    req._startAt = process.hrtime();
    req._startTime = new Date;
    req._remoteAddress = getIp(req);

    function logRequest() {
      var requestData = {
        url: req.url,
        method: req.method,
        requestTime: req._startTime,
        duration: getElapsedInMs(req._startAt),
        ip: "" + getIp(req),
        body: req.body,
        query: req.query
      };

      socketClient.emit('request:log', requestData);
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
