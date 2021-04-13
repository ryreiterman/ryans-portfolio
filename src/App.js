import React, { useState, useEffect } from "react";
import './App.css';
import Project from './components/Project'

function App(props) {
  return (
    <>
      <div className="header-container">
        <h1 className="header-h1">Ryan Reiterman</h1>
        {/* <div className="header-title">Software Engineer</div> */}
        <ul className="header-contact">
          <li>
            <a href="mailto:ryreiterman@gmail.com">ryreiterman@gmail.com</a>
          </li>{" "}
          |{" "}
          <li>
            <a target="new" href="https://www.linkedin.com/in/ryanreiterman/">
              linkedin.com/in/ryanreiterman
            </a>
          </li>
        </ul>
      </div>
      <div className="App">
        <header className="App-header">
          <Project />
        </header>
      </div>
    </>
  );
}

export default App;
