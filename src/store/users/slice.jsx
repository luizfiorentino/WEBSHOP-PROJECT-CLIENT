import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: [],
  accessToken: null,
  loading: false,
  userEmail: null,
};

export const commentSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    loggedIn: (state, action) => {
      state.accessToken = action.payload.jwt;
      state.me = [...action.payload.usersData];
      state.loading = false;
      //console.log("slice::", action.payload);
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      return initialState;
    },
  },
});

export const { startLoading, signin, loggedIn, setUserEmail, logout } =
  commentSlice.actions;

export default commentSlice.reducer;
