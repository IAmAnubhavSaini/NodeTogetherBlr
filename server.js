var port = '8080';
var host = '10.10.10.10';

var app = require('express')(); 

app.listen(port, host);

console.log("Server running at %s:%d", host, port);
