var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.json());
app.use(cors());

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

var tplData;
var tpl = fs.readFile( __dirname + "/" + "mathml.json", 'utf8', function (err, data) {
    tplData = JSON.parse(data);
})

var convert = require('mathml-to-asciimath');

app.post('/asciimath', function (req, res) {
   // First read existing users.
      console.log(req.body);
      winston.info("id: %s", req.body.id);
      tplData.id = req.body.id;
      tplData.mathml = req.body.mathml;
      tplData.asciimath = convert(tplData.mathml);
      winston.info("asciimath: %s", tplData.asciimath);
      res.contentType('application/json');
      res.send( JSON.stringify(tplData));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

//   console.log("math format conversion app listening at http://%s:%s", host, port)
   winston.info("math format conversion app listening at http://%s:%s", host, port);
})

