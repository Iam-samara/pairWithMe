var Sequelize = require('sequelize');
var User = require('./userModel.js');
var KnownTag = require('./knownTagsModel.js');

var userController = {};

userController.signIn = function(req,res) {
  console.log('signing in');
  User.findOrCreate({where: {username: req.user.username}, defaults: {
    githubID: req.user.id, githubProfileURL: req.user.profileUrl,
    githubProfileImage: req.user.profilePic, token: req.user.token, email: req.user.email}}).spread(function(user, created) {
      res.cookie('githubID', user.githubID);
      res.cookie('token', user.token);
    if (created === true) {
      res.redirect('/profileEditor');
    }
    else {
      res.redirect('/profile');
    }
  })
};


userController.updateProfile = function (req, res) {
  User.findOne({where: {githubID: req.cookies.githubID}}).done(function (user) {
    if (req.body.teacher === "true") {
      var teacher = true;
    }
    else {
      var teacher = false;
    }
    if (req.body.student === "true") {
      var student = true;
    }
    else {
      var student = false;
    }
    if (req.body.collaborator === "true") {
      var collaborator = true;
    }
    else {
      var collaborator = false;
    }
    console.log(collaborator);
    user.updateAttributes({
      teacher: teacher,
      student: student,
      collaborator: collaborator
    });

  })
  
  console.log(req.body.collaborator);

  console.log(req.body);
  res.send('hi');
}

userController.profile = function (req, res) {
  User.findOne({where: {githubID: req.cookies.githubID}}).done(function (userProfile) {
    return (userProfile);
  });
};

userController.profileByName = function (req, res) {
  User.findOne({where: {username: req.params.name}}).done(function (userProfile) {
    res.send(userProfile)
  });
};

module.exports = userController;