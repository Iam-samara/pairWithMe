var React = require('react');
var HowTo = require("./HowTo.js");
var Resources = require("./Resources.js");
var Guide = React.createClass({
	render: function(){
		// console.log(this.props.params.read);
		return (
			<div>
			<h1>Guide Page</h1>
			<HowTo/>
			<Resources/>
			</div>
		);
	},
});
module.exports= Guide;