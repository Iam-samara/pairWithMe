var React = require('react');
var HomeHero = require('./HomeHero.js');
var HomeHeroProjects = require('../recent-projects/HomeHeroProjects.js');
var Home = React.createClass({
	render: function(){
		return (
		<div>
			<div className="row">
				<HomeHero/>
			</div>
			<div className="row">
				<HomeHeroProjects/>
			</div>
		</div>
		);
	},
});
module.exports = Home;