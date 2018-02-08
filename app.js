const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')

//sets port to herokus assignment or 3000
const PORT = process.env.PORT || 3000
require('dotenv').config()

const app = express();
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
const index = require('./routes/index');
const users = require('./routes/users');
const boards = require('./routes/boards');
const boards_users = require('./routes/boards_users');
const items = require('./routes/items');
app.use('/', index);
app.use('/users', users);
app.use('/boards', boards);
app.use('/boards_users', boards_users);
app.use('/items', items);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;

