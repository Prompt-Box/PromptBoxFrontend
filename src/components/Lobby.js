import React, { useState } from 'react';
import Logo from "./Logo";
import RoomBox from "./RoomBox"

function Lobby(props) {

	const [rooms, setRooms] = useState(["Sample Room Name", "Sample Room 2", "Room 3!", "Fourth Room to Test Flex Wrap", "Fifth Because Why Not", "Six Just So It's Nice and Aligned"]);

	return(
		<div id='Lobby'>
			<h1 id="welcome">Welcome to Prompt Box, {props.username}!</h1>
			<div id="roomflex">
				{rooms.map(name => (<RoomBox roomName={name} />))}
			</div>
		</div>
	)
}

export default Lobby;