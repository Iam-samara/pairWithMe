var React = require('react');
var UserProjects = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			tools: '',
			route: ''
		};
	},
	handle: function(){
		 window.location.pathname = '/project/'+ this.props.route
	},
	render: function() {
		return (
			<div className="col-xs-12 col-sm-4 bordered">
				<div className="row">
					<p className="text-center">{this.props.title}</p>
				</div>
				<div className="row">
					<p className="text-center">{this.props.tools}</p>
				</div>
				<div className="row center">
					<button className="center" onClick={this.handle}>Project Path</button>
				</div>
			</div>
		);
	}
});
module.exports = UserProjects;