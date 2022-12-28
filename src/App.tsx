import React from 'react';
import avatar from './assets/avatar.png';
import './App.css';
import HomePage from "./components/HomePage";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <img src={avatar} className="App-logo" alt="Avatar of Emma" />
        <HomePage/>
    </div>
  );
}

export default App;
