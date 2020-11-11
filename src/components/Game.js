import React, { useState, useEffect, useReducer, useRef } from 'react';
import GameBox from "./GameBox"

function Game(props) {

	const [waiting, setWaiting] = useState(true);
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	const timer = useRef(null)

	useEffect(() => {
		timer.current = setInterval(forceUpdate, 3000);
		return function cleanup() {
			clearInterval(timer.current);
		}
	}, [])

	useEffect(() => {
		const url = `https://prompt-box-backend.herokuapp.com/api/games/${props.id}`
		if (waiting === true) {
			fetch(url)
		        	.then(response => response.json())
		        	.then(data => {
		              console.log("trigger")
		        	  setWaiting(false);
		        	  clearInterval(timer.current);
					})
					.catch((error) => {
					  console.error('Error:', error);
					})
		}
	}, [ignored])
	return (
		<div>
		{waiting ? <h1>Waiting...</h1> : <GameBox player1={props.player1} id={props.id} name={props.username}/>}
		</div>
		)
}

export default Game;