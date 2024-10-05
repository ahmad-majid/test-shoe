import React from "react";
import "../styles/TermsAndConditions.css";
function TermsAndConditions() {
  return (
    <div className="terms-and-conditions">
      <h1>Terms and Conditions</h1>

      <p>
        Welcome to [Your Company]! We're excited to have you as a valued user of
        our services. These Terms and Conditions outline the rules and
        regulations for using our website.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using this website, you agree to comply with and be bound by these
        Terms and Conditions. If you do not agree with any part of these terms,
        please do not use our website.
      </p>

      <h2>2. Use of the Website</h2>
      <p>
        You must be at least 18 years old to use this website. You agree to use
        the website in a manner consistent with all applicable laws and
        regulations.
      </p>

      <h2>3. Privacy and Security</h2>
      <p>
        We value your privacy and have implemented measures to protect your
        personal information. Please review our{" "}
        <a href="/privacy-policy">Privacy Policy</a> to understand how we handle
        your data.
      </p>

      <h2>4. Content Ownership</h2>
      <p>
        All content on this website, including text, graphics, logos, and
        images, is the intellectual property of [Your Company]. You may not use,
        reproduce, or distribute any content without our explicit permission.
      </p>

      <h2>5. Termination</h2>
      <p>
        We reserve the right to terminate or suspend your access to the website
        at any time without notice if you violate these Terms and Conditions or
        engage in any prohibited activities.
      </p>

      <h2>6. Changes to Terms</h2>
      <p>
        [Your Company] reserves the right to modify or revise these Terms and
        Conditions at any time. We will notify users of any changes, and it is
        your responsibility to review the updated terms.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms and Conditions,
        please <a href="/contact">contact us</a>. We're here to assist you.
      </p>

      <p>
        Thank you for choosing [Your Company]. We hope you enjoy using our
        services and products!
      </p>
    </div>
  );
}

export default TermsAndConditions;
