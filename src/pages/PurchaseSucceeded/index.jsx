import React from "react";
import { Link } from "react-router-dom";
function PurchaseSucceeded() {
  return (
    <div>
      <h3>Thanks for shopping with us!</h3>
      <h4>
        You'll receive the purchase items in the informed address within two
        working days counting from now .
      </h4>
      <p>
        In case of any question or need to communication, please contact our
        online helpline:
      </p>
      <p>support@TheOnlineShop.com</p>
      <p>And we'll be happy to help you!</p>
      <button>
        <Link to="/">Back to the Home Page</Link>
      </button>
    </div>
  );
}
export { PurchaseSucceeded };