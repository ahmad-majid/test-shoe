import React, { useState } from "react";
import "./styles/Footer.css";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function SneakerFooter() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear any previous error messages
    setError("");
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    // Validate the email address
    if (!isValidEmail(email)) {
      setError("Invalid email format");
      return;
    }

    // Create a JavaScript object with the email
    const emailData = { email };

    try {
      // Send a POST request to your backend API
      const response = await fetch("http://localhost:5000/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        // Email submission successful
        console.log("Email submitted successfully");
        // Clear the email input
        setEmail("");
      } else {
        console.error("Failed to submit email");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <footer className="sneaker-footer">
      <div className="subscribe">
        <h3>Newsletter</h3>
        <form style={{ display: "flex" }} onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="footer-content">
        {/* Column 1 */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src={logo} alt="footer-logo"></img>
          </div>
          <ul className="contact-information">
            <li className="media">
              <div className="contact-text">Whatsapp: +92 123 456 789</div>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <div className="nasa-nav-sc-menu">
            <div className="nasa-nav-sc-menu-container">
              <ul className="nasa-menu-wrapper">
                <li className="menu-item menu-item-type-post_type menu-item-object-page default-menu root-item nasa_even">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page default-menu root-item nasa_odd">
                  <Link to="/FAQ">FAQ</Link>
                </li>

                <li className="menu-item menu-item-type-post_type menu-item-object-page default-menu root-item nasa_odd">
                  <Link to="/how-to-order">How To Order</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page default-menu root-item nasa_even">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <div className="nasa-nav-sc-menu">
            <div className="nasa-nav-sc-menu-container">
              <ul className="nasa-menu-wrapper">
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy default-menu root-item nasa_even">
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page default-menu root-item nasa_odd">
                  <Link to="/termsandconditions">Terms & Conditions</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page default-menu root-item nasa_even">
                  <Link to="/cookies">Privacy & Cookies</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page default-menu root-item nasa_odd">
                  <Link to="/shippingpolicy">Shipping Policy</Link>
                </li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page default-menu root-item nasa_even">
                  <Link to="/retun&exchange">Return & Exchange</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="footer-column">
          <ul className="nasa-opening-time">
            <li>
              <span className="nasa-day-open">Monday - Friday</span>
              <span className="nasa-time-open">10:00 am - 10:00 pm</span>
            </li>
            <li>
              <span className="nasa-day-open">Saturday</span>
              <span className="nasa-time-open">10:00 am - 12:00 pm</span>
            </li>
            <li>
              <span className="nasa-day-open">Sunday</span>
              <span className="nasa-time-open">10:00 am - 12:00 pm</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Closing line */}
      <hr />

      {/* Copyright text */}
      <div className="copyright-text">
        © {currentYear} SNEAKERS X - All Right Reserved
      </div>
    </footer>
  );
}

export default SneakerFooter;
