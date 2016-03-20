var xprs = require('express');
var app = xprs();


app.get('/', function(req, res){
   res.send("Checkout /wantit and /hello"); 
});

app.get('/wantit', function(req, res){
   res.send('hey hey hey... I know you want it... - Robin.'); 
});

app.get('/hello', function(req, res){
    res.send('Hello from the outside... - Adele.');
});

module.exports = app;
