import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  allCategories: [],
};

export const productListSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    fetchAllCategories: (state, action) => {
      state.allCategories = [...action.payload];
      console.log("action.payload:::", action.payload);
      state.loading = false;
    },
  },
});

export const { startLoading, fetchAllCategories } = productListSlice.actions;
export default productListSlice.reducer;
