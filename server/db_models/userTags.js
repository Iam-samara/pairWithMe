var Sequelize = require('sequelize');
var User = require('./userModel.js');
var Tag = require('./tagModel.js');

var UserTag = {};

Tag.model.belongsToMany(User.model, {through: 'usertag'});
User.model.belongsToMany(Tag.model, {through: 'usertag'});

module.exports = UserTag;