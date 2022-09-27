import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./products/slice";
import categorySlice from "./categories/slice";
import shopCartSlice from "./shopcart/slice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
    categories: categorySlice,
    shopCart: shopCartSlice,
  },
});

export default store;
