import React, { useState } from 'react';

function GuessButton(props) {

	const [correct, setCorrect] = useState(0);

	const handleClick = () => {

		props.setSubmitted(true);

		const url = `https://prompt-box-backend.herokuapp.com/api/games/check/${props.id}/${props.name}?text=${props.text}`
		const url2 = `https://prompt-box-backend.herokuapp.com/api/games/${props.id}/${props.name}`
		fetch(url, {
			headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json',
		    },
			body: JSON.stringify({
		         user: "USERNAME:PASSWORD"
		    })
		}).then(response => response.json()) 
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

						if (props.turn) {
							props.advanceTurn();
						}
						else {
							props.advanceRound();
						}
			  	}
			  	else {
			  		setCorrect(2);
			  	}

		  	}).catch((error) => console.log("Error: "+ error))

	}

	return (
		<button type="button"
		disabled={props.submitted}
		onClick={handleClick}
		className={`GuessButton ${correct === 1 ? "correct" : ""} ${correct === 2 ? "incorrect" : ""}`}>{props.text}</button>
		)
}

export default GuessButton;
