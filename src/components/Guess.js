import React, { useState, useEffect, useReducer, useRef } from 'react';
import GuessButton from "./GuessButton"

function Guess(props) {

	const [statements, setStatements] = useState([])
	const [waiting, setWaiting] = useState(true);
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
	const [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		const url = `https://prompt-box-backend.herokuapp.com/api/games/guess/${props.id}/${props.name}`
		fetch(url)
		    .then(response => response.json())
		    .then(data => {
		            	setStatements(data.text);
		        		setWaiting(false);
				})
					.catch((error) => {
					console.error('Error:', error);
				})
	}, [ignored])

	return (
		<div>
		{waiting ? <p class="Waiting">Hold on...</p> :
					<div className="Input">
						<p>{submitted ? "Waiting for your opponent to guess..." : "Here are your choices!" }</p>
						{statements.map(text => <GuessButton
							advanceTurn={props.advanceTurn}
							turn={props.turn}
							advanceRound={props.advanceRound}
							id={props.id}
							name={props.name}
							submitted={submitted}
							setSubmitted={setSubmitted}
							text={text}/>)}
					</div>}
		</div>
		)
}

export default Guess;
