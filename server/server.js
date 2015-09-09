var express = require('express'),
  app = express(),
  Sequelize = require('sequelize'),
  config = require('config'),
  http = require('http'),
  path = require('path'),
  passport = require('./oauth.js'),
  ensureAuthenticated = require('./ensureAuthenticated.js'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser');
  // .urlencoded({ extended: true }),

sequelize = new Sequelize(config.get('database.database'), config.get('database.user'), config.get('database.password'), {
  dialect: 'postgres',
  host: config.get('database.host'),
  port: 5432,
  dialectOptions: {
    ssl: true
  },
  logging: false
});

var User = require('./db_models/userModel.js');
var Tag = require('./db_models/tagModel.js');
var Project = require('./db_models/projectModel.js');
// var UserTag = require('./db_models/userTags.js');

// Tag.model.belongsToMany(User.model, {through: 'usertag'});
// User.model.belongsToMany(Tag.model, {through: 'usertag'});
Project.model.belongsToMany(User.model, {through: 'userproject'});
User.model.belongsToMany(Project.model, {through: 'userproject'});

sequelize.sync().then(function () {
  return console.log("database has synced");
});

app.use('/', express.static(__dirname + '/../client'));
app.use(cookieParser());
app.use(bodyParser.json());
//app.use(express.session({secret: "feeling lost"}));
app.use(passport.initialize()); //middleware to start passport
app.use(passport.session()); //used for persisten login

/** middleware used to authenticate any route
  * checks if a cookie exist, if so it will display continue
  * onthe the next param when used. else it would redirect to the
  * ouath/github route that will redirect to the github page */
var authenticate = function(req,res,next) {
  console.log("req.cookies.token " + req.cookies.token);
  if(!req.cookies.token) {
  //  res.sendStatus(401);
    res.redirect('/auth/github')
  }
  else {next();}
}

/** loading home page */
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

/** request for login, redirects to github.com */
app.get('/auth/github', passport.authenticate('github'), function(req,res) {
  //request will redirect to Githib for authentication
});

/** authenticates callback */
app.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: 'login'}), User.signIn);

app.get('/profile',authenticate,User.profileByNumber);

/* this route is authenticated, user must have cookie before diplaying profile*/
app.get('/profile/:number',authenticate, User.profileByNumber);


app.post('/createProject', Project.createProject);

app.post('/updateProject', Project.updateProject);

app.get('/recentProjects/:number', Project.recentProjects);

app.get('/tags', Tag.getAllTags);

app.post('/tags', Tag.addTags);

app.post('/search', function (req, res) {
  console.log(req.body);
  res.send();
})

app.get('/logout', function (req, res) {
  res.clearCookie('githubID');
  res.clearCookie('token');
  res.redirect('/');
})

/** ends session*/
// app.get('/logout', function(req,res) {
//   req.logout();
//   res.redirect('/');
// });


/* This is our initial get request for our html and allows us to remove the #
 It along with our work on the client side allows us to not reload the whole
 page on each route switch
 */
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;
