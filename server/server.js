var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    OAuth2Strategy = require('passport-oauth').oAuth2Strategy,
    http = require('http'),
    bodyParser = require('body-parser'),
    Schema = mongoose.Schema,
    UserModel = require('./userModel'),
    TagModel = require('./tagModel'),
    ProjectModel = require('./projectModel'),
    config = require('config');

/** connection to database */
mongoose.connect(config.get('databaseLink'), function(error){
  if(error) throw error;
  else {console.log('connected to DB');}
});


// passport.use('GitHub', new OAuth2Strategy({
//     authorizationURL: 'https://github.com/login/oauth/authorize',
//     tokenURL: 'https://www.provider.com/oauth2/token',
//     clientID: config.get('oAuth.clientID'),
//     clientSecret: config.get('oAuth.clientSecret'),
//     callbackURL: 'https://www.example.com/auth/provider/callback'
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate(..., function(err, user) {
//       done(err, user);
//     });
//   }
// ));

/**  */



app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;