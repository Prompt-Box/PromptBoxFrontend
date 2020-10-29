import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Lobby from './components/Lobby';
import './Reset.css'
import './App.css';

// Test

function App() {

  const [flowState, setFlowState] = useState(0);
  const [username, setUsername] = useState("Player");

  const advanceState = () => {
  	setFlowState(flowState + 1);
  }

  const setName = (name) => {
    setUsername(name);
  }
  
  return (
    <div className="App">
        {flowState === 0 ? <HomePage advanceState={advanceState} setName = {setName}/> : null}
        {flowState === 1 ? <Lobby username={username}/> : null}
    </div>
  );
}

export default App;
