import React, { useState } from 'react';
import Logo from './Logo';
import NameField from './NameField';
import Tutorial from './Tutorial';

function HomePage(props) {

	const [tutorialActive, setTutorialActive] = useState(false);

	const turnTutorialOn = () => {
		setTutorialActive(true);
	}

	const turnTutorialOff = () => {
		setTutorialActive(false);
	}

	return(
		<div id="homepage">
	        <Logo />
	        {tutorialActive ? <Tutorial turnTutorialOff={turnTutorialOff}/>
	        				: <NameField advanceState={props.advanceState} turnTutorialOn={turnTutorialOn}/>}
	    </div>
	)
}

export default HomePage;