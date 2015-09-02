var express = require('express'),
  app = express(),
  OAuth2Strategy = require('passport-oauth').oAuth2Strategy,
  http = require('http'),
  path = require('path'),
  bodyParser = require('body-parser').urlencoded({ extended: true }),
  passport = require('./oauth.js'),
  Sequelize = require('sequelize'),
  config = require('config');
  
sequelize = new Sequelize(config.get('database.database'), config.get('database.user'), config.get('database.password'), {
  dialect: 'postgres',
  host: config.get('database.host'),
  port: 5432,
  dialectOptions: {
    ssl: true
  },
  logging: false
});

var  User = require('./db_models/userModel.js'),
  Tag = require('./db_models/tagModel.js'),
  Project = require('./db_models/projectModel.js');

Tag.belongsToMany(User, {through: 'usertag'});
User.belongsToMany(Tag, {through: 'usertag'});
Project.belongsToMany(User, {through: 'userproject'});
User.belongsToMany(Project, {through: 'userproject'});

// User.create({username: 'testusername',
//   email: 'fakeemail',
//   githubID: 'numbah',
//   githubProfileURL: 'profilelink',
//   githubProfileImage: 'imagelink',
// })



sequelize.sync().then(function () {
  return console.log("database has synced");
});


app.use('/', express.static(__dirname + '/../client'));
app.use(bodyParser);
app.use(passport.initialize());
app.use(passport.session());

/** loading home page */
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});



/** request for login, redirects to github.com */
app.get('/auth/github', passport.authenticate('github'), function(req,res) {
  //request will redirect to Githib for authentication
});

/** authenticates callback */
app.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: 'login'}), function(req,res) {
  //on success authentication
  // User.create()
  res.redirect('/profile'); // want to redirect to their profile and post their username in the url
});

/** ends session*/
app.get('/logout', function(req,res) {
  req.logout();
  res.redirect('/');
});


// app.get('/profile' function(req,res) {
//   User.findOne({
//     where: {
//       username: 
//     }
//   })
// })

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});



app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;

