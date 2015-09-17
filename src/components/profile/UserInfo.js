var React = require('react');

var UserInfo = React.createClass({
	getInitialState: function() {
		return {
			name : '',
			github : '',
			picture: ''
		};
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12 text-center">
					<p>
						<img src={this.props.picture} className="img-rounded"/>
					</p>
					<p>
						{this.props.name}
					</p>
					<p>
						<a href={this.props.github}>GitHub Profile</a>
					</p>
				</div>
			</div>
		);
	}

});

module.exports = UserInfo;
