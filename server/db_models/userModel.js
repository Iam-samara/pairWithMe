var Sequelize = require('sequelize');


var User = {};

User.model = sequelize.define('users', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  githubID: Sequelize.STRING,
  githubProfileURL: Sequelize.STRING,
  githubProfileImage: Sequelize.STRING,
  token: Sequelize.STRING,
  teacher: Sequelize.BOOLEAN,
  student: Sequelize.BOOLEAN,
  collaborator: Sequelize.BOOLEAN
});
//on success authentication
User.signIn = function(req,res) {
  console.log('signing in');
  User.model.findOrCreate({where: {username: req.user.username}, defaults: {
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


User.updateProfile = function (req, res) {
  User.model.findOne({where: {githubID: req.cookies.githubID}}).done(function (user) {
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

User.profileByNumber = function (req, res) {
  User.model.findOne({where: {id: req.params.number}}).done(function (userProfile) {
    res.send(userProfile)
  });
};

// User.

module.exports = User;
