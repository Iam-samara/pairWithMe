var React = require('react');
var HomeHero = React.createClass({

render: function(){
	return (
		<div className="col-xs-8 col-md-10">
				<img className="img-responsive" src="https://files.slack.com/files-pri/T063JGQTE-F0A2G1WC9/startup-photos.jpg"/>
		</div>
		);
	},
});
module.exports = HomeHero;
