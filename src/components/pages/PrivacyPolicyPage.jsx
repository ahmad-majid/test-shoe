import React from "react";
import "../styles/PrivacyPolicyPage.css";

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-policy-page">
      <h1>Privacy Policy</h1>

      <p>
        At Sneaker, we are committed to protecting your privacy. This Privacy
        Policy explains how we collect, use, disclose, and safeguard your
        personal information. By using our website and services, you consent to
        the practices described in this policy.
      </p>

      <h2>Information We Collect</h2>

      <p>
        We may collect personal information, including but not limited to, your
        name, email address, mailing address, phone number, and payment
        information when you interact with our website or make a purchase.
      </p>

      <h2>How We Use Your Information</h2>

      <p>
        We may use your personal information to:
      </p>

      <ul className="privacy-details">
        <li>Process and fulfill your orders.</li>
        <li>Send order confirmations and updates.</li>
        <li>Respond to your customer service requests.</li>
        <li>Provide you with marketing communications if you opt-in.</li>
        <li>Improve our website and services.</li>
        <li>Prevent and detect fraud and unauthorized activities.</li>
      </ul>

      <h2>Information Sharing</h2>

      <p>
        We do not sell, trade, or rent your personal information to third
        parties. We may share your information with trusted third-party
        service providers who assist us in operating our website, conducting
        business, or serving you, as long as those parties agree to keep this
        information confidential.
      </p>

      <h2>Security</h2>

      <p>
        We take appropriate security measures to protect your personal
        information. However, no data transmission over the internet or
        electronic storage is entirely secure, so we cannot guarantee absolute
        security.
      </p>

      <h2>Cookies</h2>

      <p>
        We use cookies and similar technologies to enhance your user experience
        on our website. You can disable cookies through your browser settings,
        but this may affect your ability to use certain features of our website.
      </p>

      <h2>Changes to Privacy Policy</h2>

      <p>
        We reserve the right to update this Privacy Policy at any time. Any
        changes will be posted on this page, and the effective date will be
        indicated at the top of the policy.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or concerns about our Privacy Policy, please
        contact us at <a href="mailto:privacy@Sneakershoes.com">privacy@sneakershoes.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
