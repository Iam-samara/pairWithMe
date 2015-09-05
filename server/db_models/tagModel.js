var Sequelize = require('sequelize');

var Tag = {};

Tag.model = sequelize.define('tags', {
  tagName: Sequelize.STRING
});

Tag.getAllTags = function (req, res) {
  Tag.model.findAll({attributes:['tagName']}).done(function (tags) {
    res.send(tags);
  })
};

Tag.addTags = function (req, res) {
  for (var i = 0; i < req.tags.length; i++) {
    Tag.model.findOrCreate({tagName: req.tags[i].tagName});
  }
}

module.exports = Tag;