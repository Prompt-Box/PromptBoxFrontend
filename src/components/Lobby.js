import React, { useState, useEffect, useReducer, useRef } from 'react';
import RoomBox from "./RoomBox"
import CreateRoom from "./CreateRoom"

// {rooms.map(name => (<RoomBox key={name} roomName={name} />))}

function Lobby(props) {

	const [rooms, setRooms] = useState([]);

	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	const [loading, setLoading] = useState(true);

	const timer = useRef(null)

	useEffect(() => {
		timer.current = setInterval(forceUpdate, 3000);
		return function cleanup() {
			clearInterval(timer.current);
		}
	}, [])

	const addRoom = (newRoom) => {
		const url = `https://prompt-box-backend.herokuapp.com/api/lobby/create/${newRoom}/${props.username}`
		fetch(url, {
			method: 'POST',
			headers: {
		        'Accept': 'application/json',
		        'Content-Type': 'application/json',
		    },
			body: JSON.stringify({
		         user: "USERNAME:PASSWORD"
		    })
		}).then(response => response.json()) 
	  	  .then(data => {
		  	console.log("SaveCreds saveCreds: Fetch Response data: ")
		  	console.log(data) //don't log an rsion won't work and object will not be dumped
	  	}).catch((error) => console.log("SaveCreds saveCreds: Fetch Failure (is server up?): "+ error))
	  props.setLobby(newRoom);
	  props.setPlayer1(true);
	  props.advanceState();
	}

	useEffect(() => {
		const url = "https://prompt-box-backend.herokuapp.com/api/lobby"
	        fetch(url, {
		        headers: {
			        'Accept': 'application/json',
			        'Content-Type': 'application/json',
			    },
				body: JSON.stringify({
			         user: "USERNAME:PASSWORD"
			    })	
	        })
	        	.then(response => response.json())
	        	.then(data => {
				  setRooms(data.lobbies);
				  setLoading(false);
				  console.log(rooms);
				})
				.catch((error) => {
				  console.error('Error:', error);
				});
			return console.log("unmounted");
	}, [ignored])

	return(
		<div id='Lobby'>
			<h1 id="welcome">Welcome to Prompt Box, {props.username}!</h1>
			{loading ? <p className="loading">Loading...</p> : 
				<div id="roomflex">
					{rooms.map(room => (<RoomBox key={room.title} setPlayer1={props.setPlayer1} username = {props.username} roomName={room.title} setLobby={props.setLobby} advanceState = {props.advanceState}/>))}
					<div className="filler"></div>
					<div className="filler"></div>
					<div className="filler"></div>
					<div className="filler"></div>
				</div>}

			<CreateRoom addRoom={addRoom}/>
		</div>
	)
}

export default Lobby;