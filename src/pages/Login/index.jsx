import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/users/thunks";
import { useNavigate, Link } from "react-router-dom";
import { SigninForm } from "../../components";
import { selectToken } from "../../store/users/selectors";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      alert("Email and password must be informed");
    } else {
      dispatch(login(email, password, navigate));

      setEmail("");
      setPassword("");
    }
  }

  return (
    <div>
      <h3>Please enter your email and password to login</h3>
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
      <h4>Don't have and account yet?</h4>
      <p>
        <Link to="/signin">
          <button>Click here to sign in</button>
        </Link>
      </p>
    </div>
  );
}

export { Login };
