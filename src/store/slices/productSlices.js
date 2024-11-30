import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return await axios.get("/products");
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsData: null,
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsData = action.payload.data;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = action.error;
      
    });
  },
});

export default productsSlice.reducer;
