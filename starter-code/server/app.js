const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/journal-development');

const app = express();

app.use(cors());

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const index = require('./routes/index');

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({error: 'not found'});
});

// error handler
app.use((err, req, res, next) => {
  console.error('ERROR', req.method, req.path, err);

  if (!res.headersSent) {
    res.status(500).json({error: 'there was an error'});
  }
});

module.exports = app;
