var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models');
var normalizedPath = require('path').join(__dirname, 'routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false, }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('fs')
  .readdirSync(normalizedPath)
  .forEach(function(file) {
    app.use('/' + file.split('.js')[0], require('./routes/' + file));
  });

module.exports = app;
