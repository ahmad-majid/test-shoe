import React from "react";
import "../styles/ReturnAndExchangePage.css";

const ReturnAndExchangePage = () => {
  return (
    <div className="return-and-exchange-page">
      <header className="page-header">
        <h1 className="page-title">Return and Exchange Policy</h1>
      </header>

      <section className="policy-section">
        <h2 className="section-title">Our Return Policy</h2>
        <p className="section-text">
          At Weezy Shoes, we want you to be completely satisfied with your
          purchase. If you're not happy with your purchase for any reason, you
          may return it within 30 days of receiving your order. Please ensure
          that the item is in new and unused condition with all original tags
          and packaging.
        </p>

        <h3 className="sub-title">How to Initiate a Return</h3>
        <p className="section-text">
          To initiate a return, please contact our customer support team at{" "}
          <a className="contact-link" href="mailto:returns@weezyshoes.com">
            returns@weezyshoes.com
          </a>
          . Provide your order number and reason for the return. Our team will
          guide you through the return process.
        </p>

        <h2 className="section-title">Our Exchange Policy</h2>
        <p className="section-text">
          If you received a defective or incorrect item, we offer exchanges at
          no additional cost. Please contact our customer support team within 7
          days of receiving your order to request an exchange.
        </p>

        <h3 className="sub-title">Contact Us</h3>
        <p className="section-text">
          If you have any questions or need further assistance, please feel free
          to{" "}
          <a className="contact-link" href="/contact">
            contact us
          </a>
          . Our customer support team is here to help.
        </p>
      </section>

      <footer className="page-footer">
        <p className="footer-text">
          If you have any questions regarding our return and exchange policy,
          please don't hesitate to{" "}
          <a className="contact-link" href="/contact">
            contact us
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default ReturnAndExchangePage;
