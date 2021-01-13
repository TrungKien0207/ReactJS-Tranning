import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlide';

CounterFeatures.propTypes = {
  
};

function CounterFeatures(props) {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const handleIncreaseClick = () => {
    const action = increase();
    console.log(action);
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    console.log(action);
    dispatch(action);
  };

  return (
    <div>
      Couter: { count }

      <div>
        <button onClick={handleIncreaseClick} type="button" className="btn btn-success m-1">Increase</button>
        <button onClick={handleDecreaseClick} type="button" className="btn btn-danger m-1">Increase</button>
      </div>
    </div>
  );
}

export default CounterFeatures;