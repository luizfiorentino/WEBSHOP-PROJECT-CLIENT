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
    addItem: (state, action) => {
      state.listOfProducts = [...state.listOfProducts, action.payload];
    },
    removeItem: (state, action) => {
      state.listOfProducts = [...state.listOfProducts].filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = productListSlice.actions;
export default productListSlice.reducer;
