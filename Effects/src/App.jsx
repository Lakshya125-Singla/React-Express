import React from "react";
import TypingTest from "./components/TypingTest";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title" style={{color:'white'}}>⌨️ Typing Speed Test</h1>
      <TypingTest />
    </div>
  );
}

export default App;
