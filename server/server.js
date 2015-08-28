
var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    OAuth2Strategy = require('passport-oauth').oAuth2Strategy,
    http = require('http'),
    bodyParser = require('body-parser'),
    Schema = moongoose.Schema;

/** connection to database */
mongoose.connect('mongodb://pairwithme:codesmith@ds035593.mongolab.com:35593/pairwithme', function(error){
  if(error) throw error;
  else {console.log('connected to DB');}
});



// users will need more columns
var userSchema = new Schema({
 _id: {type:String,required: true},
 email:{ type: String, required: true, index: { unique: true } },
 token:{type: String, required: true}
});

var tagSchema = new Schema({
 tag_id: {type:String,required: true},
 tagName:{ type: String, required: true, index: { unique: true } },
 knowPopularity: {type: Number},
 wantPopularity: {type: Number}
});



// projects will also definitely require more columns
var projectSchema = new Schema({
 project_id: {type:String,required: true},
 projectName:{ type: String, required: true, index: { unique: true } }
});


/** oAuth configurations for this app */
CLIENT_ID = "114fa33aeb2551ee3084";
CLIENT_SECRET = "9b98012dbfb5286493ac0b278a1862499e660ae";

/**  */



app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;