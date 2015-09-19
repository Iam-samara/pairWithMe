var Sequelize = require('sequelize');
var User = require('./userModel.js');
var Project = require('./projectModel.js');

var UserProject = sequelize.define('userproject', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});

module.exports = UserProject;
