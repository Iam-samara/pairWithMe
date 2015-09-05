var React = require('react');
var Select = require('react-select');


var haveSkills = [
	{ value: 'HTML', label: 'HTML' },
	{ value: 'CSS', label: 'CSS' },
	{ value: 'JavaScript', label: 'JavaScript' },
	{ value: 'Angular', label: 'Angular' },
	{ value: 'React', label: 'React' },
];

var wantSkills = [
	{ value: 'one', label: 'One' },
	{ value: 'two', label: 'Two' },
];

var ProfileForm = React.createClass({


	getInitialState: function () {
    return {
      ids: [],
      images: [],
      itemColor: "",
      itemWarmth: "",
      itemPattern: "",
      itemFormality: ""
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
  handle: function (e) {
    var that = this;
    console.log(e);
    e.preventDefault();
    var that = this;
    console.log('update time');
    var temp1 = e.target[0].value;
    var sendObject = {};
    sendObject.category = e.target[0].value;
    sendObject.itemColor = e.target[1].value;
    sendObject.itemWarmth = e.target[2].value;
    sendObject.itemPattern = e.target[3].value;
    sendObject.itemFormality = e.target[4].value;
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
										value="HTML, CSS"
										options={haveSkills}
										multi={true}
										allowCreate={true}
									/>
								</div>
								<div className="col-xs-12 col-sm-6">
									<Select
										name="form-field-name"
										value="HTML, CSS, JavaScript"
										options={haveSkills}
										multi={true}
										allowCreate={true}
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
module.exports = ProfileForm;
