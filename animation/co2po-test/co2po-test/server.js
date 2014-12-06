var http = require('http');
var express = require('express');
var app = express();

var port = process.env.port || 1337;

app.use('/', express.static(__dirname + '/index'));


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);