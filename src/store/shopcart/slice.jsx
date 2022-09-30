import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  listOfProducts: [],
  totalPurchaseValue: 0,
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
    setTotalValue: (state, action) => {
      state.totalPurchaseValue = action.payload;
      console.log("totalValue slice:", action.payload);
    },
  },
});

export const { addItem, removeItem, setTotalValue } = productListSlice.actions;
export default productListSlice.reducer;
