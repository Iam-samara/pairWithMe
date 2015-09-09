var React = require('react');
var UserInfo = require('./UserInfo.js');
var UserData = require('./UserData.js');
var FinishedProjects = require('../recent-projects/FinishedProjects.js');

var Profile = React.createClass({
	render: function(){
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
	},
});
module.exports = Profile;