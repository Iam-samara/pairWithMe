var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  passport = require('passport'),
  OAuth2Strategy = require('passport-oauth').oAuth2Strategy,
  http = require('http'),
  bodyParser = require('body-parser'),
  Schema = mongoose.Schema,
  UserModel = require('./userModel'),
  TagModel = require('./tagModel'),
  ProjectModel = require('./projectModel'),
  config = require('config'),
  pg = require('pg');
  Sequelize = require('sequelize'),


sequelize = new Sequelize(config.get('database.database'), config.get('database.user'), config.get('database.password'), {
  dialect: 'postgres',
  host: config.get('database.host'),
  port: 5432,
  dialectOptions: {
    ssl: true
  }
});



var Tests = sequelize.define('testtable', {
  area: Sequelize.STRING,
  tags: Sequelize.STRING
});

sequelize.sync().then(function () {
  return Tests.create({
    area: 'meh',
    tags: "js"
  });
})

app.use('/search', function (req, res) {
  
});


app.use(express.static('client'));
app.listen(process.env.PORT || 3000);
module.exports = app;