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
		console.log("mailto:"+this.props.email);
		return (
			<div className="col-xs-12 col-sm-3 col-lg-4 text-center">
				<p>
					<img src={this.props.picture} className="img-rounded profile-pic"/>
				</p>
				<p>
					{this.props.name}
				</p>
				<p>
					<a href={"mailto:"+this.props.email}>Email</a>
				</p>
				<p>
					<a href={this.props.github}>GitHub</a>
				</p>
			</div>
		);
	},
});
module.exports = Users;
