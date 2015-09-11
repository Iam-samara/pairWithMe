var React = require('react');

var UserInfo = React.createClass({

	getInitialState: function() {
		return {
			username : '',
			githubLink : '',
			picture: ''
		};
	},
	componentDidMount: function() {
		$.getJSON('/api/profile', function(data){
			this.setState({
				username: data.username,
				githubLink: data.githubProfileURL,
				picture: data.githubProfileImage
			});
		}.bind(this));
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

module.exports = UserInfo;
