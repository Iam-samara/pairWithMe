var React = require('react');


var UserInfo = React.createClass({
getInitialState: function() {
	return {
		UserName: '',
		GitHub: '',
		Pic: '',
	};
},
componentDidMount: function() {
	var that = this;
    $.getJSON('/profile1', function(result) {
    		that.setState({UserName:result.username})
    		that.setState({Pic:result.githubProfileImage})
    		that.setState({GitHub:result.githubProfileURL})

      })
    },

	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12 text-center">
					<img src={this.state.Pic}/>
						<p>{this.state.UserName}  |  {this.state.GitHub}</p>
				</div>
			</div>
		);
	}

});

module.exports = UserInfo;