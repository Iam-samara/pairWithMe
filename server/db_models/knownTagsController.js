var Sequelize = require('sequelize');
var User = require('./userModel.js');
var Tag = require('./tagModel.js');
var KnownTag = require('./knownTagsModel.js');
var UserController = require('./userController.js');

KnownTagController = {};

KnownTagController.addTags = function (req, res) {
  User.findOne({
    where: {githubID:req.cookies.githubID}, 
    attributes: ['id']
  }).done(function (userid) {
    console.log(userid);
    var knowns = req.body.have.split(',');
    console.log(knowns);
    for (var i = 0; i < knowns.length; i++) {
      Tag.findOne({
        where: {tagName: knowns[i]}, 
        attributes: ['id']
      }).done(function (tagid) {
        console.log(userid);
        console.log('got the tags ids ' + tagid);
        KnownTag.findOrCreate({
          where: {
            userId: userid.id, 
            tagId: tagid.id
          }
        });
      })
    }
  })
  // UserController.updateProfile;
  console.log('check db');
}

module.exports = KnownTagController;