import React, { useState, useEffect } from "react";
import './App.css';
import Project from './components/Project'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Project />
      </header>
    </div>
  );
}

export default App;