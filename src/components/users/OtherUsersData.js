var React = require('react');

var OtherUsersData = React.createClass({

	render: function() {
		return (
			<div className="bordered">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1 bordered">Skills Have: 
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1 bordered">Skills Wanted:
					</div>
				</div>
			</div>
		);
	}

});

module.exports = OtherUsersData;