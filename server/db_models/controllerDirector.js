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
            user.addKnown(tag);
            }).done(function () {
              tag.addWant(user).then(function() {
              user.addWant(tag).then(function() {
                res.end();
              })
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

controllerDirector.search = function (req, res) {
  User.findOne({where: {githubID: req.cookies.githubID},
    include: [{model: Tag, as: 'known'}, {model: Tag, as: 'want'}]}).done(function (user) {
      Tag.findOne({where: {tagName: req.body.tag},
        include: [{model: User, as: 'want'}]}).done(function (tag) {
          var users1 = [];
          for (var i = 0; i < tag.want.length; i++) {
            users1.push(tag.want[i].id)
          }
          User.findAll({where: {id: users1},
          include: [{model: Tag, as: 'want'}, {model: Tag, as: 'known'}]}).done(function (users) {
            var userArray = user.want.concat(user.known);
            var likeness = [];
            for (var i = 0; i < users.length; i++) {
              if (users[i].id === user.id) {
                users.splice(i,1);
                i--;
                continue;
              }
              likeness[i] = {};
              likeness[i].value = 0;
              likeness[i].person = users[i];
              var compareArray = users[i].want.concat(users[i].known);
              for (var j = 0; j < userArray.length; j++) {
                for (var k = 0; k < compareArray.length; k++) {
                  if (userArray[j].id === compareArray[k].id) {
                    likeness[i].value++
                  }
                }
              }
            }
            likeness.sort(function (a, b) {
              if (a.value > b.value) {
                return 1;
              }
              if (a.value < b.value) {
                return -1;
              }
              return 0;
            })
            var userSend = [];
            for (var i = 0; i < likeness.length; i++) {
              userSend.push(likeness[i].person);
            }
            console.log(userSend);
            res.send(userSend);
          })
      })
  })
};

module.exports = controllerDirector;
