var React = require('react');
var Router= require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var UserInfo = require('./UserInfo.js');
var UserData = require('./UserData.js');
var FinishedProjects = require('../recent-projects/FinishedProjects.js');

var Profile = React.createClass({
	render: function(){
		return (
			<div>
				<UserInfo/>
				<div className="row">
					<div className="col-xs-12 text-center">
						<Link to="profileeditor" className="edit-profile-btn"> Profile Editor </Link>
					</div>
				</div>

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