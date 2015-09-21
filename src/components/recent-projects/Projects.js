var React = require('react');
var Projects = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			descrition: '',
			tools: '',
			github: '',
			route: ''
		};
	},
	handle: function(){
		 window.location.pathname = '/project/'+ this.props.route
	},
	render: function() {
		return(
			<div className={this.props.className}>
				<p>Title:{this.props.title}</p>
				<p>Description:{this.props.description}</p>
				<p>Tools Used: {this.props.tools}</p>
				<button className="project-page-btn" onClick={this.handle}>Project Path</button>
			</div>
			);

	},

});
module.exports=Projects;
