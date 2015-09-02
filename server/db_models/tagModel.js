var Sequelize = require('sequelize');

var Tag = sequelize.define('tags', {
  tagName: Sequelize.STRING
});

module.exports = Tag;