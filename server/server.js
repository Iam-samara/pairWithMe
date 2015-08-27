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
/** oAuth configurations for this app */
CLIENT_ID = "114fa33aeb2551ee3084";
CLIENT_SECRET = "9b98012dbfb5286493ac0b278a1862499e660ae";

/**  */



app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;
