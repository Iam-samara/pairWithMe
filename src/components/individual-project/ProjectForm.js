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
   valueHolder: {
			name: '',
			github: '',
			description: '',
			tools: '',
			learn: '',
			partner: ''
  },
  onChangeName: function() {
    this.valueHolder.name = this.state.name;
  },
  onChangeGithub: function(value) {
  	this.valueHolder.github = value;
		console.log(value);
  },
  onChangeDescription: function() {
    this.valueHolder.description = description;
  },
  onChangeTools: function() {
    this.valueHolder.tools = tools;
  },
  onChangeLearn: function(value) {
    this.valueHolder.learn = value;
  },
  onChangepartner: function(value) {
    this.valueHolder.partner = value;
  },
  handle: function (e) {
    e.preventDefault();
    var that = this;
    var sendObject = {};
	    sendObject.name = this.state.name;
	    sendObject.github = this.valueHolder.github;
	    sendObject.description = this.valueHolder.description;
	    sendObject.tools = this.valueHolder.tools;
	    sendObject.learn = this.valueHolder.learn;
	    sendObject.partner = this.valueHolder.partner;
	    console.log(sendObject);
    $.ajax({
      url: '/createProject',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(sendObject),
      success: function(data) {
        console.log(data);
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
					    <input type="text" className="form-control"  placeholder="Title"/>
					  </div>
					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>GitHubLink</label>
					    <input type="text" className="form-control" placeholder="GitHubLink" onChange={this.onChangeGithub}/>
					  </div>
					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>Description</label>
					    <textarea className="form-control" rows="3" placeholder="Description" onChangeDescription={this.state.description}></textarea>
					  </div>
					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>Tools Used</label>
					    <input type="text" className="form-control"  placeholder="Tools Used" onChangeTools={this.state.tools}/>
					  </div>
					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>What we learned</label>
					    <textarea className="form-control" row="3" placeholder="What we Learned" onChangeLearned={this.state.learn}></textarea>
					  </div>
					</div>
					<div className="row">
					  <div className="form-group col-xs-12 col-sm-8">
					    <label>Partners User Name</label>
					    <input type="text" className="form-control"  placeholder="Partners User Name" onChangePartner={this.state.partner}/>
					  </div>
					</div>
		       <div className="col-xs-12 col-sm-6">
            <input type="submit" value="SUBMIT" name="submit" className="btn btn-primary btn-lg btn-block" />
           </div>
				</form>
			</div>
		);
	}

});

module.exports = ProjectForm;
