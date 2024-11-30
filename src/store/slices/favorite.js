import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "like",
  initialState: {
    favoriteData: [],
    total:0
  },
  reducers: {
    addFavorite(state, { payload }) {
        let hasIncart = state.favoriteData.find((item) => item.id === payload.id);
        if (hasIncart) {
          hasIncart.count += 1;
        } else {
          const newItem = {
            ...payload,
            count: 1,
          };
          state.favoriteData.push(newItem);
        }
    },
    removeFromFavorites(state, action) {
        state.favoriteData = state.favoriteData.filter(item => item.id !== action.payload);
      },
    calculateTatol(state) {
        state.total = state.favoriteData.reduce((prev, next)=>{
            return prev + next.price * next.count
        },0)
    },
    incrementQuantity1(state, action) {
        const idToUpdate = action.payload.id;
        const itemToUpdate = state.favoriteData.find(item => item.id === idToUpdate);
        if (itemToUpdate) {
          itemToUpdate.count++;
        }
    },
    decrementQuantity1(state, action) {
      const idToUpdate = action.payload.id;
      const itemToUpdate = state.favoriteData.find(item => item.id === idToUpdate);
      if (itemToUpdate && itemToUpdate.count > 1) {
        itemToUpdate.count--;
      }
    },
      
  }
});

export default favoriteSlice.reducer;
export const { addFavorite, removeFromFavorites, calculateTatol, decrementQuantity1, incrementQuantity1  } = favoriteSlice.actions;
