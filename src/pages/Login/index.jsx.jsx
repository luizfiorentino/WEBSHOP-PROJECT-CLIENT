import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/users/thunks";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    dispatch(login(email, password, navigate));

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}

export { Login };
