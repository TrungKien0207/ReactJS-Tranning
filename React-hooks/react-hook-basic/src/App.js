import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Welcome to React Hooks</h1>

      <p>{count}</p>
      <button
        className="btn btn-dark ml-2"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <Hero name="Easy Front-end"/>
    </div>
  );
}

export default App;