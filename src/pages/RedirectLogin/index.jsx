import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function RedirectLogin() {
  return (
    <div className="redirect-login-message">
      <h3>Please login to access the shopcart</h3>
      <button>
        <Link to="/">Back to Home Page</Link>
      </button>{" "}
      <button>
        <Link to="/login">Login page</Link>
      </button>
    </div>
  );
}

export { RedirectLogin };
