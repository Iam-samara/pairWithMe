var React = require('react');

var ProjectForm = React.createClass({
	getInitialState: function() {
		return {
			name: '',
			github: '',
			description: '',
			tools: '',
			learn: '',
			partner: ''
		}
	},
	onChangeName: function() {
   this.setState({name: event.target.value});
	},
	onChangeGithub: function(value) {
	 this.setState({github: event.target.value});
	},
	onChangeDescription: function() {
	 this.setState({description: event.target.value});
	},
	onChangeTools: function() {
	 this.setState({tools: event.target.value});
	},
	onChangeLearn: function(value) {
	 this.setState({learn: event.target.value});
	},
	onChangePartner: function(value) {
	 this.setState({partner: event.target.value});
	},
  handle: function (e) {
    e.preventDefault();
    var that = this;
    var sendObject = {};
	    sendObject.name = this.state.name;
	    sendObject.github = this.state.github;
	    sendObject.description = this.state.description;
	    sendObject.tools = this.state.tools;
	    sendObject.learn = this.state.learn;
	    sendObject.partner = this.state.partner;
	    // console.log(sendObject);
    $.ajax({
      url: '/createProject',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(sendObject),
      success: function(data) {
        window.location.pathname = '/project/'+data;
        console.log(data.id);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
	render: function() {
		return (
 			<div>
 				<form id="projectForm" encType="multipart/form-data" onSubmit={this.handle}>
 					<div className="row">
 					  <div className="form-group col-xs-12 col-sm-8">
 					    <label>Title</label>
 					    <input type="text" className="form-control" value={this.state.name}  placeholder="Title" onChange={this.onChangeName}/>
 					  </div>
 					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>GitHubLink</label>
					    <input type="text" className="form-control" value={this.state.github} placeholder="GitHubLink" onChange={this.onChangeGithub}/>
					  </div>
					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>Description</label>
					    <textarea className="form-control" rows="3" value={this.state.description} placeholder="Description" onChange={this.onChangeDescription}></textarea>
					  </div>
					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>Tools Used</label>
					    <input type="text" className="form-control" value={this.state.tools} placeholder="Tools Used" onChange={this.onChangeTools}/>
					  </div>
					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>What we learned</label>
					    <textarea className="form-control" row="3" value={this.state.learn} placeholder="What we Learned" onChange={this.onChangeLearn}></textarea>
					  </div>
					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>Partners User Name</label>
					    <input type="text" className="form-control" value={this.state.partner} placeholder="Partners User Name" onChange={this.onChangePartner}/>
					  </div>
					</div>
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
					  <input type="submit" value="SUBMIT" name="submit" className="btn btn-primary btn-lg btn-block" />
					</div>
				</form>
			</div>
		);
	}

});

module.exports = ProjectForm;
