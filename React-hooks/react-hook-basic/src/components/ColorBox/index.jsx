import React, { useState } from 'react';
import './styles.scss';

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState( () => {
    const initColor = localStorage.getItem('box-color') || 'deeppink';
    return initColor;
    //chi render 1 lan
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem('box-color', newColor); //lưu lại màu đã được chọn để tránh khi reload color=default
  }

  return (
    <div 
      className='color-box' 
      style={{ backgroundColor: color }} 
      onClick={ handleBoxClick }
    >import moduleName from 'module'
    </div>
  );
}

export default ColorBox;