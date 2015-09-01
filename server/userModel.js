var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
<<<<<<< HEAD:server/userModel
 _id: {type:String, required: true},
 email: { type: String, required: true, index: { unique: true } },
 token: String,
 student: Boolean,
 teacher: Boolean,
 collaborator: Boolean,
 known: [String],
 want: [String],
 teach: [String]
=======
 _id: {type:String,required: true}hncgjg hjg jfyvj,
 email:{ type: String, required: true, index: { unique: true } },
 token:{type: String, required: true}
>>>>>>> 10df5d3e0cb103719f1478b62c8fa39e6b14ecd7:server/userModel.js
});


var Users = mongoose.model('Users',userSchema);


module.exports = Users;
