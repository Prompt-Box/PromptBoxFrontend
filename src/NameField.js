import React, { useState } from 'react';

function NameField(props) {

	const [name, setName] = useState("")
	
	const handleSubmit = (event) => {
	    event.preventDefault()
	    alert(`Welcome to Prompt Box, ${name}!`)
	}

	return(
	    <div id="formbox">
		    <form onSubmit={handleSubmit}>
			    <p id="entername">enter name:</p>
			      <input
				        type="text"
				        value={name}
				        onChange={event => setName(event.target.value)}
				  />
			    <input type="submit" value="enter lobby" />
			    <button>how to play</button>
		    </form>	
	    </div>
	)
}

export default NameField;