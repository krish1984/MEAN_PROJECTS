var logger = require('../utils/logging.js');
var User = require('../utils/models/user.js');
module.exports = {
	list : function(req, res) {
		res.send("users list");
	},

	get : function(req, res) {
		logger.trace('Entering cheese testing');
		var response = {
			"id":req.params.id,
			"first_name" : req.query.fname,
			"last_name" : req.query.lname
		};
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end(JSON.stringify(response));
	},
	save:function (req, res) { 
		//if u want to parse req.body as json, browser must set content-type:application/json
		//or else u only see empty body!
			console.log(req.body);
			var chris = new User({
				  name: 'Chris',
				  username: 'sevilayha',
				  password: 'password' 
				});
			chris.save(function(err) {
				  console.log('User saved successfully!');
				});
			
		   res.end(JSON.stringify(req.body));
		}
	
};
//http://stackoverflow.com/questions/9232562/mongoose-vs-mongodb-nodejs-modules-extensions-which-better-and-why
//http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/
//https://erichonorez.wordpress.com/2013/02/10/how-create-a-rest-api-with-node-js-and-express/