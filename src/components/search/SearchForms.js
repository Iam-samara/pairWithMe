var React = require('react');
var Select = require('react-select');


var partner = [
	{ value: 'Collaborater', label: 'Collaborater' },
	{ value: 'Student', label: 'Student' },
	{ value: 'Teacher', label: 'Teacher'}
];

var SearchForms = React.createClass({

	getInitialState: function () {
    return {
      tags: []
    }
  },
  onChange: function(e) {
    this.setState({
      itemColor: e.target.itemColor,
      itemPattern: e.target.itemPattern,
      itemWarmth: e.target.itemWarmth,
      itemFormality: e.target.itemFormality
    });
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
    var that = this;
    console.log(e);
    e.preventDefault();
    var that = this;
    console.log('update time');
    var temp1 = e.target[0].value;
    var sendObject = {};
    sendObject.partner = e.target[0].value;
    sendObject.tag = e.target[1].value;
 
    console.log(sendObject);
    $.ajax({
      url: '/search',
      contentType: 'application/json',
      type: 'POST',
      data: JSON.stringify(sendObject),
      success: function(data) {
        this.props.update(data);
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
								<div className="col-xs-12 col-sm-6">
									<Select
										name="form-field-name"
										value=""
										options={partner}
									/>
								</div>
								<div className="col-xs-12 col-sm-6">
									<Select
										name="form-field-name"
										
										options={this.state.tags}
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