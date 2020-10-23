import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Lobby from './components/Lobby';
import './App.css';

// Test

function App() {

  const [flowState, setFlowState] = useState(0);

  const advanceState = () => {
  	setFlowState(flowState + 1);
  }
  
  return (
    <div className="App">
        {flowState == 0 ? <HomePage advanceState={advanceState}/> : null}
        {flowState == 1 ? <Lobby /> : null}
    </div>
  );
}

export default App;
