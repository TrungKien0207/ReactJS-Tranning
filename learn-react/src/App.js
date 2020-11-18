import React from 'react';
import logo from './logo.svg';
//import './App.css';
import TodoFeature from './features/Todo';
import Count from './components/Count';
import ColorBox from './components/ColorBox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <TodoFeature />
      {/* <Count />
      <ColorBox /> */}
    </div>
  );
}

export default App;
