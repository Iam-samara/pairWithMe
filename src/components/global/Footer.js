var React = require('react');
var Router= require('react-router');
var Route = Router.Route;
var Link = Router.Link;
var Footer = React.createClass({
	render: function(){
		return (
			<div className="navbar clearfix row">
      <nav>
        <ul className="nav nav-pills pull-right">
						<li role="presentation">
							<Link to="/">Home</Link>
						</li>
						<li role="presentation">
							<Link to="guide">Guide</Link>
						</li>
						<li role="presentation">
							<Link to="profile">Profile</Link>
						</li>
						<li role="presentation">
							<Link to="recentprojects">Recent Projects</Link>
						</li>
						<li role="presentation">
							<Link to="search">search</Link>
						</li>
        </ul>
      </nav>
    </div>
		);
	},
});
module.exports = Footer;
