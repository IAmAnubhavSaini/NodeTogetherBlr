var port = '8080';
var host = '0.0.0.0';

var app = require('express')();

app.use(require('./app'));
app.use(require('./app/motivateme'));

app.listen(port, host);

console.log("Server running at %s:%d", host, port);
