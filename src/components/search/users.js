var React = require('react');
var Users = React.createClass({
	getInitialState: function() {
		return {
			picture: '',
			name: '',
			github: '',
			email: ''
		};
	},
	componentDidMount: function() {
			
	},
	render: function() {
		return (
			<div className="col-xs-12 col-sm-3 col-lg-4">
				<div>
					<img src={this.state.picture}/>
				</div>
				<div>
					<p>{this.state.name}</p>
				</div>
				<div>
					<a href="mailto:"+{this.state.email}>Email</a>
				</div>
				<div>
					<a href={this.state.github}></a>
				</div>
			</div>
		);
	},
});