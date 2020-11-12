import React, { useState } from 'react';

function Input(props) {

	const [input, setInput] = useState("")
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
	    event.preventDefault();

	    const url = `https://prompt-box-backend.herokuapp.com/api/games/text/${props.id}/${props.name}?text=${input}`
		fetch(url, {
				method: 'POST'
			}).then(response => response.json()) 
		  	  .then(data => {
			  	console.log("Success: ")
			  	console.log(data)
		  	}).catch((error) => console.log("Error: "+ error))
		  	  
	    setSubmitted(true);
	}

	return (
		<div className="Input">
			<form onSubmit={handleSubmit}>
				<p>{submitted ? "Waiting for your opponent to submit..." : "Type something for your opponent to guess!"}</p>
				<input disabled={submitted}
					className="inputbox"
					type="text"
					value={input}
					required
					onChange={event => setInput(event.target.value)} />
				<input disabled={submitted} type="submit" className="inputsubmit" value="submit" />
			</form>
		</div>
		)
}

export default Input;
