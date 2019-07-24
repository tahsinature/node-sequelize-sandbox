const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { debugError, } = require('./util/debug');
const normalizedPath = require('path').join(__dirname, 'routes');

const app = express();

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

process.on('unhandledRejection', err => {
  debugError(err.message);
});

module.exports = app;
