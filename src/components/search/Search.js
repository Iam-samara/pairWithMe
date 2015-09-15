var React = require('react');
var SearchForms = require('./SearchForms.js');
var SearchResults = require('./SearchResults.js');
var Search = React.createClass({
	render: function(){
		return(
			<div>
				<SearchForms/>
				<SearchResults/>
			</div>
			);
	},
});
module.exports = Search;