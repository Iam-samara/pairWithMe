var Sequelize = require('sequelize');

var Project  = sequelize.define('projects', {
  projectName: Sequelize.STRING,
  githubLink: Sequelize.STRING,
  description: Sequelize.STRING,
  tools: Sequelize.STRING,
  learned: Sequelize.STRING,
});

module.exports = Project;
