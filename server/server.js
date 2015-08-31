var express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    GitHubStrategy = require('passport-github').Strategy,
    InternalOAuthError = require('passport-oauth2').InternalOauthError,
    config = require('config'),
  //  cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser').urlencoded({ extended: true });
    //oauth = require('./oauth.js');
//    http = require('http'),
//    bodyParser = require('body-parser'),
//    Schema = mongoose.Schema;

/** connection to database */
mongoose.connect('mongodb://pairwithme:codesmith@ds035593.mongolab.com:35593/pairwithme', function(error){
  if(error) throw error;
  console.log('connected to DB');
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../src/index.html'));
});

//app.use(cookieParser);
app.use('/', express.static(__dirname + '/../client'));
app.use(bodyParser);
app.use(passport.initialize());
app.use(passport.session());

/** request to Github, w.out specifying scope
  * should get back: user: email & follow, public repo info, and gist **/
passport.use(new GitHubStrategy({
  clientID: config.get('oAuth.clientID'),
  clientSecret: config.get('oAuth.clientSecret'),
  callbackURL: 'http://localhost:3000/auth/github/callback',
  userAgent: 'pairWithMe'
},
function(accessToken, refreshToken, profile, done) {
  //var new User model and save what we want
  /**
  var gitUser = new User({
    _id: profile._json.id,
    email: profile._json.email,
    token:
  });
  gitUser.save(function() {
    console.log('user saved to db');
  });

  */
  process.nextTick(function() {
    done(null, profile);
    console.log(profile);
  });


}));

/** Github login
  * serializeuser stores the user id in the session
  * deserializeuser gets the user from database and store it in req.user */
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  // User.find({id: user.id?}, function() {
  //
  // })
  done(null, user);
});

/** authenticate every request */
// app.get('/projects', passport.authenticate('oauth2'));
// app.get('/profile', passport.authenticate('oauth2'));

app.get('/auth/github', passport.authenticate('github'), function(req,res) {
  //request will redirect to Githib for authentication
});

/** authenticates callback */
app.get('/auth/github/callback', passport.authenticate('oauth2', {failureRedirect: 'login'}), function(req,res) {
  //on success authentication
  res.redirect('/profile' + req.user.username); // want to redirect to their profile and post their username in the url
});

app.get('/logout', function(req,res) {
  req.logout();
  res.redirect('/');
});

/** use this middleware on any routes that need to be protected */
function ensureAuthentication(req,res, next) {
  if(req.isAuthenticated()) {return next();}
  res.redirect('/login');
}

app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;
