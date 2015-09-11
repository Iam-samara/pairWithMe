var UserController = require('./userController.js');
var KnownTagsController = require('./knownTagsController.js');
var WantedTagsController = require('./wantedTagsController.js');

var controllerDirector = {};

controllerDirector.updateProfile = function (req, res) {
  UserController.updateProfile(req, res);
  KnownTagController.addTags(req, res);
  WantedTagController.addTags(req, res);
};

controllerDirector.getProfile = function (req, res) {
  console.log('request for ' + req.params.name);
  var sendIt = {};
  User.findOne({where: {githubID: req.cookies.githubID}}).done(function (user) {
    // sendIt.id = user.id;
    // sendIt.userName = user.userName;
    // user.getKnown().done(function (knowns) {
    //   user.knownTags = knowns[0].dataValues;
    //   user.getWant().done(function (want) {
    //     user.wantTags = want;
    //     console.log(user.knownTags);
    //     res.send(user);
    //   })
    // })
  res.send(user);
  })
};

module.exports = controllerDirector;
