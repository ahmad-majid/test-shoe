import React from "react";
import { useParams } from "react-router-dom";
import "../styles/SneakerDetailPage.css";

const SneakerDetailPage = ({ sneakers, handleAddToCart }) => {
  const { id } = useParams();
  const sneaker = sneakers.find((sneaker) => sneaker._id === id);

  if (!sneaker) {
    return <div className="sneaker-not-found">Sneaker not found</div>;
  }

  return (
    <div className="sneaker-detail-container">
      <div className="sneaker-image-container">
        <img
          src={sneaker.image}
          alt={sneaker.name}
          className="detail-sneaker-image"
        />
      </div>
      <div className="sneaker-info-container">
        <h2 className="detail-sneaker-name">{sneaker.name}</h2>
        <p className="detail-sneaker-brand">Brand: {sneaker.brand}</p>
        <p className="detail-sneaker-price">Price: ${sneaker.price}</p>
        <p className="detail-sneaker-description">{sneaker.description}</p>
        <button
          onClick={() => handleAddToCart(sneaker)}
          className="detail-add-to-cart-button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SneakerDetailPage;
