var mongoose = require('mongoose');
/*mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
	console.log("connected.............");
});

module.exports=mongoose;*/

module.exports = {
		connect:function(){
			var status=false;
			mongoose.connect("mongodb://localhost/test",function(error){
				if(error){
					console.log("error"+error);
					throw "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
				}else{
					console.log("open done");
					status=true;
				}
			});
		}
};