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
var Link = Router.Link;


var routes = (
	<Route handler = {App}>
		<Route name="home" path = "/" handler={Home}/>
		<Route name="profile" path = "profile" handler={Profile}/>
		<Route name="profileform" path = "profileForm" handler={ProfileForm}/>
		<Route name="recentprojects" path= "recentProjects" handler={RecentProjects}/>
		<Route name="individualprojects" path = "individualProjects" handler={IndividualProjects}/>
		<Route name="search" path = "search" handler={Search}/>
		<Route name="guide" path = "guide" handler={Guide}/>
		
	</Route>
	)

// Router.run(routes, function (Handler) {
//   React.render(<Handler/>, document.getElementById("header"));
// });

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById("main"));
});

// React.render(<App />, document.getElementById('main'));
// React.render(<Footer />, document.getElementById('footer')); 
	// <Route path = "guide/:read" handler={Guide}/>
