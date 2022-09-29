import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: [],
  accessToken: null,
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
      state.accessToken = action.payload.jwt;
      state.me = action.payload.usersData;
      state.loading = false;
    },
    loggedIn: (state, action) => {
      state.accessToken = action.payload.jwt;
      state.me = [...action.payload.usersData];
      state.loading = false;
      //console.log("slice::", action.payload);
    },
  },
});

export const { startLoading, signin, loggedIn } = commentSlice.actions;

export default commentSlice.reducer;
