import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

var headers = {"Content-Type": "application/json"}

function App() {
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/", {
      method: "GET",
      mode: "no-cors",
      headers: headers
    });
    console.log(res)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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