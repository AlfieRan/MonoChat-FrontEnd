import React from "react";
import { exchangeTest } from "./api/api_connection";
import "./App.css";
// import runConnectionTest from "./api/api_connection";

function App() {
  // let testData = runConnectionTest();
  let test: string = "failed";
  // if (testData.status === "loaded" && testData.payload.Succesful) {
  //   test = "Succesful!";
  // }
  exchangeTest();

  return (
    <div className="App">
      <header className="App-header">
        <h1>MonoChat</h1>
        <p>Connection Test: {test}</p>
      </header>
    </div>
  );
}

export default App;
