var Sequelize = require('sequelize');
var Project = require('./projectModel.js');

var ProjectController = {};

ProjectController.createProject = function (req, res) {
  Project.create({projectName: req.body.name, githubLink: req.body.github, description: req.body.description, tools: req.body.tools, learned: req.body.learned}).done(
    function (project) {
      var id = project.id + '';
      res.send(id);
    })
};

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
