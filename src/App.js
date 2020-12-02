import React, { useState } from 'react';
import HomePage from './components/HomePage';
import Lobby from './components/Lobby';
import Game from './components/Game';
import './Reset.css'
import './App.css';

// Test

function App() {

  const [flowState, setFlowState] = useState(0);
  const [username, setUsername] = useState("Player");
  const [player1, setPlayer1] = useState(true);
  const [lobby, setLobby] = useState("");

  const advanceState = () => {
  	setFlowState(flowState + 1);
  }

  const recall = () => {
    setFlowState(1);
  }

  const setName = (name) => {
    setUsername(name);
  }
  
  return (
    <div className="App">
        {flowState === 0 ? <HomePage advanceState={advanceState} setName = {setName}/> : null}
        {flowState === 1 ? <Lobby setPlayer1={setPlayer1} advanceState={advanceState} username={username} setLobby={setLobby}/> : null}
        {flowState === 2 ? <Game player1={player1} advanceState={recall} username={username} id={lobby}/> : null}
    </div>
  );
}

export default App;
