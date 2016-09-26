var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var req = new XMLHttpRequest();
req.open('POST', 'http://127.0.0.1:8081/asciimath');
req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

var user= {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
};

req.send(JSON.stringify(user));
