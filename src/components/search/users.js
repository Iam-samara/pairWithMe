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
	render: function() {
		return (
			<div className="col-xs-12 col-sm-3 col-lg-4">
				<div>
					<img src={this.props.picture} className="img-rounded profile-pic"/>
				</div>
				<div>
					<p>{this.props.name}</p>
				</div>
				<div>
					<a href={this.props.email}>Email</a>
				</div>
				<div>
					<a href={this.props.github}>GitHub</a>
				</div>
			</div>
		);
	},
});
module.exports = Users;