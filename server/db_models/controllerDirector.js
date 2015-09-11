var Tag = require('./tagModel.js');
var KnownTag = require('./knownTagsModel.js');
var TagController = require('./tagController.js');
var UserController = require('./userController.js');
var KnownTagsController = require('./knownTagsController.js');
var WantedTagsController = require('./wantedTagsController.js');


var controllerDirector = {};

controllerDirector.updateProfile = function (req, res) {
  // UserController.updateProfile(req, res);
  // TagController.addTags(req, res);
  // KnownTagController.addTags(req, res);
  // WantedTagController.addTags(req, res);
  User.findOne({where: {githubID: req.cookies.githubID}}).done(function (user) {
    if (req.body.teacher === "true") {
      var teacher = true;
    }
    else {
      var teacher = false;
    }
    if (req.body.student === "true") {
      var student = true;
    }
    else {
      var student = false;
    }
    if (req.body.collaborator === "true") {
      var collaborator = true;
    }
    else {
      var collaborator = false;
    }
    user.updateAttributes({
      teacher: teacher,
      student: student,
      collaborator: collaborator
    }).done(function (user) {
      var tags = '';
      if (req.body.have && req.body.want) {
        tags = req.body.have + ',' + req.body.want;
      }
      else if (req.body.have) {
        tags = req.body.have;
      }
      else if (req.body.want) {
        tags = req.body.want;
      }
      var tags = tags.split(',');
      console.log(tags);
      for (var i = 0; i < tags.length; i++) {
        Tag.findOrCreate({where: {tagName: tags[i]}}).spread(function (tag) {
          console.log(tag);
          tag.addKnown(user).then(function() {
            user.addKnown(tag)
            }).done(function () {
              tag.addWant(user).then(function() {
              user.addWant(tag)
            });
          })
        });
      }
    });
  })
};

controllerDirector.getProfile = function (req, res) {
  User.findOne({where: {githubID: req.cookies.githubID},
    include: [{model: Tag, as: 'known'}, {model: Tag, as: 'want'}]}).done(function (user) {
    res.send(user);
  })
};

module.exports = controllerDirector;