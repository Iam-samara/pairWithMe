var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    OAuth2Strategy = require('passport-oauth2'),
    InternalOAuthError = require('passport-oauth2').InternalOAuthError,
    http = require('http'),
    bodyParser = require('body-parser'),
    Schema = mongoose.Schema;

/** connection to database */
mongoose.connect('mongodb://pairwithme:codesmith@ds035593.mongolab.com:35593/pairwithme', function(error){
  if(error) throw error;
  console.log('connected to DB');
});



passport.use('github', new OAuth2Strategy({
    autherizationUrl:'https://github.com/login/oauth/access_token',
    tokenUrl: '',
    clientID: '',
    clientSecret: '',
    callbackkUrl: ''
  },
  function(accessToken, refreshToken, profile, done){
    User.findOrCreate({}, function(err,user){
      done(err, user);
    });
  }
));


app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;
