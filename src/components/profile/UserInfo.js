var React = require('react');


var UserInfo = React.createClass({

	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12 text-center">
						<img src="https://avatars3.githubusercontent.com/u/13990032?v=3&s=200" className="img-rounded"/>
						<p>UserName  |  GitHub</p>
				</div>
			</div>
		);
	}

});

module.exports = UserInfo;
