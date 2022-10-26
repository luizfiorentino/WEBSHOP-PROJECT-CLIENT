import React from "react";

import "./styles.css";

function AboutPage() {
  return (
    <div className="main-container">
      <div className="about-page-main">
        <div className="hero-banner">
          <h1>Meeting our Custumers Needs is our Dearest Goal.</h1>
        </div>

        <h3 className="mission-call">About Us</h3>
      </div>
      <div className="main-text">
        <p className="main-text-inner">
          The OnlineShop is the result of the efforts of a team of webdevelopers
          and online sales experts, who share the dream of offering topnotch
          quality products to the modern costumer.{" "}
        </p>
        <p className="main-text-inner">
          We want to make online shopping a intuitive, safe, and time-saving
          experience. For this, our team of professionals are continuously
          connected to the new trends in different sales segments, to bring you
          diversity, innovation, and fun while online shopping!
        </p>
        <p className="main-text-inner">
          Our team values a lot your opinion regarding both the buying
          experience and the products from our shop. Please feel welcome to
          leave a review in the product's details page, or send us an e-mail
          with suggestions to:{" "}
          <span className="email-text">contact@online-shop.com</span>
          We'll be happy to hearing from you and improve our services!
        </p>

        <p className="main-text-inner">
          Check out some of the benefits of buying with the OnlineShop:
        </p>
        <ul className="benefit-topics">
          <li className="benefit-list-items">
            Top quality products in line with the newest trends
          </li>
          <li className="benefit-list-items">
            Fast online support from a team of careful specialists
          </li>
          <li className="benefit-list-items"> Safe transactions</li>
          <li className="benefit-list-items">Product quality guarantee</li>
        </ul>
      </div>
      <div className="about-page-footer">
        <p className="costumer-call-about-page">
          We're happy to help or get any suggestion from you! Please send an
          email to our costumer's center:{" "}
          <span className="costumer-center-email">support@online-shop.com</span>{" "}
        </p>
      </div>
    </div>
  );
}

export { AboutPage };
