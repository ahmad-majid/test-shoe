import React, { useState } from "react";
import axios from "axios";
import "../styles/ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!formData.email.includes("@") || !formData.email.includes(".com")) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      // Send form data to the backend
      await axios.post("http://localhost:5000/api/contact/submit", formData);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: contact@sneakerworld.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Sneaker Street, City, Country</p>
      </div>
    </div>
  );
}

export default ContactPage;
