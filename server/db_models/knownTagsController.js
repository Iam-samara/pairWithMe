var Sequelize = require('sequelize');
var User = require('./userModel.js');
var Tag = require('./tagModel.js');
var KnownTag = require('./knownTagsModel.js');
var UserController = require('./userController.js');
var WantedTagController = require('./wantedTagsController.js');

KnownTagController = {};

KnownTagController.addTags = function (req, res) {
  User.findOne({
    where: {githubID:req.cookies.githubID}
  }).done(function (user) {
    var knowns = req.body.have.split(',');
    for (var i = 0; i < knowns.length; i++) {
      Tag.findOne({
        where: {tagName: knowns[i]}
      }).done(function (tag) {
        tag.addKnown(user).then(function() {
          user.addKnown(tag)
        });
      });
    }
  })
  console.log('check db');

  
}

// KnownTagController.getTags = function (req, res) {
  
// }

module.exports = KnownTagController;