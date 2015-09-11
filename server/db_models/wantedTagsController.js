var Sequelize = require('sequelize');
var User = require('./userModel.js');
var Tag = require('./tagModel.js');
var WantedTag = require('./wantedTagsModel.js');
var UserController = require('./userController.js');

WantedTagController = {};

WantedTagController.addTags = function (req, res) {
  User.findOne({
    where: {githubID:req.cookies.githubID}
  }).done(function (user) {
    var wanteds = req.body.have.split(',');
    for (var i = 0; i < wanteds.length; i++) {
      Tag.findOne({
        where: {tagName: wanteds[i]}
      }).done(function (tag) {
        tag.addWant(user).then(function() {
          user.addWant(tag)
        });
      });
    }
  })
  UserController.updateProfile;
  WantedTagController.addTags(req, res);
  console.log('check db');
}

module.exports = WantedTagController;