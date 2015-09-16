var React = require('react');

var OtherUsersInfo = React.createClass({
	getInitialState: function() {
		console.log(this.props.param);
		return {
			username : '',
			githubLink : '',
			picture: ''
		};
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12 text-center">
						<p>
							<img src={this.state.picture} className="img-rounded profile-pic"/>
						</p>
						<p>
							{this.state.username}
						</p>
						<p>
							<a href={this.state.githubLink}>GitHub Profile</a>
						</p>
				</div>
			</div>
		);
	}

});

module.exports = OtherUsersInfo;
