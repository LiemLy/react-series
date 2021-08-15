import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Circle from "./components/Circle";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div className="App">
      <h2>P5.JS App</h2>

      <Circle />
      <PieChart />
    </div>
  );
}

export default App;
