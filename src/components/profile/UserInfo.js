var React = require('react');


var UserInfo = React.createClass({
componentDidMount: function() {
	
},
	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12 text-center">
						<img src="https://avatars1.githubusercontent.com/u/11942769?v=3&s=460?" className="img-rounded"/>
						<p>UserName  |  GitHub</p>
				</div>
			</div>
		);
	}

});

module.exports = UserInfo;