var React = require('react');
var Resources = React.createClass({
	render: function(){
		return(
			<div>
				<label>Resources for Pair Programming</label>
					<div className="bordered">
						<div className='row'>
							<a href="https://www.versionone.com/agile-101/agile-software-programming-best-practices/pair-programming/">What Pair Programming is</a>
						</div>
						<div className='row'>
							<a href="http://remotepairprogramming.com/">Remote Pairing guide</a>
						</div>
						<div className='row'>
							<a href="http://cafe.elharo.com/programming/why-pair-programming-works/">Why Pair Program</a>
						</div>
					</div>
			</div>
			);
	}

});
module.exports = Resources;