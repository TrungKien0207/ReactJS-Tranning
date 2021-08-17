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
         const index = state.cartItems.find((x) => x.id === newItem.id);

         if (index >= 0) {
            //* increase quantity
            state.cartItems[index].quantity += newItem.quantity;
         } else {
            //* add to cart
            state.cartItems.push(newItem);
         }
      },

      setQuantity(state, action) {
         const { id, quantity } = action.payload;

         //* check id product is available in cart
         const index = state.cartItems.find((x) => x.id === id);

         if (index >= 0) {
            state.cartItems[index].quantity = quantity;
         }
      },

      removeFromCart(state, action) {
         const idNeedRemove = action.payload;
         state.cartItems = state.cartItems.filter((x) => x.id !== idNeedRemove);
      },
   },
});

const { actions, reducer } = cartSlice;

export const {
   showMiniCart,
   hideMiniCart,
   addToCart,
   removeFromCart,
   setQuantity,
} = actions; //* name export

export default reducer; //* default export
