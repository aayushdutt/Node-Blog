var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var multer = require('multer')

var index = require('./routes/index');
var posts = require('./routes/posts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', '2.png')));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/posts', posts);

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
  res.render('error');
});

port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('running on port: '+ port)
});
