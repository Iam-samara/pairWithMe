var React = require('react');
var Header = require('./components/global/Header.js');
var Footer = require('./components/global/Footer.js');

var Home = require('./components/home/Home.js');
var Profile = require('./components/profile/Profile.js');
var ProfileForm = require('./components/profile-editor/ProfileForm.js');
var RecentProjects = require('./components/recent-projects/RecentProjects.js');
var IndividualProjects = require('./components/individual-project/IndividualProjects.js');
var Search = require('./components/search/Search.js');
var Guide = require('./components/guide-page/Guide.js')
var App = require('./components/app/App.js');
var Router = require('react-router');
var Route = Router.Route;

var routes = (
	<Route handler = {App}>
		<Route path = "/" handler={Home}/>
		<Route path = "profile" handler={Profile}/>
		<Route path = "profileForm" handler={ProfileForm}/>
		<Route path = "recentProjects" handler={RecentProjects}/>
		<Route path = "individualProjects" handler={IndividualProjects}/>
		<Route path = "search" handler={Search}/>
		<Route path = "guide" handler={Guide}/>
		
	</Route>
	)

// Router.run(routes, function (Handler) {
//   React.render(<Handler/>, document.getElementById("header"));
// });

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById("header"));
});

// React.render(<Header />, document.getElementById('header'));
// React.render(<Footer />, document.getElementById('footer')); 
	// <Route path = "guide/:read" handler={Guide}/>
