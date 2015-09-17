var Sequelize = require('sequelize');
var User = require('./userModel.js');
var Tag = require('./tagModel.js');

var WantedTag = sequelize.define('wantedtags', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});

module.exports = WantedTag;
