var Sequelize = require('sequelize');

var Project  = sequelize.define('projects', {
  projectName: Sequelize.STRING,
  githubLink: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = Project;