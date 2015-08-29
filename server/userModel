var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
 _id: {type:String,required: true},
 email:{ type: String, required: true, index: { unique: true } },
 token:{type: String, required: true}
});


var Users = mongoose.model('Users',userSchema);


module.exports = Users;