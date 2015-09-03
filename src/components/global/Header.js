var React = require('react');
var Router= require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var Header = React.createClass({
	/* this renders a link to all of our routes */
	render: function(){
		return (
			<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        	<li>
						<Link to= "/">Home</Link>
					</li>
					<li>
						<Link to= "guide">Guide</Link>
					</li>
					<li>
						<Link to= "profile">Profile</Link>
					</li>
					<li>
						<Link to= "profileform">Profile Editor</Link>
					</li>
					<li>
						<Link to= "recentprojects">Recent Projects</Link>
					</li>
					<li>
						<Link to= "individualprojects">Individual Projets</Link>
					</li>
								<li>
						<Link to= "search">search</Link>
					</li>
					<li>
						<a href="/auth/github">githubLogin</a>
					</li>
       
      </ul>
    </div>
  </div>
</nav>
		);
	},
});
module.exports = Header;

			// <nav class="navbar navbar-default">
				// <ul>
				// 	<li>
				// 		<Link to= "/">Home</Link>
				// 	</li>
				// 	<li>
				// 		<Link to= "guide">Guide</Link>
				// 	</li>
				// 	<li>
				// 		<Link to= "profile">Profile</Link>
				// 	</li>
				// 	<li>
				// 		<Link to= "profileform">Profile Editor</Link>
				// 	</li>
				// 	<li>
				// 		<Link to= "recentprojects">Recent Projects</Link>
				// 	</li>
				// 	<li>
				// 		<Link to= "individualprojects">Individual Projets</Link>
				// 	</li>
				// 				<li>
				// 		<Link to= "search">search</Link>
				// 	</li>
				// 	<li>
				// 		<a href="/auth/github">githubLogin</a>
				// 	</li>
				// </ul>
			// </nav>
