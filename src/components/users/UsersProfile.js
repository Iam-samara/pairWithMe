var React = require('react');
var OtherUsersInfo = require('./OtherUsersInfo.js');
var OtherUsersData = require('./OtherUsersData.js');

var UsersProfile = React.createClass({
	contextTypes: {
		router: React.PropTypes.func.isRequired
	},
	getInitialState: function() {
		return {
			username : '',
			githubLink : '',
			picture: '',
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
				username: data.username,
				githubLink: data.githubProfileURL,
				picture: data.githubProfileImage,
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
		var params = this.context.router.getCurrentParams();
		console.log(params);
		return (
			<div> 
				<OtherUsersInfo param={params} name={this.state.username} github={this.state.githubLink} picture={this.state.picture}/>
				<OtherUsersData param={params} knownTags={this.state.knownTags} wantTags={this.state.wantTags} teacher={this.state.teacher} collab={this.state.collab} student={this.state.student} projects={this.state.projects}/>
			</div>
		);
	}

});

module.exports = UsersProfile;
