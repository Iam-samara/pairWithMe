var React = require('react');
var FinishedProjects = require('./FinishedProjects.js');
var RecentProjects = React.createClass({
	render: function(){
		return (
			<div>
				<FinishedProjects/>
			</div>
		);
	},
});
module.exports=RecentProjects;