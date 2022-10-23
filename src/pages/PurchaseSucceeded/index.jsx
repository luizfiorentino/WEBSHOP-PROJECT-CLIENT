import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { FaGlassCheers } from "react-icons/fa";

function PurchaseSucceeded() {
  return (
    <div className="confirmation-main">
      <div className="thanks-message">
        {" "}
        <h3>
          <FaGlassCheers className="cheers-icon" /> Thanks for shopping with us!{" "}
          <FaGlassCheers className="cheers-icon" />
        </h3>
      </div>
      <div className="confirmation-message">
        <h4>
          We'll send you a confirmation email as soon the payment is confirmed,
          and you'll receive the purchase items in the informed address within
          two working days counting from now.
        </h4>
        <p className="purchase-succeeded">
          In case of any question or need to communication, please contact our
          costumer's service:
        </p>
        <p className="purchase-succeeded">
          <strong>support@online-shop.com</strong>
        </p>
        <p className="purchase-succeeded">And we'll be happy to help you!</p>
        <div className="back-hp-button">
          <button>
            <Link className="hp-link" to="/">
              Back to Home Page
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export { PurchaseSucceeded };
