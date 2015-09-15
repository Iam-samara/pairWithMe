var Sequelize = require('sequelize');

User = sequelize.define('users', {
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

module.exports = User;
