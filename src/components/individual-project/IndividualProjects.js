var React = require('react');
var IndividualProjects = React.createClass({
	contextTypes: {
	router: React.PropTypes.func.isRequired
	},


	getInitialState: function() {
		return {
			name: '',
			github: '',
			description: '',
			tools: '',
			learn: '',
			partner: ''
		};
	},
	componentDidMount: function() {
		var params = this.context.router.getCurrentParams();
		console.log(params);
		$.getJSON('/recentProjects/' + params.id  , function(data){

			console.log(data);
			this.setState({
				name: data.projectName,
				github: data.githubLink,
				description: data.description,
				tools: data.tools,
				learn: data.learn,
				partner: data.partner
			});
		}.bind(this));
	},
	render: function(){
		return (
			<div>
				<p> {this.state.name} </p>
				<p> {this.state.github} </p>
				<p> {this.state.description} </p>
				<p> {this.state.tools} </p>
				<p> {this.state.learn} </p>
				<p> {this.state.partner} </p>

			</div>
		);
	},
});
module.exports = IndividualProjects;