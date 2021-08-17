const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      showMiniCart: false,
      cartItems: [],
   }, //* gia tri ban dau
   reducers: {
      showMiniCart(state) {
         state.showMiniCart = true;
      },

      hideMiniCart(state) {
         state.showMiniCart = false;
      },

      addToCart(state, action) {
         //* newItem = {id, product, quantity}
         const newItem = action.payload;

         //* check id product is available in cart
         const index = state.cartItem.find((x) => x.id === newItem.id);

         if (index >= 0) {
            //* increase quantity
            state.cartItem[index].quantity += newItem.quantity;
         } else {
            //* add to cart
            state.cartItem.push(newItem);
         }
      },

      setQuantity(state, action) {
         const { id, quantity } = action.payload;

         //* check id product is available in cart
         const index = state.cartItem.find((x) => x.id === id);

         if (index >= 0) {
            state.cartItem[index].quantity = quantity;
         }
      },

      removeFromCart(state, action) {
         const idNeedRemove = action.payload;
         state.cartItem = state.cartItem.filter((x) => x.id !== idNeedRemove);
      },
   },
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart } = actions; //* name export
export default reducer; //* default export
