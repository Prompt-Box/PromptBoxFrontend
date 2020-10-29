import React, { useState, useReducer } from 'react';
import Logo from "./Logo";
import RoomBox from "./RoomBox"
import CreateRoom from "./CreateRoom"

function Lobby(props) {

	const [rooms, setRooms] = useState([]);

	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	const addRoom = (newRoom) => {
		let local = rooms;
		local.push(newRoom);
		setRooms(local);
		console.log(rooms);
		forceUpdate();
	}

	return(
		<div id='Lobby'>
			<h1 id="welcome">Welcome to Prompt Box, {props.username}!</h1>
			<div id="roomflex">
				{rooms.map(name => (<RoomBox key={name} roomName={name} />))}
				<div className="filler"></div>
				<div className="filler"></div>
				<div className="filler"></div>
				<div className="filler"></div>
			</div>
			<CreateRoom addRoom={addRoom}/>
		</div>
	)
}

export default Lobby;