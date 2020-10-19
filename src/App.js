import React from 'react';
import Typist from 'react-typist';
import logo from './logo.svg';
import './App.css';

// Test

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.imgur.com/N4C08eE.png" className="App-logo" alt="logo" />
        <Typist>
          PromptBox! Testing!
        </Typist>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
