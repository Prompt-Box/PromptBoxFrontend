import React from 'react';

function RoomBox(props) {
	return(
		<div className="RoomBox">
			<p id="roomtitle">{props.roomName}</p>
			<button className="join" type="button">join game</button>
		</div>
	)
}

export default RoomBox;