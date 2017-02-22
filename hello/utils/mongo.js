var mongoose = require('mongoose');
var logger = require('./logging.js');
//Mongo.dev.mse-esp.com
//mongodb://localhost/test
//mongoose.connect('mongodb://username:password@host:port/database?options...');
mongoose.connect("mongodb://localhost/test",function(error){
	if(error){
		logger.error("error : unable to connect to mongo");
	}else{
		logger.debug("connected to mongo..");
	}
	
});
module.exports = mongoose;