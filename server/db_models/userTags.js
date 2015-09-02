var Sequelize = require('sequelize');

var UserTags = sequelize.define('userTags', {
  user_ID: Sequelize.STRING,
  tag_ID: Sequelize.STRING
});

module.exports = UserTags;