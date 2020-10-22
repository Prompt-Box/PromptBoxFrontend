import React from 'react';
import Typist from 'react-typist';

function Logo() {
	return (
		<div id="Logo">
			<img id="logopic" alt="PromptBox: The Reverse Turing Test Game"src="https://i.imgur.com/JJ0Sjjn.png" height="150px"></img>

				<p id="title"><b>
					<Typist cursor={{hideWhenDone:true}}>
						<Typist.Delay ms={100} />
						prompt box
					</Typist>
				</b></p>

				<p id="subtitle">
					<Typist cursor={{show: false}}>
						<Typist.Delay ms={1500} />
						the reverse turing test game
					</Typist>
				</p>

		</div>
		)
}

export default Logo;