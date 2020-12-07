import React from 'react';
import clickSfx from './sounds/click.mp3';
import useSound from 'use-sound';

function RoomBox(props) {

	const [playClick] = useSound(clickSfx)

	const join = () => {
		playClick();
		const url = `https://prompt-box-backend.herokuapp.com/api/lobby/join/${props.roomName}/${props.username}`
		fetch(url, {
			method: 'POST'
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