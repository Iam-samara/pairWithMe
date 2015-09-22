var React = require('react');
var Router= require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var IndividualProjects = React.createClass({
	contextTypes: {
	router: React.PropTypes.func.isRequired
	},


	getInitialState: function() {
		return {
			name: '',
			github: '',
			description: '',
			tools: '',
			learn: '',
			partner1: '',
			partner2: '',
		};
	},
	componentDidMount: function() {
		var params = this.context.router.getCurrentParams();
		$.getJSON('/recentProjects/' + params.id  , function(data){
			this.setState({
				name: data.projectName,
				github: data.githubLink,
				description: data.description,
				tools: data.tools,
				learn: data.learned,
				partner1: data.projectowner[0].username,
				partner2: data.projectowner[1].username
			});
		}.bind(this));
	},
	// handle1: function(){
	// 	window.location.pathname = '/profile/'+ this.state.partner1
	// },
	// handle2: function(){
	// 	window.location.pathname = '/profile/'+ this.state.partner2
	// },
	render: function(){
		var space = "   |   ";
		var profile1 = "/profile/"+this.state.partner1
		var profile2 = "/profile/"+this.state.partner2
		return (
			<div>
				<div className="row">
	 				<div className="form-group col-xs-12 col-sm-8">
	 					<label>Title</label>
						  <p className="bordered"> {this.state.name} </p>
	 				</div>
	 			</div>
				<div className="row">
					<div className="form-group col-xs-12 col-sm-8">
					  <label>GitHubLink</label>
					    <p className="bordered"> {this.state.github} </p>
					</div>
				</div>
				<div className="row">
					<div className="form-group col-xs-12 col-sm-8">
					  <label>Description</label>
					    <p className="bordered" row='3'>{this.state.description}</p>
					</div>
				</div>
				<div className="row">
					<div className="form-group col-xs-12 col-sm-8">
				    <label>Tools Used</label>
		  	    <p className="bordered">{this.state.tools}</p>
					</div>
				</div>
				<div className="row">
					 <div className="form-group col-xs-12 col-sm-8">
					   <label>What we learned</label>
					   <p className="bordered">{this.state.learn}</p>
					 </div>
				</div>
				<div className="row">
					 <div className="form-group col-xs-12 col-sm-8">
					   <label>Authors</label><br/>
					   <p className="bordered">
							<Link to={profile1}><strong>{this.state.partner1}{space}</strong></Link>
							<Link to={profile2}><strong>{this.state.partner2}</strong></Link>
							</p>
					 </div>
				</div>
      </div>
		);
	},
});
module.exports = IndividualProjects;
