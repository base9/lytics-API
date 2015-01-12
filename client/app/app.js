;(function () {

  console.log('Lytics connected');

  var client = io.connect('http://localhost:5151/client');

  client.on('request:log', function(data) {
    console.log(data);
  })

})();