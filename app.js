var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', index);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.json({ message: 'error' });
//   //res.render('error');
// });

module.exports = app;

var port = process.env.PORT || 8080;        // set our port

var router = express.Router();

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
var routes = require('./routes/apiCollection');
app.use('/api', router);
app.use('/api', routes);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

var mongoose   = require('mongoose');
var config  = require('./config/configuration');


mongoose.connect('mongodb://'+config.username+':'+config.password+'@'+config.dbName);


