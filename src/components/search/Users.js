var React = require('react');
var Users = React.createClass({
	getInitialState: function() {
		return {
			picture: '',
			name: '',
			github: '',
			email: ''
		};
	},
	handle: function() {
				 window.location.pathname = '/profile/'+ this.props.name

	},
	render: function() {
		return (
			<div className="col-xs-12 col-sm-3 col-lg-4">
				<div className="text-center">
					<img src={this.props.picture} className="img-rounded profile-pic"/>
				</div>
				<div className="text-center">
					<p>{this.props.name}</p>
				</div>
				<div className="text-center">
					<a href={this.props.email}>Email</a>
				</div>
				<div className="text-center">
					<a href={this.props.github}>GitHub</a>
				</div>
				<button className="project-page-btn" onClick={this.handle}>Profile Page</button>
			</div>
		);
	},
});
module.exports = Users;
