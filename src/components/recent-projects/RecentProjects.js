var React = require('react');
var Projects = require('./Projects');
var RecentProjects = React.createClass({
	render: function(){
		return (
			<div>
				<Projects/>
				<Projects/>
				<Projects/>				
				<Projects/>
				<Projects/>
				<Projects/>		
			</div>
		);
	},
});
module.exports = RecentProjects;