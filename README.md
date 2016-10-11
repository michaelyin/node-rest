# node-rest
rest service to Convert subset of MathML to ASCIIMathML.

# installation
1. install node.js, see etc/install-node-centos.txt

2. install dependency packages

```
  npm install express  
  npm install body-parser  
  npm install winston  
  npm install mathml-to-asciimath
  npm install cors

```

# run rest svc
node server.js
it will listen to port 8081

there is a log named math.log in ./logs. You may need manually create logs folder for logging to work properly. One time job.

# test
node client-test.js