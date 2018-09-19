var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('www'))

app.get('/', function(req,res){
    // res.send('hello');
    res.sendFile(__dirname + '/www/default.html');
});

app.get('/about', function(req,res){
    res.sendFile(__dirname + '/www/about.html');
});

console.log('Server up and running, on localhost:8080');

app.listen(8080);