var React = require('react');
var OtherUsersInfo = require('./OtherUsersInfo.js');
// var OtherUsersData = require('./OtherUsersData.js');

var UsersProfile = React.createClass({
	contextTypes: {
		router: React.PropTypes.func.isRequired
	},

	render: function() {
		var params = this.context.router.getCurrentParams();
		console.log(params);
		return (
			<div> 
				<OtherUsersInfo param={params} />
			</div>
		);
	}

});

module.exports = UsersProfile;
