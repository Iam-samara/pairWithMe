var Sequelize = require('sequelize');

var User = {};

User.model = sequelize.define('users', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  githubID: Sequelize.STRING,
  githubProfileURL: Sequelize.STRING,
  githubProfileImage: Sequelize.STRING,
  token: Sequelize.STRING
});

User.signIn = function(req,res) {
  //on success authentication
  // console.log(req.user);
  User.model.findOrCreate({where: {username: req.user.username}, defaults: {
    githubID: req.user.id, githubProfileURL: req.user.profileUrl,
    githubProfileImage: req.user.profilePic, token: req.user.token, email: req.user.email}}).spread(function(user, created) {
      res.cookie('githubID', user.githubID);
      res.cookie('token', user.token);
      // res.cookie('githubProfileURL', user.githubProfileURL);
      // res.cookie('githubProfileImage', user.githubProfileImage);
      // res.cookie('email', user.email);
    if (created === true) {
      res.redirect('/profileForm');
    }
    else {
      res.redirect('/profile');
    }
  })
};

User.profileByNumber = function (req, res) {
  User.model.findOne({where: {id: req.params.number}}).done(function (userProfile) {
    console.log(userProfile);
    res.send(userProfile)
  })
};

// User.

module.exports = User;