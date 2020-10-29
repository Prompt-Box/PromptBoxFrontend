import React, { useState } from 'react';


function CreateRoom(props) {

	const [name, setName] = useState("")
	
	const handleSubmit = (event) => {
	    event.preventDefault();
	    props.addRoom(name);
	}

	return(
		    <form className="createform" onSubmit={handleSubmit}>
			      <input className="createroombox"
				        type="text"
				        maxLength="20"
				        placeholder="new room name"
				        value={name}
				        onChange={event => setName(event.target.value)}
				  />
			    <input className="create" type="submit" value="create game" />
		    </form>	
	)
}

export default CreateRoom;