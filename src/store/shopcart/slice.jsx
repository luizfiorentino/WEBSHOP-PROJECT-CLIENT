import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  totalValue: 0,
  listOfProducts: [],
};

export const productListSlice = createSlice({
  name: "shopCart",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    addItem: (state, action) => {
      state.listOfProducts = [...state.listOfProducts, action.payload];
      state.loading = false;
    },
    removeItem: (state, action) => {
      state.listOfProducts = [...state.listOfProducts].filter(
        (product) => product.id !== action.payload
      );
      state.loading = false;
    },
  },
});

export const { startLoading, addItem, removeItem } = productListSlice.actions;
export default productListSlice.reducer;
