import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = (state) => state.cartItemSelector.cartItems;

//* Count number of product in cart
export const cartItemsCountSelectors = createSelector(
   cartItemsSelector,
   (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

//* Calculate total of cart
export const cartTotalSelectors = createSelector(
   cartItemsSelector,
   (cartItems) =>
      cartItems.reduce(
         (total, item) => total + item.salePrice * item.quantity,
         0
      )
);
