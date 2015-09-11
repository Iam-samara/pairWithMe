var React = require('react');

var UsersProfile = React.createClass({

	render: function() {
		return (
			<div>
				<UserInfo/>
				<UserData/>
				<div className="row">
					<FinishedProjects/>
					<FinishedProjects/>
					<FinishedProjects/>			
				</div>
				<div className="row">
					<FinishedProjects/>
					<FinishedProjects/>
					<FinishedProjects/>			
				</div>				
			</div>
		);
	}

});

module.exports = UsersProfile;