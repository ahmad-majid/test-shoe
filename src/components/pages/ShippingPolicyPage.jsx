import React from "react";
import "../styles/ShippingPolicyPage.css";

const ShippingPolicyPage = () => {
  return (
    <div className="shipping-policy-page">
      <header className="page-header">
        <h1 className="page-title">Shipping Policy</h1>
      </header>

      <section className="policy-section">
        <h2 className="section-title">Shipping Methods</h2>
        <p className="section-text">
          We offer a variety of convenient shipping methods to meet your
          delivery needs. Choose from standard, expedited, or express shipping
          options for faster delivery.
        </p>

        <h3 className="sub-title">Shipping Rates</h3>
        <p className="section-text">
          Our shipping rates are competitive and affordable. Shipping costs are
          calculated based on the selected shipping method, item weight, and
          delivery location. You can review shipping costs during the checkout
          process.
        </p>

        {/* Add more shipping methods and rates content */}
      </section>

      <section className="delivery-section">
        <h2 className="section-title">Estimated Delivery Time</h2>
        <p className="section-text">
          We strive to deliver your orders promptly. The estimated delivery time
          depends on your chosen shipping method and your location. During
          checkout, you can see the expected delivery date.
        </p>

        <h3 className="sub-title">Tracking Your Order</h3>
        <p className="section-text">
          Keep tabs on your order with our tracking system. Once your order is
          shipped, you will receive a tracking number to monitor the status and
          location of your package in real-time.
        </p>

        {/* Add more delivery and tracking content */}
      </section>

      <footer className="page-footer">
        <p className="footer-text">
          If you have any inquiries or require further assistance concerning our
          Shipping Policy, please don't hesitate to{" "}
          <a href="/contact" className="contact-link">
            contact us
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default ShippingPolicyPage;
