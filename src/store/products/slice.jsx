import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  allProducts: [],
  productDetails: null,
  productSearch: null,
  page: 1,
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
      console.log("action.payload:::", action.payload);
      state.loading = false;
    },
    fetchProductDetails: (state, action) => {
      state.productDetails = action.payload;
      state.loading = false;
    },
    searchProduct: (state, action) => {
      state.productSearch = action.payload;
    },
    nextPage: (state) => {
      state.page = state.page + 1;
      console.log("slice nextPage", state.page);
    },
    previousPage: (state) => {
      state.page = state.page - 1;
    },
  },
});

export const {
  startLoading,
  fetchAllProducts,
  fetchProductDetails,
  searchProduct,
  nextPage,
  previousPage,
} = productListSlice.actions;
export default productListSlice.reducer;
