var React = require('react');
var Projects = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			descrition: '',
			tools: '',
			route: ''
		};
	},
	componentDidMount: function() {
		
	},
	render: function() {
		return(
			<div className="col-xs-12 col-sm-12 bordered">
				<p>Title: </p>
				<p>Description: </p>
				<p>Tools Used: </p>
				<p>Project Path: </p>
			</div>
			);

	},

});
module.exports=(Projects);