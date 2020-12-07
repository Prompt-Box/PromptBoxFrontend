import React, { useState } from 'react';
import clickSfx from './sounds/click.mp3';
import useSound from 'use-sound';

function NameField(props) {

	const [name, setName] = useState("")

	const [playClick] = useSound(clickSfx)
	
	const handleSubmit = (event) => {
		playClick();
	    event.preventDefault();
	    props.setName(name);
	    props.advanceState();
	}

	return(
	    <div id="formbox">
		    <form onSubmit={handleSubmit}>
			    <p className="hometext">enter name:</p>
			      <input className="namebox"
			      		maxLength="15"
				        type="text"
				        value={name}
				        onChange={event => setName(event.target.value)}
				  />
			    <input type="submit" className="usernamesubmit" value="enter lobby" />
			    <button id="howtoplay" type="button" onClick={props.turnTutorialOn}>how to play</button>
		    </form>	
	    </div>
	)
}

export default NameField;