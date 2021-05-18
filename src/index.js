import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <>
//     <App />
//   </>,
//   document.getElementById("root")
// );

// reportWebVitals();

// изменения в ветке hw3-ex2 для теста

function Time() {
  const elem = (
    <div>
      <h1>Точное время</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  );
  ReactDOM.render(elem, document.getElementById("root"));
}

setInterval(Time, 30000);
