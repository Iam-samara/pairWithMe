var React = require('react');
var HomeHero = React.createClass({

render: function(){
	return (
		<div className="row">
      <div className="col-xs-12 col-sm-4 col-sm-push-8">
        <p>
          Pair with me is a site deticated to finding the optimal pair programming partner for you! We dedicate our self to making sure anyone can find the person they want to work with to ensure they have very best experience. We hope you enjoy and find our site helpful!
        </p>
        <p className="text-center">
					<a href="/auth/github">
						<img src="./img/github-sign-in.png" alt="sign in with GitHub" className="img-responsive"/>
					</a>
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
