import React from 'react';
import Typist from 'react-typist';

function Logo() {
	return (
		<div width="685px" height="150px">
			<img src="https://i.imgur.com/JJ0Sjjn.png" height="150px"></img>
			<Typist cursor={{ hideWhenDone: true }}>
				<Typist.Delay ms={100} />
				<p id="title"><b>prompt box</b></p>
				<Typist.Delay ms={300} />
				<p id="subtitle"><b>the reverse turing test game</b></p>
			</Typist>
		</div>
		)
}

export default Logo;