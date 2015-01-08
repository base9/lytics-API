var onFinished = require('on-finished')

module.exports = function(options) {

  // wont need this, can handle in midw stack
  // var app = options.app;

  // app.get('/lytics', function(req, res, next) {
  //   // code for sending lytics dashboard to client
  //   res.sendStatus(200);
  // });

  var db = [];


  return function (req, res, next) {
    req._startAt = process.hrtime();
    req._startTime = new Date;
    req._remoteAddress = getIp(req);
    
    function logRequest() {
      var reqData = {
        url: req.url,
        method: req.method,
        requestTime: req._startTime,
        duration: process.hrtime(req._startAt),
        ip: getIp(req),
        body: req.body,
        query: req.query
      };

      db.push(reqData);
      console.log(db);
    }

    onFinished(res, logRequest)
    next();
  }

  function getIp(req) {
    return req.ip
      || req._remoteAddress
      || (req.connection && req.connection.remoteAddress)
      || undefined;
  }

}
