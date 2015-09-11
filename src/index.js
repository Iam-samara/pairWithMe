var React = require('react');
var Header = require('./components/global/Header.js');
var Footer = require('./components/global/Footer.js');
var Home = require('./components/home/Home.js');
var Profile = require('./components/profile/Profile.js');
var ProfileEditor = require('./components/profile-editor/ProfileEditor.js');
var RecentProjects = require('./components/recent-projects/RecentProjects.js');
var IndividualProjects = require('./components/individual-project/IndividualProjects.js');
var Search = require('./components/search/Search.js');
var Guide = require('./components/guide-page/Guide.js')
var App = require('./components/app/App.js');
var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;
window.$ = window.jQuery = require('jquery');

/* establishes our routes and gives designated names */
var routes = (
	<Route handler = {App}>
		<Route name="home" path="/" handler={Home}/>
		<Route name="profile" path="profile" handler={Profile}/>
		<Route name="profileeditor" path="profileEditor" handler={ProfileEditor}/>
		<Route name="recentprojects" path="recentProjects" handler={RecentProjects}/>
		<Route name="individualprojects" path="individualProjects" handler={IndividualProjects}/>
		<Route name="search" path="search" handler={Search}/>
		<Route name="guide" path="guide" handler={Guide}/>
		<Route name="usersprofile" path="profile/:username" handler={}
	</Route>
	)


/*runs routes and attcehes them to our div with the class main
	also designates which handler to render */
Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById("main"));
});
