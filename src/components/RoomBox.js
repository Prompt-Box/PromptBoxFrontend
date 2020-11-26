import React from 'react';

function RoomBox(props) {

	const join = () => {
		const url = `https://prompt-box-backend.herokuapp.com/api/lobby/join`
		fetch(url, {
			method: 'POST',
			body: JSON.stringify({"title": ${newRoom}, "name": ${props.username}})
		}).then(response => response.json()) 
	  	  .then(data => {
		  	console.log("SaveCreds saveCreds: Fetch Response data: ")
		  	console.log(data) //don't log an rsion won't work and object will not be dumped
	  	}).catch((error) => console.log("SaveCreds saveCreds: Fetch Failure (is server up?): "+ error))
		props.setLobby(props.roomName);
		props.setPlayer1(false);
        props.advanceState();
    }

	return(
		<div className="RoomBox">
			<p id="roomtitle">{props.roomName}</p>
			<button className="join" type="button" onClick={join}>join game</button>
		</div>
	)
}

export default RoomBox;