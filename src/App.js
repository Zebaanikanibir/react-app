import React from 'react';
import NavHead from './Component/NavHead';
import './App.css';
import Home from './Component/Home';
import NavBottom from './Component/NavBottom';

function App() {
  return (
    <div className="App">
      <NavHead></NavHead>
      <Home></Home>
      <NavBottom></NavBottom>
      </div>
  );
}

export default App;
