import { startLoading, signin } from "./slice";
import axios from "axios";

export function signinThunk({ name, email, password }) {
  try {
    return async function (dispatch, getState) {
      try {
        dispatch(startLoading());
        const newUser = await axios.post("http://localhost:4000/users", {
          name,
          email,
          password,
        });
        const response = newUser.data;
        console.log("thunk new user::", response);

        dispatch(signin(response));
      } catch (e) {
        console.log(e.message);
      }
    };
  } catch (e) {
    console.log(e.message);
  }
}
