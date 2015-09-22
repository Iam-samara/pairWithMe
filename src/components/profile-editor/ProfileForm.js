var React = require('react');
var Select = require('react-select');
var Router= require('react-router');
var Route = Router.Route;
var Link = Router.Link;
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
    var haveTags = value.replace(/ /g, '-')
    this.valueHolder.have = haveTags;
  },
  onChangeWant: function(value) {
    var wantTags = value.replace(/ /g, '-')
    this.valueHolder.want = wantTags;  },
  componentDidMount: function() {
    $.getJSON('/tags', function(result) {
      result = result.map(function (element, index) {
        return ({value: element.tagName, label: element.tagName})
      })
       this.setState({tags: result});
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
    console.log(sendObject);
    $.ajax({
      url: '/updateProfile',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(sendObject),
      success: function(data) {

        window.location.pathname = '/profile';
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
            <div className="row text-center">
              <p>
              What kind of partner are you? (can select more than one)
              </p>
              <div className="col-xs-10 col-xs-offset-1">
                <p>
                  <div className="col-xs-12 col-sm-4">
                    <input type="checkbox" name="teacher" id="teacher" onChange={this.onChangeTeacher}/><label htmlFor="teacher">Teacher</label>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <input type="checkbox" name="collaborator" id="collaborater" onChange={this.onChangeCollaborator}/><label htmlFor="collaborater">Partner</label>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <input type="checkbox" name="student" value="true" id="student" onChange={this.onChangeStudent}/><label htmlFor="student">Student</label>
                  </div>
                </p>
              </div>
            </div>
            <div className='row'>
              <p className="text-center">
                <label>Select or create a tag for skills you have. (can select more than one)</label>
              </p>
              <div className="col-xs-12 col-sm-12">
                <Select name="form-field-name" required pattern="^[a-zA-Z][a-zA-Z0-9\.]{1,50}$" options={this.state.tags} multi={true} allowCreate={true} onChange={ this.onChangeHave} />
              </div>
            </div>
            <div className='row'>
              <p className="text-center">
                <label>Select or create a tag for skills you want to learn. (can select more than one)</label>
              </p>
              <div className="col-xs-12 col-sm-12">
                <Select name="form-field-name" required pattern="^[a-zA-Z][a-zA-Z0-9\.]{1,50}$" options={this.state.tags} multi={true} allowCreate={true} onChange={ this.onChangeWant} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-sm-offset-3">
              <p>
              <input type="submit" value="SUBMIT" name="submit" className="btn btn-primary btn-lg btn-block" />
              </p>
              </div>
            </div>
          </form>
        </div>
      </div>
  )}
});
module.exports = ProfileForm;
