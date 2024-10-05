import React from "react";
import { Link } from "react-router-dom";
import "../styles/SneakerCard.css";

const SneakerCard = ({ sneaker, handleAddToCart, showOptions }) => {
  const addToCart = () => {
    handleAddToCart(sneaker);
  };

  // Function to truncate title to a maximum of four words
  const truncateTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 4) {
      return words.slice(0, 2).join(" ") + "...";
    }
    return title;
  };

  return (
    <div className="sneaker-card">
      <Link to={`/sneaker/${sneaker._id}`} className="sneaker-link">
        <img src={sneaker.image} alt={sneaker.name} className="sneaker-image" />
      </Link>
      <div className="sneaker-details">
        <h3 className="sneaker-title">{truncateTitle(sneaker.name)}</h3>
        <p className="sneaker-brand">Brand: {sneaker.brand}</p>
        <p className="sneaker-price">Price: ${sneaker.price}</p>
        
        <button onClick={addToCart} className="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SneakerCard;
