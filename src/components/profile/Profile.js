var React = require('react');
var Router= require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var UserInfo = require('./UserInfo.js');
var UserData = require('./UserData.js');
var Projects = require('../recent-projects/Projects.js');
var profileEditor = require('../profile-editor/ProfileEditor.js');

var Profile = React.createClass({
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
			console.log(this.state.username);
			console.log(this.state.githubLink);
		}.bind(this));
	},
	render: function(){

		var userProj = this.state.projects.map(function(element, index){
			return(<Projects className="col-xs-12 col-sm-6 col-md-4" title={element.projectName.slice(0,17)} tools={element.tools.slice(0,17)} description={element.description.slice(0,17)} route={element.id} key={index}/>)
		})

		return (
			<div>
				<UserInfo name={this.state.username} github={this.state.githubLink} picture={this.state.picture}/>
				<div className="row">
					<div className="col-xs-12 text-center">
						<p>
						<Link to="profileeditor" className="edit-profile-btn"> Profile Editor </Link>
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1 text-center">
						<p>
						<Link to="projectform" className="edit-profile-btn"> Project Form </Link>
						</p>
					</div>
				</div>
				<UserData knownTags={this.state.knownTags} wantTags={this.state.wantTags} teacher={this.state.teacher} collab={this.state.collab} student={this.state.student} projects={this.state.projects}/>
				{userProj}
			</div>
		);
	},
});
module.exports = Profile;
