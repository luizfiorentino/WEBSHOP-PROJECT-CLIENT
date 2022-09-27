import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  allComments: [],
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    fetchComments: (state, action) => {
      state.allComments = [...action.payload];
      state.loading = false;
    },
    addComment: (state, action) => {
      state.allComments = [...state.allComments, action.payload];
      state.loading = false;
    },
  },
});

export const { startLoading, fetchComments, addComment } = commentSlice.actions;

export default commentSlice.reducer;
