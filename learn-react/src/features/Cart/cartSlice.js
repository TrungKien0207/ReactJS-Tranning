const { createSlice } = require('@reduxjs/toolkit')

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      showMiniCart: false,
      cartItem: [],
   }, //gia tri ban dau
   reducers: {
      showMiniCart(state) {
         state.showMiniCart = true
      },

      hideMiniCart(state) {
         state.showMiniCart = false
      },
   },
})

const { actions, reducer } = cartSlice
export const { showMiniCart, hideMiniCart } = actions //name export
export default reducer //default export
