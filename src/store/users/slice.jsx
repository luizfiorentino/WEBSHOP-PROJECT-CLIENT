import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null,
  token: null,
  loading: false,
};

export const commentSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    signin: (state, action) => {
      state.me = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, signin } = commentSlice.actions;

export default commentSlice.reducer;
