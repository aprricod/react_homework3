import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Точное время</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
}

setInterval(App, 30000);

export default App;
