var port = process.env.PORT || '8080';
var host = process.env.HOST || '0.0.0.0';

var app = require('express')();

app.use(require('./app'));
app.use(require('./app/motivateme'));

app.listen(port, host);

console.log("Server running at %s:%d", host, port);
