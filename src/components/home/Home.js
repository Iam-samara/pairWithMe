var React = require('react');
var HomeHero = require('./HomeHero.js');
var FinishedProjects = require('../recent-projects/FinishedProjects.js');
var Home = React.createClass({
	render: function(){
		return (
		<div>
			<div className="row">
				<HomeHero/>
			</div>
			<div className="row">
				<FinishedProjects/>
				<FinishedProjects/>
				<FinishedProjects/>			
			</div>
		</div>
		);
	},
});
module.exports = Home;