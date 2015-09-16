var React = require('react');
var OtherProjects = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			tools: '',
			route: ''
		};
	},
	handle: function(){
		 window.location.pathname = '/project/'+ this.props.route;
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
				<div className="row">
					<p className='text-center'>
						<button className="project-page-btn" onClick={this.handle}>Project Path</button>
					</p>
				</div>
			</div>
		);
	}
});
module.exports = OtherProjects;