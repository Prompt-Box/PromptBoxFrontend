import React, { useState } from 'react';

function NameField(props) {

	const [name, setName] = useState("")
	
	const handleSubmit = (event) => {
	    event.preventDefault();
	    props.setName(name);
	    props.advanceState();
	}

	return(
	    <div id="formbox">
		    <form onSubmit={handleSubmit}>
			    <p class="hometext">enter name:</p>
			      <input
				        type="text"
				        value={name}
				        onChange={event => setName(event.target.value)}
				  />
			    <input type="submit" value="enter lobby" />
			    <button id="howtoplay" type="button" onClick={props.turnTutorialOn}>how to play</button>
		    </form>	
	    </div>
	)
}

export default NameField;