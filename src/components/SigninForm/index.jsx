import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signinThunk } from "../../store/users/thunks";
import { useNavigate } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.css";

function SigninForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [badRequest, setBadRequest] = useState(false);
  const [noCheckPassword, setNoCheckPassword] = useState(false);
  const [signinSucceeded, setSigninSucceeded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      name: name,
      email: email,
      address: address,
      password: password,
    };
    if (!name || !email || !password || !confirmPassword) {
      setBadRequest(true);
    } else if (password !== confirmPassword) {
      setBadRequest(false);
      setNoCheckPassword(true);
    } else {
      dispatch(signinThunk(name, email, password, address, navigate));
      setName("");
      setEmail("");
      setAddress("");
      setPassword("");
      setConfirmPassword("");
      setBadRequest(false);
      setNoCheckPassword(false);
      setSigninSucceeded(true);
    }
  }
  return (
    <div className="main-signin-container">
      <div className="signin-title">
        {signinSucceeded ? undefined : <h3>Sign in form</h3>}
      </div>
      <div>
        {signinSucceeded ? (
          <h2 className="created-account-message">
            {" "}
            <BsBagCheckFill className="signin-icon" /> Account created with
            success!
          </h2>
        ) : (
          <form className="signin-form" onSubmit={handleSubmit}>
            <label className="signin-field-inner">
              * Name
              <input
                className="signin-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>{" "}
            <label className="signin-field-inner">
              {" "}
              Address
              <input
                className="signin-input"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>{" "}
            <label className="signin-field-inner">
              * Email
              <input
                className="signin-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>{" "}
            <label className="signin-field-inner">
              * Password
              <input
                className="signin-input"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>{" "}
            <label className="signin-field-inner">
              * Confirm password
              <input
                className="signin-input"
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>{" "}
            <div>
              {badRequest ? (
                <p className="bad-request-message">
                  All fields marked with a * must be filled
                </p>
              ) : undefined}
              {noCheckPassword ? (
                <p className="bad-request-message">Passwords don't match</p>
              ) : undefined}
            </div>
            <div>
              <span className="mandatory-fields-message">
                * are mandatory fields
              </span>
            </div>
            <p className="signin-submit-button">
              <button type="submit">Submit</button>
            </p>
          </form>
        )}
      </div>
      <div className="goto-hp-link">
        {signinSucceeded ? (
          <button>
            <Link to="/">Go the Home Page</Link>
          </button>
        ) : undefined}
      </div>
    </div>
  );
}

export { SigninForm };
