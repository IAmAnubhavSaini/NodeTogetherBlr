var motivations = require('motivations');
var pickOne = require('pick-one');

var xprs = require('express');
var app = xprs();

app.get('/motivateme/random', function(req, res){
    res.send(pickOne(motivations));
});

app.get('/motivateme/:index', function(req, res){
    var number = req.params.index;
   res.send(motivations[parseInt(number)]); 
});

app.get('/motivateme', function(req, res){
    res.send(motivations);
});



module.exports = app;