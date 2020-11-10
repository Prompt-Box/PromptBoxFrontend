import React, { useState, useEffect, useReducer } from 'react';
import ScoreBox from "./ScoreBox"

function GameBox(props) {

	const [p1, setPlayer1] = useState("");
	const [p2, setPlayer2] = useState("");
	const [p1score, setPlayer1Score] = useState(0);
	const [p2score, setPlayer2Score] = useState(0);
	const [p1text, setPlayer1Text] = useState("");
	const [p2text, setPlayer2Text] = useState("");
	const [turn, setTurn] = useState(true);
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	var tick = setInterval(forceUpdate, 30000);

	useEffect(() => {
		const url = `https://prompt-box-backend.herokuapp.com/api/games/${props.id}`
		fetch(url)
	        	.then(response => response.json())
	        	.then(data => {
	        	  setPlayer1(data.game.player1);
				  setPlayer2(data.game.player2);
				  setPlayer1Score(data.game.player1_score);
				  setPlayer2Score(data.game.player2_score);
				  setPlayer1Text(data.game.player1_text);
				  setPlayer2Text(data.game.player2_text);
				  console.log("refresh");
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
			<ScoreBox name={p1} score={p1score}/>
			<ScoreBox name={p2} score={p2score}/>
		</div>
		)
}

export default GameBox;
