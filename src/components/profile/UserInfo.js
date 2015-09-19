var React = require('react');

var UserInfo = React.createClass({

	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12 text-center">
					<p>
						<img src={this.props.picture} className="img-rounded profile-pic"/>
					</p>
					<p>
						{this.props.name}
					</p>
					<p>
						<a href={this.props.github} className="btn btn-info btn-xs">GitHub Profile</a>
					</p>
				</div>
			</div>
		);
	}

});

module.exports = UserInfo;
