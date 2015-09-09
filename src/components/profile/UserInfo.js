var React = require('react');

var UserInfo = React.createClass({

	render: function() {
		return (
			<div className="col-sm-offset-4 col-xs-offset-2">
				<div>
					<img src="https://avatars3.githubusercontent.com/u/13990032?v=3&s=200"/>
				</div>
				<div>
					<h2>UserName</h2>
				</div>
				<div>
					<p className="col-xs-8 col-sm-2">Email</p>
					<p className="col-xs-8 col-sm-2 col-sm-offset-4">GitHub</p>
				</div>
			</div>
		);
	}

});

module.exports = UserInfo;