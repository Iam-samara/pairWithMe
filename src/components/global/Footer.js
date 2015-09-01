var React = require('react');
var Router= require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var Footer = React.createClass({
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
				</ul>
			</nav>
		);
	},
});
module.exports = Footer;
