import React from "react";
import "../styles/PrivacyCookiesPage.css";

const PrivacyCookiesPage = () => {
  return (
    <div className="privacy-cookies-page">
      <header className="page-header">
        <h1 className="page-title">Privacy & Cookies Policy</h1>
      </header>

      <section className="policy-section">
        <h2 className="section-title">Your Privacy Matters</h2>
        <p className="section-text">
          At WeezyShoes, we are committed to respecting and protecting your
          privacy. Our Privacy & Cookies Policy explains how we collect, use,
          and safeguard your personal information.
        </p>

        <h3 className="sub-title">What Information We Collect</h3>
        <p className="section-text">
          We may collect personal information such as your name, email address,
          and contact details when you register an account or make a purchase
          on our website.
        </p>

        {/* Add more policy content */}
      </section>

      <section className="cookies-section">
        <h2 className="section-title">Cookies & Tracking</h2>
        <p className="section-text">
          We use cookies to enhance your browsing experience. By continuing to
          use our website, you consent to our use of cookies. You can manage
          your cookie preferences through your browser settings.
        </p>

        <h3 className="sub-title">Third-Party Services</h3>
        <p className="section-text">
          We may use third-party services that collect and process data. Please
          review their respective privacy policies for more information.
        </p>

      </section>

      <footer className="page-footer">
        <p className="footer-text">
          If you have any questions or concerns about our Privacy & Cookies
          Policy, please{" "}
          <a href="/contact" className="contact-link">
            contact us
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default PrivacyCookiesPage;
