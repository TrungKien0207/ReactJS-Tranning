import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState('orange');
  return (
    <div>
      { color }
      <button onClick={() => setColor('gray')} >Change to gray</button>
      <button onClick={() => setColor('orange')} >Change to orange</button>
    </div>
  );
}

export default ColorBox;