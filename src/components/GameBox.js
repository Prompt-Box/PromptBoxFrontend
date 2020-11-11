import React, { useState, useEffect, useReducer, useRef } from 'react';
import ScoreBox from "./ScoreBox"
import Input from "./Input"
import Guess from "./Guess"

function GameBox(props) {

	const [p1, setPlayer1] = useState("");
	const [p2, setPlayer2] = useState("");
	const [p1score, setPlayer1Score] = useState(0);
	const [p2score, setPlayer2Score] = useState(0);
	const [p1text, setPlayer1Text] = useState("");
	const [p2text, setPlayer2Text] = useState("");
	const [turn, setTurn] = useState(true);
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
	const [input, setInput] = useState("");

	const timer = useRef(null)

	const advanceTurn = () => {
		const url = `https://prompt-box-backend.herokuapp.com/api/games/${props.id}/turn`
		fetch(url, {
			method: 'POST'
		}).then(response => response.json()) 
	  	  .then(data => {
		  	console.log("SaveCreds saveCreds: Fetch Response data: ")
		  	console.log(data) //don't log an rsion won't work and object will not be dumped
	  	}).catch((error) => console.log("SaveCreds saveCreds: Fetch Failure (is server up?): "+ error))
	}

	useEffect(() => {
		timer.current = setInterval(forceUpdate, 1000);
		return function cleanup() {
			clearInterval(timer.current);
		}
	}, [])

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
				  setTurn(data.game.player1_turn);
				  console.log("refresh");
				})
				.catch((error) => {
				  console.error('Error:', error);
				});
	}, [ignored])
	return (
		<div>
			<ScoreBox id={1} name={p1} score={p1score}/>
			<ScoreBox id={2} name={p2} score={p2score}/>
			{props.player1 === turn ? 
				<Input advanceTurn={advanceTurn} setInput={setInput} /> :
				<Guess id={props.id} name={props.name} advanceTurn={advanceTurn} input={input}/>
			}
		</div>
		)
}

export default GameBox;
