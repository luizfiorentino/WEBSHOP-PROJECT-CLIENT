import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./products/slice";
import categorySlice from "./categories/slice";
import shopCartSlice from "./shopcart/slice";
import commentSlice from "./comments/slice";
import userSlice from "./users/slice";

const store = configureStore({
  reducer: {
    productList: productListSlice,
    categories: categorySlice,
    shopCart: shopCartSlice,
    comments: commentSlice,
    users: userSlice,
  },
});

export default store;
