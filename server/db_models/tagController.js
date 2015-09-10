var Sequelize = require('sequelize');
var Tag = require('./tagModel.js');

var TagController = {};

TagController.getAllTags = function (req, res) {
  Tag.findAll({attributes:['tagName']}).done(function (tags) {
    res.send(tags);
  })
};

TagController.addTags = function (req, res) {
  for (var i = 0; i < req.tags.length; i++) {
    Tag.findOrCreate({tagName: req.tags[i].tagName});
  }
}

module.exports = TagController;