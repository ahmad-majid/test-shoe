import React from "react";
import "../styles/HowToOrderPage.css";
const HowToOrder = () => {
  return (
    <div>
      <section className="introduction">
        <h1>How to Order</h1>
        <p>
          Welcome to our easy ordering process. Follow these steps to get your
          favorite sneakers delivered to your doorstep.
        </p>
      </section>

      <section className="step-by-step-guide">
        <h2>Step-by-Step Guide</h2>
        <ol>
          <li>Visit our website and browse our wide selection of sneakers.</li>
          <li>
            Select the sneakers you want to purchase and add them to your cart.
          </li>
          <li>Review your cart and click "Checkout."</li>
          <li>Provide your shipping and payment information.</li>
          <li>Review your order details and click "Place Order."</li>
          <li>Wait for your order confirmation and shipment updates.</li>
        </ol>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="faq-item">
          <h3>How long will it take to receive my order?</h3>
          <p>
            Delivery times may vary based on your location. You can check the
            estimated delivery date during checkout.
          </p>
        </div>
        {/* Add more FAQ items */}
      </section>

      <section className="cta">
        <h2>Start Shopping Today</h2>
        <p>
          Ready to get started? Explore our latest sneaker collection and find
          your perfect pair.
        </p>
        <a href="/">Shop Now</a>
      </section>
    </div>
  );
};

export default HowToOrder;
