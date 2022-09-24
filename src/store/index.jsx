import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./products/slice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
  },
});

export default store;
