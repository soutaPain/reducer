import React from 'react';
import './App.css';
import ComponentA from './components/ComponentsA.js';
import { CountProvider } from './context/CountContext';

function App() {
  return (
    <div className="App">
      <h1>Learn useContext</h1>
      <CountProvider>
        <ComponentA />
      </CountProvider>
    </div>
  );
}

export default App;