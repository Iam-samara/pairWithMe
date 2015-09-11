var React = require('react');
var OtherUsersInfo = require('./OtherUsersInfo.js');
var OtherUsersData = require('./OtherUsersData.js');

var UsersProfile = React.createClass({

	render: function() {
		return (
			<div>
				<OtherUsersInfo/>
				<OtherUsersData/>
			</div>
		);
	}

});

module.exports = UsersProfile;
