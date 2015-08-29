var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require('passport'),
    OAuth2Strategy = require('passport-oauth2'),
    InternalOAuthError = require('passport-oauth2').InternalOAuthError,
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
<<<<<<< HEAD
  console.log('connected to DB');
});


=======
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
>>>>>>> f33b58e2187d03dd501982943a3c89b1c481d303

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
