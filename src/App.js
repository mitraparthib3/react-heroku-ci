import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola, Welcome to CI worlds!</p>
        <a
          className="App-link"
          href="https://dashboard.heroku.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Heroku
        </a>
        <pre>Warning! ⚠️ This App is enabled with auto deployment, any commits to master redoploys.</pre>
      </header>
    </div>
  );
}

export default App;
