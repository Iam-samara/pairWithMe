var express = require('express'),
  app = express(),
  OAuth2Strategy = require('passport-oauth').oAuth2Strategy,
  http = require('http'),
  path = require('path'),
  bodyParser = require('body-parser').urlencoded({ extended: true }),
  passport = require('./oauth.js'),
  UserModel = require('./userModel'),
  TagModel = require('./tagModel'),
  ProjectModel = require('./projectModel'),
  config = require('config'),
  pg = require('pg');
  Sequelize = require('sequelize');


sequelize = new Sequelize(config.get('database.database'), config.get('database.user'), config.get('database.password'), {
  dialect: 'postgres',
  host: config.get('database.host'),
  port: 5432,
  dialectOptions: {
    ssl: true
  }
    

app.use('/', express.static(__dirname + '/../client'));
app.use(bodyParser);
app.use(passport.initialize());
app.use(passport.session());

/** loading home page */
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../src/index.html'));
});

var Tests = sequelize.define('testtable', {
  area: Sequelize.STRING,
  tags: Sequelize.STRING
});

sequelize.sync().then(function () {
  return Tests.create({
    area: 'meh',
    tags: "js"
  });
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




app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;
