var Sequelize = require('sequelize');
var Project = require('./projectModel.js');

var ProjectController = {};

ProjectController.createProject = function (req, res) {
  Project.create({projectName: req.body.name, githubLink: req.body.github, description: req.body.description}).done(
    function (project) {
      var id = project.id + '';
      res.send(id);
    })
};

ProjectController.getProjects = function (req, res) {
  if (req.params.pageNumber) {
    offset = (req.params.pageNumber - 1) * 10;
  }
  else {
    offset = 0;
  }
  Project.findAll({limit:10,order: "id desc", offset: offset}).done(function (projects) {
     res.send(projects);
  });
}

ProjectController.updateProject = function (req, res) {
  Project.findOne({where: {id: req.body.projectid} }).on('success', function (project) {
    project.updateAttributes({
      description: req.body.description
    }).success(function () {
      console.log("updated project " + project.id);
    });
  });
};

ProjectController.recentProjects = function (req, res) {
  Project.findOne({where: {id: req.params.number}}).done(function (project) {
    console.log(project);
    res.send(project);
  })
};

module.exports = ProjectController;
