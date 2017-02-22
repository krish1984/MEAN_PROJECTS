var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path'),
  mongodb = require("./utils/mongo.js");

var app = express();
setupExpress();
var logger = require('./utils/logging.js');

console.log(mongodb.connect());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//Logging middleware
app.use(function(request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/getuser/:id', user.get);
app.post('/saveuser', user.save);

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
