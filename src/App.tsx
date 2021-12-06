import React from "react";
import { UserInfo } from "./api/types";
import "./App.css";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MonoChat</h1>
        <h2>Find the People you know by name, and chat to them!</h2>
        <SearchBar />
      </header>
    </div>
  );
}

export default App;
