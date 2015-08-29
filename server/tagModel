var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tagSchema = new Schema({
 tag_id: {type:String,required: true},
 tagName:{ type: String, required: true, index: { unique: true } },
 knowPopularity: {type: Number},
 wantPopularity: {type: Number}
});



var Tags = mongoose.model('Tags', tagSchema);


module.exports = Tags;