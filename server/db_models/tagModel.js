var Sequelize = require('sequelize');

var Tag = sequelize.define('tags', {
  tagName: {type: Sequelize.STRING, unique: true}
});

module.exports = Tag;