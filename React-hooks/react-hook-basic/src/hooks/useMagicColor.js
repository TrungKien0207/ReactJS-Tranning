import React, { useState, useEffect, useRef } from 'react';

function randomColor(currentColor) {
  const LIST_COLOR = ['#d35d6e', '#5aa469', '#fca3cc', '#f2dcbb'];
  const currentIndex = LIST_COLOR.indexOf(currentColor);
  let newIndex = currentIndex;
  
  while (newIndex === currentIndex) {
    newIndex = Math.trunc(Math.random() * 4);
  }

  console.log(LIST_COLOR[newIndex]);
  return LIST_COLOR[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState('transparent');
  const colorRef = useRef('transparent');

  //Chang color every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      setColor(newColor);

      colorRef.current = newColor;
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    }
  }, []);

  return color;
}

export default useMagicColor;