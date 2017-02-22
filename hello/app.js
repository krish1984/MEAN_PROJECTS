var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();
setupExpress();
var logger = require('./utils/logging.js');

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Logging middleware
app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

require('./routes/allRoutes')(app);
/*
 * alternatively we can define routes directly here, as follows: (but it has 2 issues. 
 * 1. u shuld not defining controller code in the routers, doe nt look good!
 * 2. u r polluting the app.js with routing declarations, it does not look good. 
 * 
 * var routes =  require('./routes/userRoutes');
 * app.get('/', userroutes.index);
	app.get('/users', userroutes.list);
	app.get('/getuser/:id', userroutes.get);*/


http.createServer(app).listen(8080, function(){
  console.log('Express server listening on port ' + app.get('port'));
});


function setupExpress(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public')));
}
