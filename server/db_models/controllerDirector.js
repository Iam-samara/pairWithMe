var Tag = require('./tagModel.js');
var KnownTag = require('./knownTagsModel.js');
var TagController = require('./tagController.js');
var UserController = require('./userController.js');
var KnownTagsController = require('./knownTagsController.js');
var WantedTagsController = require('./wantedTagsController.js');
var Project = require('./projectModel.js');

var controllerDirector = {};

controllerDirector.updateProfile = function (req, res) {
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
      var tags = req.body.have.split(',');
      for (var i = 0; i < tags.length; i++) {
        Tag.findOrCreate({where: {tagName: tags[i]}}).spread(function (tag) {
          tag.addKnown(user).then(function() {
            user.addKnown(tag);
          })
        })
      }
      var tags2 = req.body.want.split(',');
      for (var j = 0; j < tags2.length; j++) {
        Tag.findOrCreate({where: {tagName: tags2[j]}}).spread(function (tag2) {
          tag2.addWant(user).then(function() {
            user.addWant(tag2);
          })
        })
      }
      res.end();
    });
  })
};

// if (req.body.have && req.body.want) {
      //   tags = req.body.have + ',' + req.body.want;
      // }
      // else if (req.body.have) {
      //   tags = req.body.have;
      // }
      // else if (req.body.want) {
      //   tags = req.body.want;
      // }
      // var tags = tags.split(',');
      // for (var i = 0; i < tags.length; i++) {
      //   Tag.findOrCreate({where: {tagName: tags[i]}}).spread(function (tag) {
      //     tag.addKnown(user).then(function() {
      //       user.addKnown(tag);
      //       }).done(function () {
      //         tag.addWant(user).then(function() {
      //         user.addWant(tag).then(function() {
      //           res.end();
      //         })
      //       });
      //     })
      //   });

controllerDirector.getProfile = function (req, res) {
  User.findOne({where: {githubID: req.cookies.githubID},
    include: [{model: Tag, as: 'known'}, {model: Tag, as: 'want'}, {model: Project, as: 'ownedproject', include: [{model: User, as: 'projectowner'}]}]}).done(function (user) {
    res.send(user);
  })
};

controllerDirector.createProject = function(req, res) {
  Project.create({
    projectName: req.body.name, 
    githubLink: req.body.github, 
    description: req.body.description, 
    tools: req.body.tools, 
    learned: req.body.learn}).done( function(project) {
      User.findOne({where: {githubID: req.cookies.githubID}}).done(function(user1) {
        User.findOne({where: {username: req.body.partner}}).done(function(user2) {
          user1.addOwnedproject(project).done(function () {
            project.addProjectowner(user1).then(function () {
              user2.addOwnedproject(project).then(function () {
                project.addProjectowner(user2);
              })
            })
          })
        })
      })
      var id = project.id + '';
      res.send(id);
    })
}

controllerDirector.getProjects = function (req, res) {
  if (req.params.pageNumber) {
    offset = (req.params.pageNumber - 1) * 10;
  }
  else {
    offset = 0;
  }
  Project.findAll({limit:10, include: [{model: User, as: 'projectowner'}], order: [['id', 'desc']], offset: offset}).done(function (projects) {
     res.send(projects);
  });
}

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
              if (a.value < b.value) {
                return 1;
              }
              if (a.value > b.value) {
                return -1;
              }
              return 0;
            })
            var userSend = [];
            for (var i = 0; i < likeness.length; i++) {
              userSend.push(likeness[i].person);
            }
            res.send(userSend);
          })
      })
  })
};

module.exports = controllerDirector;
