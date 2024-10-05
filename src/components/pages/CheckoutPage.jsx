import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CheckoutPage.css";

const CheckoutPage = ({ cart, clearCart }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: "Credit Card",
    sneakers: [], // Initialize sneakers as an empty array
  });

  const navigate = useNavigate(); // Use the useNavigate hook from react-router-dom

  // Function to format sneaker details from cart items
  const formatSneakersForCheckout = (cartItems) => {
    return cartItems.map((item) => ({
      id: item._id, // Assuming _id is the identifier for the sneaker
      name: item.name,
      price: item.price,
      quantity: item.quantity || 1, // Adjust as per your cart structure
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Format sneakers before submitting
      const sneakersData = formatSneakersForCheckout(cart);

      const response = await axios.post(
        "http://localhost:5000/api/checkout/create",
        { ...formData, sneakers: sneakersData } // Include sneakers data in formData
      );
      console.log("Checkout successful:", response.data);
      // After successful submission, clear the cart
      clearCart();
      // Redirect to the Thank You page
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting checkout:", error);
      // Handle error scenarios, e.g., show an error message to the user
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group half-width">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group half-width">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group half-width">
            <label>ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group half-width">
            <label>Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>
        </div>
        <button type="submit" className="submit-button">
          Place Order
        </button>
      </form>
      <Link to="/cart" className="back-to-cart-link">
        Back to Cart
      </Link>
    </div>
  );
};

export default CheckoutPage;
