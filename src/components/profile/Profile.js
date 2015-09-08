var React = require('react');
var FinishedProjects = require('../recent-projects/FinishedProjects.js');

var Profile = React.createClass({
	render: function(){
		return (
			<div>
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