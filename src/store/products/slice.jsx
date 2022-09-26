import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  allProducts: [],
  productDetails: null,
};

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    fetchAllProducts: (state, action) => {
      state.allProducts = [...action.payload];
      //console.log("action.payload:::", action.payload);
      state.loading = false;
    },
    fetchProductDetails: (state, action) => {
      state.productDetails = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, fetchAllProducts, fetchProductDetails } =
  productListSlice.actions;
export default productListSlice.reducer;
