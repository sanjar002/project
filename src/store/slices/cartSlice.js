import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    total:0
  },
  reducers: {
    addCart(state, { payload }) {
      let hasIncart = state.cartData.find((item) => item.id === payload.id);
      if (hasIncart) {
        hasIncart.count += 1;
      } else {
        const newItem = {
          ...payload,
          count: 1,
        };
        state.cartData.push(newItem);
      }
    },
    removeCart(state, action) {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
    },
    calculateTatol(state) {
      state.total = state.cartData.reduce((prev, next)=>{
          return prev + next.price * next.count
      },0)
  },
  incrementQuantity(state, action) {
      const idToUpdate = action.payload.id;
      const itemToUpdate = state.cartData.find(item => item.id === idToUpdate);
      if (itemToUpdate) {
        itemToUpdate.count++;
      }
  },
  decrementQuantity(state, action) {
    const idToUpdate = action.payload.id;
    const itemToUpdate = state.cartData.find(item => item.id === idToUpdate);
    if (itemToUpdate && itemToUpdate.count > 1) {
      itemToUpdate.count--;
    }
  },

  },
});

export const { addCart, removeCart, calculateTatol, decrementQuantity, incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
