import React from "react";
import { Link } from "react-router-dom";
import "../styles/ThankYouPage.css";

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/" className="continue-shopping-link">
        Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYouPage;
