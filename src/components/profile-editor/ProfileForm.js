var React = require('react');
var Select = require('react-select');

var partner = [
  { value: 'Collaborator', label: 'Collaborator' },
  { value: 'Student', label: 'Student' },
  { value: 'Teacher', label: 'Teacher'}
];

var ProfileForm = React.createClass({


	getInitialState: function () {
      return {
      tags: [], 
      teacher: '',
      collaborator: '',
      student: '',
      have: '',
      want: ''
    }
  },
   valueHolder: {
      teacher: '',
      collaborator: '',
      student: '',
      have: '',
      want: ''
  },
  onChangeTeacher: function() {
    this.valueHolder.teacher = 'true';
  },
  onChangeCollaborator: function() {
    this.valueHolder.collaborator = 'true';
  },
  onChangeStudent: function() {
    this.valueHolder.student = 'true';
  },
  onChangeHave: function(value) {
    this.valueHolder.have = value;
  },
  onChangeWant: function(value) {
    this.valueHolder.want = value;
  },
  componentDidMount: function() {
    $.getJSON('/tags', function(result) {
      result = result.map(function (element, index) {
        return ({value: element.tagName, label: element.tagName})
      })
      console.log(result);
       this.setState({tags: result});
      console.log(this.state);
    }.bind(this))
  },
  handle: function (e) {
        e.preventDefault();
    var that = this;
    var sendObject = {};
    sendObject.teacher = this.valueHolder.teacher;
    sendObject.collaborator = this.valueHolder.collaborator;
    sendObject.student = this.valueHolder.student;
    sendObject.have = this.valueHolder.have;
    sendObject.want = this.valueHolder.want;
    console.log(sendObject.teacher);
    $.ajax({
      url: '/updateProfile',
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
    return(
				<div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <form id="searchForm" encType="multipart/form-data" onSubmit={this.handle} className="form-inline">
              <div className="row">

                <div className="col-xs-offset-1 col-sm-offset-2">
                  <div className="col-xs-8 col-sm-4">
                    <input type="checkbox" name="teacher" onChange={this.onChangeTeacher}/> Teacher
                  </div>
                  <div className="col-xs-8 col-sm-4">
                    <input type="checkbox" name="collaborator" onChange={this.onChangeCollaborator}/> Collaborator
                  </div>
                  <div className="col-xs-8 col-sm-4">
                    <input type="checkbox" name="student" value="true" onChange={this.onChangeStudent}/> Student
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12">
                  <Select name="form-field-name" options={this.state.tags} multi={true} allowCreate={true} onChange={ this.onChangeHave} />
                </div>
                <div className="col-xs-12 col-sm-12">
                  <Select name="form-field-name" options={this.state.tags} multi={true} allowCreate={true} onChange={ this.onChangeWant} />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <input type="submit" value="SUBMIT" name="submit" className="btn btn-primary btn-lg btn-block" />
                </div>
              </div>
            </form>
          </div>
        </div> 
  )}
});
module.exports = ProfileForm;
