var React = require('react');
var Router= require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var UserInfo = require("../profile/UserInfo.js");
var ProfileForm = require("./ProfileForm");
var ProfileEditor = React.createClass({

	render: function() {
		return (
			<div>
				<div>
					<a href={this.props.picture}></a>
				</div>
				<div className="row">
					<div className="col-xs-12 text-center">
						<Link to="profile" className="edit-profile-btn"> Profile </Link>
					</div>
				</div>
				<ProfileForm/>
			</div>
		);
	}

});

module.exports = ProfileEditor;