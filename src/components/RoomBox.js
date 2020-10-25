import React from 'react';

function RoomBox(props) {
	return(
		<div class="RoomBox">
			<p id="roomtitle">{props.roomName}</p>
			<button type="button">join game</button>
		</div>
	)
}

export default RoomBox;