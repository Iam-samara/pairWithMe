var React = require('react');

var OtherUsersData = React.createClass({
	getInitialState: function() {
		return {
			knownTags: [],
			wantTags: [],
			teacher: '',
			collab: '',
			student: ''
		};
	},
	componentDidMount: function() {
		$.getJSON('/api/profile/' + this.props.param.user, function(data){
			if(data.teacher) {
				var teach = "Teacher";
			}
			if(data.collaborator) {
				var collaborator = "Collaborator";
			}
			if(data.student) {
				var learn = "Student"
			}

			var known = data.known.map(function (element, index) {
				return (element.tagName +", ");
			});
			var wanted = data.want.map( function (element,index) {
				return (element.tagName +", ");
			});
			this.setState({
				knownTags: known,
				wantTags: wanted,
				teacher: teach,
				collab: collaborator,
				student: learn
			});
		}.bind(this));
	},
	render: function() {
		return (
			<div className="bordered">
				<div className="row">
					<div className="col-xs-12 col-sm-4 text-center">
						<strong>{this.state.teacher}</strong>
					</div>
					<div className="col-xs-12 col-sm-4 text-center">
						<strong>{this.state.collab}</strong>
					</div>
					<div className="col-xs-12 col-sm-4 text-center">
						<strong>{this.state.student}</strong>
					</div>
				</div>	
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1 bordered"><strong>Skills Have: </strong>
					{this.state.knownTags}
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1 bordered"><strong>Skills Wanted: </strong>
					{this.state.wantTags}
					</div>
				</div>
			</div>
		);
	}
})
module.exports = OtherUsersData;
