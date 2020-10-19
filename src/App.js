import React from 'react';
import Typist from 'react-typist';
import Logo from './Logo';
import logo from './logo.svg';
import './App.css';

// Test

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Typist>
          <Typist.Delay ms={100} />
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
