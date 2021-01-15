import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlide';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 32,
    padding: '0 24px',
    margin: '10px',
  },
});

CounterFeatures.propTypes = {};

function CounterFeatures(props) {
  const classes = useStyles();

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
        <Button className={ classes.root } onClick={ handleIncreaseClick } >
          Increase
        </Button>
        
        <Button className={ classes.root } onClick={ handleDecreaseClick } >
          Increase
        </Button>
      </div>
    </div>
  );
}

export default CounterFeatures;