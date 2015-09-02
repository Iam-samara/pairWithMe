var React = require('react');
var Router= require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var Header = React.createClass({
	/* this renders a link to all of our routes */
	render: function(){
		return (
			<nav>
				<ul>
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
						<Link to= "individualprojects">Individul Projets</Link>
					</li>
								<li>
						<Link to= "search">search</Link>
					</li>
					<li>
						<a href="/auth/github">githubLogin</a>
					</li>
				</ul>
			</nav>
		);
	},
});
module.exports = Header;
