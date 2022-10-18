import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/users/thunks";
import { useNavigate, Link } from "react-router-dom";
import { SigninForm } from "../../components";
import { selectToken } from "../../store/users/selectors";
import "./styles.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const token = useSelector(selectToken);

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      setButtonClicked(true);
    } else {
      dispatch(login(email, password, navigate));

      setEmail("");
      setPassword("");
      setButtonClicked(false);
      setInvalidCredentials(true);
    }
  }

  return (
    <div className="login-page-main-container">
      <h3>Please enter your email and password to login</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <label className="input-inner">
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="input-inner">
            Password:
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
      {buttonClicked === true ? (
        <p className="login-error-message">
          Email and password must be entered
        </p>
      ) : undefined}
      {!token && invalidCredentials === true ? (
        <p className="login-error-message">
          Email and/or password don't match. Please try again.
        </p>
      ) : undefined}
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
