import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signinThunk } from "../../store/users/thunks";

function SigninForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(signinThunk(newUser));
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h3>To sign in, please enter your name, email, and a password:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>{" "}
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>{" "}
        <label>
          Password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>{" "}
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}

export { SigninForm };
