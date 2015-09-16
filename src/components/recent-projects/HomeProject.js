var React = require('react');
var HomeProject = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			descrition: '',
			github: '',
			route: ''
		};
	},
	handle: function(){
		 window.location.pathname = '/project/'+ this.props.route
	},
	render: function() {
		console.log("props ~>", this.props.title);
		return(
			<div className="col-xs-12 col-sm-4 bordered">
				<p>Title:{this.props.title}</p>
				<p>Description:{this.props.description}</p>
				<p>Tools Used: {this.props.github}</p>
				<button className="project-page-btn" onClick={this.handle}>Project Path</button>
			</div>
			);

	},

});
module.exports=HomeProject;