var mongoose = require('../mongo.js');
var Schema = mongoose.Schema;
// create a schema
var userSchema = new Schema({
  username: { type: String},
  password: { type: String}
});


// make this available to our users in our Node applications
module.exports = mongoose.model('User', userSchema);