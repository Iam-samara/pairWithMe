var React = require('react');
var HomeHero = React.createClass({

render: function(){
	return (
		<div className="row">
      <div className="col-xs-12 col-sm-4 col-sm-push-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="text-center">
          <img src="http://placehold.it/300x50" className="img-responsive" />
        </p>
      </div>
        <div className="col-xs-12 col-sm-8 col-sm-pull-4">
        	<img src="https://files.slack.com/files-pri/T063JGQTE-F0A2G1WC9/startup-photos.jpg" className="img-responsive" />
      	</div>
    </div>
		);
	},
});
module.exports = HomeHero;
