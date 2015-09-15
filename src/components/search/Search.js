var React = require('react');
var SearchForms = require('./SearchForms.js');
var Search = React.createClass({
	render: function(){
		return(
			<div>
				<SearchForms/>
			</div>
			);
	},
});
module.exports = Search;