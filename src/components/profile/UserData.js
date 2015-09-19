var React = require('react');
var UserData = React.createClass({
	getInitialState: function() {
		return {
			knownTags: [],
			wantTags: [],
			teacher: '',
			collab: '',
			student: ''
		};
	},
	render: function() {

		return (
				<div className="row bordered">
						<div className="col-xs-12 col-sm-4 text-center">
							<strong>{this.props.teacher}</strong>
						</div>
						<div className="col-xs-12 col-sm-4 text-center">
							<strong>{this.props.collab}</strong>
						</div>
						<div className="col-xs-12 col-sm-4 text-center">
							<strong>{this.props.student}</strong>
						</div>
						<div className="col-xs-12 col-md-10 col-md-offset-1 bordered">
							<strong>Skills Have: </strong>{this.props.knownTags}
						</div>
						<div className="col-xs-12 col-md-10 col-md-offset-1 bordered">
							<strong>Skills Wanted: </strong>{this.props.wantTags}
						</div>
				</div>

		);
	}
});
module.exports = UserData;
