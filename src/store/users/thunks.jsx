import { startLoading, loggedIn, setUserEmail } from "./slice";
import axios from "axios";

export function login(email, password, navigate) {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());

      const loginRequest = await axios.post(`http://localhost:4000/login`, {
        email: email,
        password: password,
      });
      const { jwt } = loginRequest.data;
      console.log("login thunk JWT", jwt);
      const response = await axios.get(
        `http://localhost:4000/login/me`,

        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );

      const usersData = response.data;
      localStorage.setItem("token", jwt);
      localStorage.setItem("userEmail", email);
      dispatch(loggedIn({ jwt, usersData }));
      dispatch(setUserEmail(email));
      navigate("/");
    } catch (e) {
      console.log({ "error at login": e.message });
      alert("email address and/ or password don't match, please try again");
    }
  };
}

export function signinThunk(name, email, password, navigate) {
  try {
    return async function thunk(dispatch, getState) {
      try {
        dispatch(startLoading());
        const newUser = await axios.post("http://localhost:4000/users", {
          name: name,
          email: email,
          password: password,
        });
        const response = newUser.data;
        console.log("thunk new user::", response);

        const login = await axios.post(`http://localhost:4000/login`, {
          email: email,
          password: password,
        });
        const { jwt } = login.data;
        const meRequest = await axios.get(`http://localhost:4000/login/me`, {
          headers: { Authorization: `Bearer ${jwt}` },
        });
        const usersData = meRequest.data;
        localStorage.setItem("token", jwt);
        localStorage.setItem("userEmail", email);

        dispatch(loggedIn({ jwt, usersData }));
        dispatch(setUserEmail(email));
        navigate("/");
      } catch (e) {
        console.log(e.message);
      }
    };
  } catch (e) {
    console.log(e.message);
  }
}

export async function bootstrapLoginState(dispatch, useState) {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userEmail");
    if (token) {
      const response = await axios.get(`http://localhost:4000/login/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(loggedIn({ jwt: token, usersData: response.data }));
      dispatch(setUserEmail(email));
    }
  } catch (e) {
    console.log(e.message);
  }
}
