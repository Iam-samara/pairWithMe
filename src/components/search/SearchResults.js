var React = require('react');
var Users = require('./Users.js')
var SearchResults = React.createClass({
	render: function() {

		var userData = this.props.data.map(function(element, index){
				return(<Users picture={element.githubProfileImage} name={element.username} github={element.githubProfileURL} email={element.email} key={index}/>)
		});
			return (
			// NOTE: FIX SEARCH RESULTS TO BE IN ROWS OF 4 COLUMNS
			<div className="row">
				{userData}
			</div>
		);
	},
});
module.exports = SearchResults;
