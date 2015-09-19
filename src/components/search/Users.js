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
			<div className="col-xs-12 col-sm-3 bordered text-center">
				<img src={this.props.picture} className="img-rounded profile-pic"/>
				<p>{this.props.name}</p>
				<a href={this.props.email}>Email</a>
				<a href={this.props.github}>GitHub</a>
				<button className="project-page-btn" onClick={this.handle}>Profile Page</button>
			</div>
		);
	},
});
module.exports = Users;
