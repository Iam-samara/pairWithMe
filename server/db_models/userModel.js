var Sequelize = require('sequelize');

var User = sequelize.define('users', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  githubID: Sequelize.STRING,
  githubProfileURL: Sequelize.STRING,
  githubProfileImage: Sequelize.STRING,
  token: Sequelize.STRING
});

module.exports = User;