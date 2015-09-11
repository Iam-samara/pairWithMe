var Sequelize = require('sequelize');
var Tag = require('./tagModel.js');

var TagController = {};

TagController.getAllTags = function (req, res) {
  Tag.findAll({attributes:['tagName']}).done(function (tags) {
    res.send(tags);
  })
};

TagController.addTags = function (req, res) {
  console.log(req.body.want);
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
    Tag.findOrCreate({where: {tagName: tags[i]}});
  }
}

module.exports = TagController;