var Sequelize = require('sequelize');

var Project = {};

Project.model = sequelize.define('projects', {
  projectName: Sequelize.STRING,
  githubLink: Sequelize.STRING,
  description: Sequelize.STRING,
});

Project.createProject = function (req, res) {
  Project.model.create({projectName: req.body.projectName, githubLink: req.body.githubLink, description: req.body.description});
  //res.sendStatus(200);
  //res.redirect('/');
};

Project.getProjects = function (req, res) {
  Project.model.findAll({limit:10,order: "id desc"}).done(function (projects) {
    console.log(projects);
     res.send(projects);
  });
}

Project.updateProject = function (req, res) {
  Project.model.findOne({where: {id: req.body.projectid} }).on('success', function (project) {
    project.updateAttributes({
      description: req.body.description
    }).success(function () {
      console.log("updated project " + project.id);
    });
  });
};

Project.recentProjects = function (req, res) {
  Project.model.findOne({where: {id: req.params.number}}).done(function (project) {
    console.log(project);
    res.send(project);
  })
};

module.exports = Project;
