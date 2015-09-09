var Sequelize = require('sequelize');
var User = require('./userModel.js');
var Tag = require('./tagModel.js');

var UserTag = sequelize.define('usertag', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // status: DataTypes.STRING
})

// Tag.model.belongsToMany(User.model, {through: 'usertag'});
// User.model.belongsToMany(Tag.model, {through: 'usertag'});

module.exports = UserTag;