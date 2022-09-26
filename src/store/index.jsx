import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./products/slice";
import categorySlice from "./categories/slice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
    categories: categorySlice,
  },
});

export default store;
