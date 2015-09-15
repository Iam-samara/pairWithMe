var React = require('react');
var Select = require('react-select');
var SearchResults = require('./SearchResults.js');

var partner = [
	{ value: 'Collaborater', label: 'Collaborater' },
	{ value: 'Student', label: 'Student' },
	{ value: 'Teacher', label: 'Teacher'}
];

var SearchForms = React.createClass({

	getInitialState: function () {
    return {
      tags: [],
      partner: '',
      learn: '',
      data: []
    }
  },

  onChangePartner: function(value) {
    this.setState({
      partner: value
    })
  },
  onChangeTag: function(value) {
    this.setState({
      learn: value
    })
  },
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
    sendObject.partner = this.state.partner;
    sendObject.tag = this.state.learn;
    $.ajax({
      url: '/search',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(sendObject),

      success: function(results) {
        this.setState({data:results})
        console.log(results);
      }.bind(this),
      
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function() {
    <SearchResults data={this.data}/>
    return(
				<div className="row">
					<div className="col-xs-8 col-xs-offset-2">
						<form id="searchForm" encType="multipart/form-data" onSubmit={this.handle} className="form-inline">
							<div className="row">
              <label>Select the Type of Partner you are Looking for</label>
								<div className="col-xs-12 col-sm-12">
									<Select
										name="form-field-name"
										value={this.state.partner}
										options={partner}
                    onChange = {this.onChangePartner}
									/>
								</div>
              </div>
              <div className="row">
                <label>Select the Skills You Want to Use In This Project</label>
								<div className="col-xs-12 col-sm-12">
									<Select
										name="form-field-name"
                    value={this.state.learn}
                    options={this.state.tags}
                    onChange = {this.onChangeTag}
										multi={false}
									/>
								</div>
							</div>
							<div className="row">
						<div className="col-xs-12">
								<input type="submit" value="SUBMIT"  name="submit" className="btn btn-primary btn-lg btn-block" />
            </div>
					</div>
						</form>
					</div>
				</div>
  )}
});
module.exports = SearchForms;