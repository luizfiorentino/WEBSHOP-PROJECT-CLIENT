import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  allOrders: [],
  allOrderItems: [],
};

export const commentSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    fetchOrders: (state, action) => {
      state.allOrders = [...action.payload];
      state.loading = false;
    },
    fetchOrderItems: (state, action) => {
      state.allOrderItems = [...action.payload];
      state.loading = false;
    },
    placeOrder: (state, action) => {
      state.allOrders = [...state.allOrders, action.payload];
      state.loading = false;
      console.log("neworder slice", action.payload);
    },
    placeOrderItem: (state, action) => {
      state.allOrders = [...state.allOrders, action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, fetchOrders, placeOrder, placeOrderItem } =
  commentSlice.actions;

export default commentSlice.reducer;
