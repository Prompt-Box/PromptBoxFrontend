import React, { useState } from 'react';

function GuessButton(props) {

	const [correct, setCorrect] = useState(0);

	const handleClick = () => {

		props.setSubmitted(true);

		const url = `https://prompt-box-backend.herokuapp.com/api/games/check/${props.id}/${props.name}?text=${props.text}`
		const url2 = `https://prompt-box-backend.herokuapp.com/api/games/${props.id}/${props.name}`
		fetch(url).then(response => response.json()) 
		  	  .then(data => {
			  	console.log(data)

			  	if (data.result == 1) {
			  		setCorrect(1);
			  		fetch(url2, {
							method: 'POST'
						}).then(response => response.json()) 
					  	  .then(data => {
						  	console.log("Success: " + data)
					  	}).catch((error) => console.log("Error: "+ error))
			  	}
			  	else {
			  		setCorrect(2);			  
			  	}

				if (props.turn) {
					props.advanceTurn();
				}
				else {
					props.advanceRound();
				}

		  	}).catch((error) => console.log("Error: "+ error))

	}

	return (
		<button id="guesser" type="button"
		disabled={props.submitted}
		onClick={handleClick}
		className={`GuessButton ${correct === 1 ? "correct" : ""} ${correct === 2 ? "incorrect" : ""}`}>{props.text}</button>
		)
}

export default GuessButton;
