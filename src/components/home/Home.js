var React = require('react');
var HomeHero = require('./HomeHero.js');
var Projects = require('../recent-projects/Projects.js');
var Home = React.createClass({
	getInitialState: function() {
		return {
			projects: []
		};
	},
	componentDidMount: function() {
		$.getJSON('/api/projects', function(data){
			console.log("proj", data);
			this.setState({projects:data.splice(0,3)})
		}.bind(this));
	},
	render: function() {
		console.log("in render", this.state.projects);
		var projectList = this.state.projects.map(function(element, index){
			return (<Projects className="col-xs-12 col-sm-4 bordered" title={element.projectName} description={element.description} tools={element.tools} route={element.id} key={index}/>)
		});
		return (
		<div>
			<div className="row">
				<HomeHero/>
			</div>
			<div className="row">
				{projectList}
			</div>
		</div>
		);
	},
});
module.exports = Home;