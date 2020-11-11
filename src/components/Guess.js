import React, { useState, useEffect, useReducer, useRef } from 'react';

function Guess(props) {

	const [statements, setStatements] = useState([])
	const [waiting, setWaiting] = useState(true);
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	const timer = useRef(null)

	useEffect(() => {
		timer.current = setInterval(forceUpdate, 1000);
		return function cleanup() {
			clearInterval(timer.current);
		}
	}, [])


	useEffect(() => {
		const url = `https://prompt-box-backend.herokuapp.com/api/games/guess/${props.id}/${props.name}`
		fetch(url)
		    .then(response => response.json())
		    .then(data => {
		    		if (data.text.length == 4) {
		            	setStatements(data.text);
		        		setWaiting(false);
		        	}
				})
					.catch((error) => {
					console.error('Error:', error);
				})
	}, [ignored])

	return (
		<div className="Input">
				<p>{waiting ? "Waiting for other player..." : "Here are your choices!"}</p>
				{statements.map(text => <p>{text}</p>)}
		</div>
		)
}

export default Guess;
