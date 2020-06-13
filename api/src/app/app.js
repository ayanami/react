var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 443;

var router = require('./route/v1/');
app.use('/api/v1/', router);

var fs = require('fs');
var https = require('https');
var options = {
    key:  fs.readFileSync('./ssl/localhost.key'),
    cert: fs.readFileSync('./ssl/localhost.crt')
  };
https.createServer(options,app).listen(port);
console.log('listen on port ' + port);