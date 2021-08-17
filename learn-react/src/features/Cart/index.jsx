import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { cartTotalSelectors } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
   const totalPrice = useSelector(cartTotalSelectors);

   return <div>Cart Feature {totalPrice}</div>;
}

export default CartFeature;
