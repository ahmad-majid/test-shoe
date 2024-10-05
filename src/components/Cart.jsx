import React from "react";

const Cart = ({ cart, closeCart, viewCart }) => {
  return (
    <div style={styles.cartDropdown}>
      <div style={styles.cartHeader}>
        <h4 style={styles.cartTitle}>Your Cart</h4>
        <button onClick={closeCart} style={styles.closeCart}>
          &times; {/* Close icon */}
        </button>
      </div>
      {cart.length === 0 ? (
        <div style={styles.cartEmpty}>Your cart is empty.</div>
      ) : (
        <div style={styles.cartItems}>
          {cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.cartItemImage}
              />
              <div style={styles.cartItemDetails}>
                <p style={styles.itemName}>{item.name}</p>
                <p style={styles.itemPrice}>${item.price}</p>
                <button onClick={() => { viewCart(); closeCart(); }} style={styles.viewCartButton}>
                  View Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  cartDropdown: {
    position: "absolute",
    right: "20px",
    top: "60px",
    width: "300px",
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    zIndex: 1000,
  },
  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
  },
  cartTitle: {
    margin: "0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  closeCart: {
    background: "none",
    border: "none",
    color: "#f37121",
    fontSize: "20px",
    cursor: "pointer", // Pointer cursor for close button
  },
  cartEmpty: {
    textAlign: "center",
    margin: "20px 0",
    color: "#777",
  },
  cartItems: {
    maxHeight: "300px",
    overflowY: "auto",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    padding: "10px 0",
  },
  cartItemImage: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "5px",
    marginRight: "10px",
  },
  cartItemDetails: {
    flex: 1,
  },
  itemName: {
    margin: "0",
    fontSize: "14px",
    fontWeight: "bold",
    whiteSpace: "nowrap", // Prevent text from wrapping
    overflow: "hidden", // Hide overflow text
    textOverflow: "ellipsis", // Show ellipsis for overflow text
  },
  itemPrice: {
    margin: "5px 0 0 0",
    fontSize: "12px",
    color: "#f37121",
  },
  viewCartButton: {
    backgroundColor: "#f37121", // Same as close button
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
    marginTop: "5px",
  },
};

export default Cart;
