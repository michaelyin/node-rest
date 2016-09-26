var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var fs = require("fs");

var winston = require('winston')

winston.add(
  winston.transports.File, {
    filename: './logs/math.log',
    level: 'info',
    json: true,
    eol: '\n', // for Windows, or `eol: ‘n’,` for *NIX OSs
    timestamp: true
  }
)


app.post('/asciimath', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
     data = JSON.parse( data );
      console.log(req.body);
      console.log(req.body.id);
      winston.info("id: %s", req.body.id);
      console.log( data );
      res.contentType('application/json');
      res.send( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

//   console.log("math format conversion app listening at http://%s:%s", host, port)
   winston.info("math format conversion app listening at http://%s:%s", host, port);
})
