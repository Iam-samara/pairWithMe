var React = require('react');
var UserProjects = require('./UserProjects.js')
var UserData = React.createClass({
	getInitialState: function() {
		return {
			knownTags: [],
			wantTags: [],
			teacher: '',
			collab: '',
			student: '',
			projects: []
		};
	},
	componentDidMount: function() {
		$.getJSON('/api/profile', function(data){
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
			var ownedproject = data.ownedproject;
		console.log(ownedproject);
			this.setState({
				knownTags: known,
				wantTags: wanted,
				teacher: teach,
				collab: collaborator,
				student: learn,
				projects: ownedproject
			});
		}.bind(this));
	},
	render: function() {
		var userProj = this.state.projects.map(function(element, index){
			return(<UserProjects title={element.projectName} tools={element.tools} route={element.id} key={index}/>)
		})
		return (
			<div>
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
						<div className="col-xs-10 col-xs-offset-1 bordered">
							<strong>Skills Have: </strong>{this.state.knownTags}
						</div>
					</div>
					<div className="row">
						<div className="col-xs-10 col-xs-offset-1 bordered">
							<strong>Skills Wanted: </strong>{this.state.wantTags}
						</div>
					</div>
				</div>
				{userProj}
			</div>
		);
	}
});
module.exports = UserData;
