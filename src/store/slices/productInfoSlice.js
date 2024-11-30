import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProductInfo = createAsyncThunk(
  "productinfo/getProductInfo",
  async (id) => {
    return await axios.get("https://api.escuelajs.co/api/v1/products/"+id);
  }
);

const productInfoSlice = createSlice({
  name: "productinfo",
  initialState: {
    productinfoData: null,
    isLoading: false,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getProductInfo.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getProductInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productinfoData = action.payload.data;
    });

    builder.addCase(getProductInfo.rejected, (state, action) => {
      state.error = action.error;
      
    });
  },
});

export default productInfoSlice.reducer;
