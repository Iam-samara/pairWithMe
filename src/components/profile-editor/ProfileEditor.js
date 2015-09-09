var React = require('react');
var UserInfo = require("../profile/UserInfo.js");
var ProfileForm = require("./ProfileForm");
var ProfileEditor = React.createClass({

	render: function() {
		return (
			<div>
				<UserInfo/>
				<ProfileForm/>
			</div>
		);
	}

});

module.exports = ProfileEditor;