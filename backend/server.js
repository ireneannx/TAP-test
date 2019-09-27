require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/user');
// var usersRouter = require('./routes/users');
var userProfileRouter = require('./routes/userProfile');
var jobsRouter = require('./routes/jobs');
var postsRouter = require('./routes/posts');
var authRouter = require('./routes/auth');

var app = express();

//frontend build folder
//const root = require('path').join(__dirname, 'build');

//app.use(express.static(root))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//cors
app.use(cors())

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/jobs', jobsRouter)
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
app.use('/api/users', userProfileRouter);

//catch all other routes
// app.get("/*", (req, res) => {
//   res.sendFile("index.html", { root });
// })


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
