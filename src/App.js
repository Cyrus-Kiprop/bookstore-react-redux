import React from "react";
import logo from "./bookstore-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" target="_blank" rel="noopener noreferrer">
          React Bookstore
        </a>
      </header>
    </div>
  );
}

export default App;
