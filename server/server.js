var express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    config = require('config'),
    bodyParser = require('body-parser').urlencoded({ extended: true }),
    passport = require('./oauth.js'),
    sendEmail=require('./sendgrid');
  //  InternalOAuthError = require('passport-oauth2').InternalOauthError
  //  cookieParser = require('cookie-parser'),


/** connection to database */
mongoose.connect('mongodb://pairwithme:codesmith@ds035593.mongolab.com:35593/pairwithme', function(error){
  if(error) throw error;
  console.log('connected to DB');
});

app.use('/', express.static(__dirname + '/../client'));
app.use(bodyParser);
app.use(passport.initialize());
app.use(passport.session());

/** loading home page */
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../src/index.html'));
});

/** request for login, redirects to github.com */
app.get('/auth/github', passport.authenticate('github'), function(req,res) {
  //request will redirect to Githib for authentication
});

/** authenticates callback */
app.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: 'login'}), function(req,res) {
  //on success authentication
  res.redirect('/profile' + req.user.username); // want to redirect to their profile and post their username in the url
});

/** ends session*/
app.get('/logout', function(req,res) {
  req.logout();
  res.redirect('/');
});

app.get('/email', function(req,res) {
  sendEmail('samara.hernandez0@gmail.com', 'hello@example.com', 'attemp number one', 'can i input my own params in this function?');
});


app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;
