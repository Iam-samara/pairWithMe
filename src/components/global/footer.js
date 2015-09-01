var React = require('react');
var Footer = React.createClass({
	render: function(){
		return (
		<div>
		<h2>Footer</h2>
		<button id ="home" type="button">home</button>
		<button id ="login" type="button">login</button>
		<button id ="projects" type="button">projects</button>
		</div>
		);
	},
});
module.exports = Footer;
