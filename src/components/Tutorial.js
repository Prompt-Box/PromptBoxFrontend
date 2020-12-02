import React, { useState } from 'react';

function Tutorial(props) {
	return(
		<div id="Tutorial">
			<p className="hometext">How to Play:</p>
			<p className="blurb">Prompt Box is a deduction game. Each round, each player will submit a convincing "robot-generated" statement to try to trick the opponent. Next, each player will  be presented with four statements. Three of these are actually AI-generated; one of them is human. Guess correctly and you'll be awarded a point! Try to best your opponent before the game ends!</p>
			<button id="back" type="button" onClick={props.turnTutorialOff}>back to main</button>
		</div>
	);
}

export default Tutorial;