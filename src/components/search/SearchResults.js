var React = require('react');

var SearchResults = React.createClass({
	getInitialState: function() {
		console.log("passed down", this.props.data);
		return {
			users: []
		};
	},
	componentDidMount: function() {
		console.log("mounted data", this.props.data);
		this.setState({users:this.props.data})
		
	},
	render: function() {
		return (
			<div>hi</div>
		);
	},
});
module.exports = SearchResults;