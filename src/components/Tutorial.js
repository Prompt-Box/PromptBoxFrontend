import React, { useState } from 'react';

function Tutorial(props) {
	return(
		<div id="Tutorial">
			<p class="hometext">How to Play! (WIP)</p>
			<button id="back" type="button" onClick={props.turnTutorialOff}>back to main</button>
		</div>
	);
}

export default Tutorial;