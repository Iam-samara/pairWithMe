var React = require('react');
var Projects = React.createClass({
	getInitialState: function() {
		return {
			title: '',
			descrition: '',
			github: '',
			route: ''
		};
	},
	render: function() {
		console.log("props ~>", this.props.title);
		return(
			<div className="col-xs-12 col-sm-12 bordered">
				<p>Title:{this.props.title}</p>
				<p>Description:{this.props.description}</p>
				<p>Tools Used: {this.props.github}</p>
				<p>Project Path: </p>
			</div>
			);

	},

});
module.exports=Projects;