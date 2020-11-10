import React from 'react';

function ScoreBox(props) {
	return (
		<div>
			<h1>{props.name}</h1>
			<h1>{props.score}</h1>
		</div>
		)
}

export default ScoreBox;
