import React, { useState, useEffect, useReducer, useRef } from 'react';
import ScoreBox from "./ScoreBox"
import Input from "./Input"
import Guess from "./Guess"
import winSfx from './sounds/clap.mp3';
import useSound from 'use-sound';

function GameBox(props) {

	const [p1, setPlayer1] = useState("");
	const [p2, setPlayer2] = useState("");
	const [p1score, setPlayer1Score] = useState(0);
	const [p2score, setPlayer2Score] = useState(0);
	const [p1text, setPlayer1Text] = useState("");
	const [p2text, setPlayer2Text] = useState("");
	const [turn, setTurn] = useState(true);
	const [round, setRound] = useState(1);
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	const [playWin] = useSound(winSfx);

	const timer = useRef(null)

	const advanceTurn = () => {
		const url = `https://prompt-box-backend.herokuapp.com/api/games/${props.id}/turn`
		fetch(url, {
				method: 'POST'
			}).then(response => response.json()) 
		  	  .then(data => {
			  	console.log("Success: ")
			  	console.log(data)
		  	}).catch((error) => console.log("Error: "+ error))
	}

	const advanceRound = () => {
		const url = `https://prompt-box-backend.herokuapp.com/api/games/${props.id}/round`
		fetch(url, {
				method: 'POST'
			}).then(response => response.json()) 
		  	  .then(data => {
			  	console.log("Success: ")
			  	console.log(data)
		  	}).catch((error) => console.log("Error: "+ error))
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
				  setRound(data.game.round);
				  console.log("refresh");
				  console.log(data);
				  if (round === -1) {
				  	playWin();
				  }
				})
				.catch((error) => {
				  console.error('Error:', error);
				});
	}, [ignored])
	return (
		<div>
			<ScoreBox id={1} name={p1} score={p1score}/>
			<ScoreBox id={2} name={p2} score={p2score}/>
			<h1 class="Round">{round === -1 ? "Game Over" : `Round ${round}`}</h1>
			{round !== -1 ?
				<>
				{p1text === "" || p2text === "" ? 
					<Input id={props.id} name={props.name} /> :
					<Guess id={props.id} name={props.name} turn={turn} advanceTurn={advanceTurn} advanceRound={advanceRound}/>
				}
				</>
				:
				<>
				<h1 className="Winner">{p1score === p2score ? `It's a tie!` : p1score > p2score ? `${p1} wins!` : `${p2} wins!`}</h1>
				<button className="returnlobby" onClick={props.advanceState}>Return to Lobby</button>
				</>
			}
		</div>
		)
}

export default GameBox;
