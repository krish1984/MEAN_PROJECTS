var logger = require('../utils/logging.js');
var User = require("../utils/models/user.js");
module.exports = {
	hello : function(req, res){
		  res.render('index', { title: 'Express' });
	},
	findAll : function(req, res) {
		User.find({},function(err, results) {
		    return res.send(results);
		  });
	},

	findById : function(req, res) {
		logger.debug('Entering cheese testing');
		User.find(req.body,function(err, results) {
		    return res.send(results);
		  });
		/*var response = {
			"id":req.params.id,
			"first_name" : req.query.fname,
			"last_name" : req.query.lname
			};
			res.writeHead(200, { "Content-Type": "text/plain" });
			res.end(JSON.stringify(response));
		 */
	},
	add : function(req, res) {
		// if u want to parse req.body as json, browser must set
		// content-type:application/json
		// or else u only see empty body!
		try {
			console.log(req.body);
			var User = require('../utils/models/user.js');
			var u = new User(req.body);
			u.save(function(err) {
				console.log('User saved successfully!');
				
			});
		} catch (err) {
			logger.error(err);
		}

		res.end(JSON.stringify(req.body));
	}
	
};
