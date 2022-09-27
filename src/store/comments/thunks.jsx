import { startLoading, fetchComments, addComment } from "./slice";
import axios from "axios";

export const allCommentsThunk = async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const commentsList = await axios.get("http://localhost:4000/comments");
    const response = commentsList.data;
    console.log("thunk response::", response);

    dispatch(fetchComments(response));
  } catch (e) {
    console.log(e.message);
  }
};

export function postComment(productId, userId, comment) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());
      const userId = 1; // for now hardcoded
      const newComment = { productId: productId, userId, comment: comment };
      const postComment = await axios.post("http://localhost:4000/comments", {
        newComment,
      });
      const response = postComment.data;
      console.log("thunk response::", response);
      dispatch(addComment(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
}
