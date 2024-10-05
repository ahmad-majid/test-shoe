import React from "react";
import { Link } from "react-router-dom";
import "../styles/ViewCartPage.css";

const ViewCartPage = ({ cart, removeFromCart }) => {
  const uniqueCartItems = [
    ...new Map(cart.map((item) => [item._id, item])).values(),
  ];

  return (
    <div className="view-cart-page">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-items">
        {uniqueCartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          uniqueCartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img
                style={{ width: "200px", height: "200px" }}
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price">${item.price}</p>
                <p className="cart-item-quantity">
                  Quantity:{" "}
                  {cart.filter((cartItem) => cartItem._id === item._id).length}
                </p>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="remove-cart-item"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-actions">
        <Link to="/collection" className="continue-shopping-link">
          Continue Shopping
        </Link>
        <Link to="/checkout" className="proceed-to-checkout-link">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default ViewCartPage;
