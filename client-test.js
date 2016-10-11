var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var req = new XMLHttpRequest();
req.open('POST', 'http://127.0.0.1:8081/asciimath');
req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


var mathml;
var tpl = fs.readFile( __dirname + "/" + "mathml.json", 'utf8', function (err, data) {
	mathml = JSON.parse(data);
})

/*
var mathml= {
      "mathml" : "mathml",
      "asciimath" : "password4",
      "id": "4"
};
*/

req.send(JSON.stringify(mathml));
