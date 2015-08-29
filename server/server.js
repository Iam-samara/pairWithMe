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
  else {console.log('connected to DB');}
});

/** oAuth configurations for this app */
CLIENT_ID = "114fa33aeb2551ee3084";
CLIENT_SECRET = "9b98012dbfb5286493ac0b278a1862499e660ae";

passport.use(new GitHubStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github_oauth/callback',
  userAgent: 'pairWithMe'
},
function(accessToken, refreshToken, profile, done) {
  //var new User model and save what we want?
  //console.log(profile);
}))




/** Github login */
passport.serializeUser(function(user, done) {
  done(null, user);
});
pasport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use()

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

for (var i = 0; i < h.length; i++) {
  h[i]
}

app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;
