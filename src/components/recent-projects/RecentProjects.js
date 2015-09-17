var React = require('react');
var Projects = require('./Projects.js');
var RecentProjects = React.createClass({
	getInitialState: function() {
		return {
		projects: []
		};
	},
	componentDidMount: function() {
		$.getJSON('/api/projects', function(data){
			console.log("proj", data);
			this.setState({projects:data})
		}.bind(this));
	},
	render: function() {
		console.log("in render", this.state.projects);
		var projectList = this.state.projects.map(function(element, index){
			return (<Projects title={element.projectName} description={element.description} github={element.githubLink} route={element.id} key={index}/>)
		});

		return(
			<div>
				{projectList}	
			</div>
			);
	},
});
module.exports = RecentProjects;