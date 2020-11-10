import React, { useState, useEffect, useReducer } from 'react';
import GameBox from "./GameBox"

function Game(props) {

	const [waiting, setWaiting] = useState(true);
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	var tick = setInterval(forceUpdate, 10000);

	useEffect(() => {
		const url = `https://prompt-box-backend.herokuapp.com/api/games/${props.id}`
		fetch(url)
	        	.then(response => response.json())
	        	.then(data => {
	              console.log("trigger")
	        	  setWaiting(false);
	        	  clearInterval(tick);
				})
				.catch((error) => {
				  console.error('Error:', error);
				});
		return function cleanup() {
			clearInterval(tick);
		}
	}, [ignored])
	return (
		<div>
		{waiting ? <h1>Waiting...</h1> : <GameBox id={props.id} name={props.username}/>}
		</div>
		)
}

export default Game;