import React, { useState } from 'react';

function Input(props) {

	const [input, setInput] = useState("")
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
	    event.preventDefault();
	    setSubmitted(true);
	    props.setInput(input);
	    props.advanceTurn();
	}

	return (
		<div className="Input">
			<form onSubmit={handleSubmit}>
				<p>{submitted ? "Waiting for other player to guess" : "Type something!"}</p>
				<input disabled={submitted}
					className="inputbox"
					type="text"
					value={input}
					onChange={event => setInput(event.target.value)} />
				<input disabled={submitted} type="submit" className="inputsubmit" value="submit" />
			</form>
		</div>
		)
}

export default Input;
