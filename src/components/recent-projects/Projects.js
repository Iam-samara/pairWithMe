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
	handle: function(){
		 window.location.pathname = '/project/'+ this.props.route
	},
	render: function() {
		console.log("props ~>", this.props.title);
		return(
			<div className="col-xs-12 col-sm-12 bordered">
				<p>Title:{this.props.title}</p>
				<p>Description:{this.props.description}</p>
				<p>Tools Used: {this.props.github}</p>
				<button onClick={this.handle}>Project Path</button>
			</div>
			);

	},

});
module.exports=Projects;