var React = require('react');

var Questions = React.createClass({

	render: function() {
		return (
			<div>
			  <label>What is Pair Programming? </label>
					<p className="bordered">
							Pair Programming in its simple form is just two people working together on a project. We recommend when programming to follow the driver navigator method to be the most efficient. This essentially means one partner,driver, types while the other, navigator, researches problems and checks the drivers work.
					</p>
			  <label>Why Pair Program?</label>
					<p className='bordered'>
						Pair Programming allows you to have two minds working on the same problem making it much easier and faster to solve. It also forces you to express your logic in an efficient manner. Pair programming forces you to write better code faster.
		
					</p>
				<label>How to Pair Program?</label>
					<p className='bordered'>
						To pair program take shifts revolving every 15 to 30 minutes or every other challenge. As one partner takes on the role of driver and actually types out the code. The other partner assumes the role of navigator and they are in charge of research and helping the driver through blocks. As the driver types the navigator should watch for errors and problems with the logic. At all times both partners should be able to articulate there logic and thoughts.
					</p>
				<label>Who Can Pair Program?</label>
					<p className='bordered'>
						We recommend that anyone wanting to start with going through tutorials like Codeschool or Codeacademy to have a basic understanding of what programming is. After that there are plenty of people on our site that love teaching through pair programming. So the simple answer to that anyone can program!
					</p>
				<label>When to Pair Program</label>
					<p className='bordered'>
						Anytime you are willing to share and use different views on a project. There are few instances in which pair programming will not be the most fun and efficient, way to program. 
					</p>
				<label>What Technologies to Use?</label>
					<p>
						I would recommend agreeing on one type of text editor. I also recommend using GitHub to share your code with each other. Then each situation will require different sets of technology for a specific instance. So keep an open mind and pick the best tools for the job.
					</p>
				<label>How to Remote Pair Program?</label>
					<p className='bordered'>
						Remote pair programming can be simple and just as efficient as in person programming. We recommend using a text editor in which you can share a workspace and some form of video chatting. Other than that you basically do the same thing as you would in person with a little bit more articulation of your thoughts since you can not read body language as well.
					</p>
				<label>What is A Good Project?</label>
					<p className='bordered'>
						All projects are a good project. Pick a project goal in scope for your skill level and just have fun with it. Just because your project is not ground breaking or has been done before does not mean your project is not good!
					</p>
			</div>
		);
	}

});

module.exports = Questions;