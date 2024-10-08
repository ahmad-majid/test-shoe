import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/images/icon-cart.svg"; // Change here
import closeIcon from "../assets/images/icon-close.svg"; // Change here
import "./styles/Navbar.css";

const Navbar = ({
  cart,
  isCartOpen,
  handleCart,
  closeCart,
  removeFromCart,
}) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [menuActive, setMenuActive] = useState(false); // State for mobile menu

  // Effect to update cart items and count
  useEffect(() => {
    const uniqueItems = {};
    cart.forEach((item) => {
      if (uniqueItems[item._id]) {
        uniqueItems[item._id].quantity++;
      } else {
        uniqueItems[item._id] = { ...item, quantity: 1 };
      }
    });
    const uniqueCartItems = Object.values(uniqueItems);
    setCartItems(uniqueCartItems);

    // Calculate total unique items count
    const totalCount = uniqueCartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartItemCount(totalCount);
  }, [cart]);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000); // Reset addedToCart after 2 seconds
  };

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">SNEAKERS</Link>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="/collection">Collections</Link>
        </li>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
      </ul>
      <div className="cart-container">
        <div className="cart-icon-container" onClick={handleCart}>
          <img
            src={cartIcon}
            alt="Cart Icon"
            className={`cart-icon ${addedToCart ? "added-to-cart" : ""}`}
          />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </div>
        {isCartOpen && (
          <div className="cart-dropdown">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <img src={closeIcon} onClick={closeCart} className="close-icon" alt="Close Icon" />
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item._id} className="cart-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div>
                      <p className="cart-item-name">{item.name}</p>
                      <p className="cart-item-price">${item.price}</p>
                      <p className="cart-item-count">
                        Quantity: {item.quantity}
                      </p>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="remove-cart-item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <button onClick={closeCart} className="close-cart-button">
                  Close Cart
                </button>
                <Link 
                  to="/cart" 
                  className="view-cart-link" 
                  onClick={closeCart} // Close cart when viewing
                >
                  View Cart
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
