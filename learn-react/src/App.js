import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Kien';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend'
  };
  const colorList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <p>Owner: Kien Dang</p>
        
        <p>Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'}</p>
        
        {isMale ? <p>Male</p> : <p>Female</p>} {/* Dùng cho điều kiện ngắn */}
        
        {isMale && <p>Male</p>} {/* Dùng cho điều kiện dài */}
        {!isMale && <p>Female</p>} {/* Dùng cho điều kiện dài */}
        
        {/* render không muốn xuất hiện cha (<div></div>) trong một điều kiện */}
        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )} 
        {/* HOặc sử dụng cách ngắn gọn hơn */}
        {isMale && (
          <>
            <p>Male 4</p>
            <p>Male 5</p>
            <p>Male 6</p>
          </>
        )} 

        {/* Render object */}
        <p>{student.name}</p>

        {/* Render array */}
        <ul>
          {colorList.map(color => (
            <li key={ color }style={{ color }} >{color}</li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
