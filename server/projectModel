var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
 project_id: {type:String,required: true},
 projectName:{ type: String, required: true, index: { unique: true } }
});



var Projects = mongoose.model('Projects',projectSchema);


module.exports = Projects;