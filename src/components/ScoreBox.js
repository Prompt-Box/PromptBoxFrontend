import React from 'react';

function ScoreBox(props) {
	return (
		<div className={`ScoreBox${props.id}`}>
			<h2>{props.name}</h2>
			<h1>{props.score}</h1>
		</div>
		)
}

export default ScoreBox;
