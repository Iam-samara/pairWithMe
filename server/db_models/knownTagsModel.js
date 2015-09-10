var Sequelize = require('sequelize');
var User = require('./userModel.js');
var Tag = require('./tagModel.js');
// var express = require('express'),
//   app = express();
// var cookieParser = require('cookie-parser');
// app.use


var KnownTag = sequelize.define('knowntags', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  // status: DataTypes.STRING
});


// Tag.model.belongsToMany(User.model, {through: 'knowntag'});
// User.model.belongsToMany(Tag.model, {through: 'knowntag'});




module.exports = KnownTag;