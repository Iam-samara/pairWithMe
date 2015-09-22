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
				return (<div className="tags">{element.tagName}</div>);
			});
			var wanted = data.want.map( function (element,index) {
				return (<div className="tags">{element.tagName}</div>);
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
		var plus = "mailto:"+this.state.email;
		var otherProjs = this.state.projects.map(function(element, index){
		  return(<Projects className="col-xs-12 col-sm-6 col-md-4" title={element.projectName.slice(0,17)} tools={element.tools.slice(0,17)} description={element.description.slice(0,17)} route={element.id} key={index}/>);
		});
		return (
		  <div>
		    <UserInfo name={this.state.username} github={this.state.githubLink} picture={this.state.picture}/>
		      <div className="text-center">
		      <a href={plus}>Email</a><br/>
		       </div>
				<UserData knownTags={this.state.knownTags} wantTags={this.state.wantTags} teacher={this.state.teacher} collab={this.state.collab} student={this.state.student} projects={this.state.projects}/>
				{userProj}
			</div>
		);
	}
});
module.exports = Profile;
