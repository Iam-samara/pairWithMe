var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Header = require('./../global/Header.js');
var Footer = require('./../global/Footer.js');

var App = React.createClass({
	render: function() {
    return (
      <div>
      
      	<Header/>
        <RouteHandler/>
        <Footer/>
      </div>
    );
	}
});
module.exports = App;