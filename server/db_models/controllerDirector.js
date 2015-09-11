var Tag = require('./tagModel.js');
var KnownTag = require('./knownTagsModel.js');
var UserController = require('./userController.js');
var KnownTagsController = require('./knownTagsController.js');
var WantedTagsController = require('./wantedTagsController.js');


var controllerDirector = {};

controllerDirector.updateProfile = function (req, res) {
  UserController.updateProfile(req, res);
  // KnownTagController.addTags(req, res);
  // WantedTagController.addTags(req, res);
};

controllerDirector.getProfile = function (req, res) {
  var sendIt = {};
  User.findOne({where: {githubID: req.cookies.githubID},
    include: [{model: Tag, as: 'known'}, {model: Tag, as: 'want'}]}).done(function (user) {
    res.send(user);
  })
};

controllerDirector.test = function (req, res) {
  User.findOne({where: {githubID:req.cookies.githubID},
      include: [KnownTag]}).done(function (user) {
        res.send(user)
      })
};

module.exports = controllerDirector;